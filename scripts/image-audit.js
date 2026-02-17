const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const SCAN_DIRS = ['app', 'components']
const PUBLIC_DIR = path.join(ROOT, 'public')
const EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js']

function walkDir(dir, exts) {
  let results = []
  if (!fs.existsSync(dir)) return results
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue
      results = results.concat(walkDir(full, exts))
    } else if (!exts || exts.some(e => entry.name.endsWith(e))) {
      results.push(full)
    }
  }
  return results
}

function walkPublic(dir, base) {
  let results = []
  if (!fs.existsSync(dir)) return results
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    const rel = path.join(base, entry.name)
    if (entry.isDirectory()) {
      results = results.concat(walkPublic(full, rel))
    } else if (/\.(jpg|jpeg|png|gif|svg|webp|avif|ico)$/i.test(entry.name)) {
      results.push('/' + rel.replace(/\\/g, '/'))
    }
  }
  return results
}

function inferRouteFromFile(filePath) {
  const rel = path.relative(ROOT, filePath).replace(/\\/g, '/')
  if (rel.startsWith('app/')) {
    let route = rel.replace(/^app/, '').replace(/\/page\.(tsx|ts|jsx|js)$/, '') || '/'
    if (route === '') route = '/'
    return route
  }
  return null
}

function extractSizingFromClassName(className) {
  const hints = []
  const patterns = [
    /w-\[([^\]]+)\]/g, /h-\[([^\]]+)\]/g,
    /w-(\w+)/g, /h-(\w+)/g,
    /aspect-\[([^\]]+)\]/g, /aspect-(\w+)/g,
    /min-h-\[([^\]]+)\]/g, /max-w-\[([^\]]+)\]/g,
    /min-w-\[([^\]]+)\]/g, /max-h-\[([^\]]+)\]/g,
  ]
  for (const pat of patterns) {
    let m
    while ((m = pat.exec(className)) !== null) {
      hints.push(m[0])
    }
  }
  return hints
}

function parseImageUsages(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const rel = path.relative(ROOT, filePath).replace(/\\/g, '/')
  const usages = []

  const nextImageRegex = /<Image\s([^]*?)\/>/gs
  let match
  while ((match = nextImageRegex.exec(content)) !== null) {
    const tag = match[0]
    const srcMatch = tag.match(/src=\{([^}]+)\}/) || tag.match(/src="([^"]+)"/) || tag.match(/src='([^']+)'/)
    const widthMatch = tag.match(/width=\{(\d+)\}/) || tag.match(/width="(\d+)"/)
    const heightMatch = tag.match(/height=\{(\d+)\}/) || tag.match(/height="(\d+)"/)
    const fillMatch = tag.match(/\bfill\b/)
    const classMatch = tag.match(/className="([^"]*)"/) || tag.match(/className=\{`([^`]*)`\}/)
    const sizesMatch = tag.match(/sizes="([^"]*)"/)
    const priorityMatch = tag.match(/\bpriority\b/)

    const parentContext = content.substring(Math.max(0, match.index - 300), match.index)
    const parentClassMatch = parentContext.match(/className="([^"]*)"[^]*$/s)
    const parentSizing = parentClassMatch ? extractSizingFromClassName(parentClassMatch[1]) : []

    usages.push({
      type: 'next/image',
      file: rel,
      src: srcMatch ? srcMatch[1].trim() : 'unknown',
      width: widthMatch ? parseInt(widthMatch[1]) : null,
      height: heightMatch ? parseInt(heightMatch[1]) : null,
      fill: !!fillMatch,
      className: classMatch ? classMatch[1] : null,
      cssSizingHints: classMatch ? extractSizingFromClassName(classMatch[1]) : [],
      parentSizingHints: parentSizing,
      sizes: sizesMatch ? sizesMatch[1] : null,
      priority: !!priorityMatch,
    })
  }

  const imgRegex = /<img\s([^]*?)\/?>(?:<\/img>)?/gs
  while ((match = imgRegex.exec(content)) !== null) {
    const tag = match[0]
    const srcMatch = tag.match(/src="([^"]+)"/) || tag.match(/src='([^']+)'/) || tag.match(/src=\{([^}]+)\}/)
    const widthMatch = tag.match(/width=\{(\d+)\}/) || tag.match(/width="(\d+)"/)
    const heightMatch = tag.match(/height=\{(\d+)\}/) || tag.match(/height="(\d+)"/)
    const classMatch = tag.match(/className="([^"]*)"/)

    usages.push({
      type: 'img',
      file: rel,
      src: srcMatch ? srcMatch[1].trim() : 'unknown',
      width: widthMatch ? parseInt(widthMatch[1]) : null,
      height: heightMatch ? parseInt(heightMatch[1]) : null,
      fill: false,
      className: classMatch ? classMatch[1] : null,
      cssSizingHints: classMatch ? extractSizingFromClassName(classMatch[1]) : [],
      parentSizingHints: [],
      sizes: null,
      priority: false,
    })
  }

  const bgRegex = /background(?:-image)?\s*:\s*url\(['"]?([^'")]+)['"]?\)/g
  while ((match = bgRegex.exec(content)) !== null) {
    usages.push({
      type: 'css-background',
      file: rel,
      src: match[1],
      width: null,
      height: null,
      fill: false,
      className: null,
      cssSizingHints: [],
      parentSizingHints: [],
      sizes: null,
      priority: false,
    })
  }

  return usages
}

function resolveImageSrc(src) {
  if (src.startsWith('"') || src.startsWith("'")) src = src.slice(1, -1)
  if (src.startsWith('/')) return { resolved: src, type: 'local' }
  if (src.startsWith('http')) return { resolved: src, type: 'remote' }
  return { resolved: src, type: 'variable' }
}

function main() {
  const allFiles = []
  for (const dir of SCAN_DIRS) {
    allFiles.push(...walkDir(path.join(ROOT, dir), EXTENSIONS))
  }

  const publicImages = walkPublic(PUBLIC_DIR, '')

  const allUsages = []
  for (const file of allFiles) {
    allUsages.push(...parseImageUsages(file))
  }

  const pageMap = {}
  for (const file of allFiles) {
    const route = inferRouteFromFile(file)
    if (route) {
      const fileRel = path.relative(ROOT, file).replace(/\\/g, '/')
      const fileUsages = allUsages.filter(u => u.file === fileRel)
      if (fileUsages.length > 0) {
        pageMap[route] = fileUsages
      }
    }
  }

  const componentUsages = {}
  for (const usage of allUsages) {
    if (usage.file.startsWith('components/')) {
      if (!componentUsages[usage.file]) componentUsages[usage.file] = []
      componentUsages[usage.file].push(usage)
    }
  }

  const reuseMap = {}
  for (const usage of allUsages) {
    const key = usage.src
    if (!reuseMap[key]) reuseMap[key] = []
    reuseMap[key].push(usage)
  }

  const reusedImages = {}
  for (const [src, usages] of Object.entries(reuseMap)) {
    if (usages.length > 1) {
      reusedImages[src] = usages
    }
  }

  const missingSizing = allUsages.filter(u =>
    u.type === 'next/image' && !u.fill && (!u.width || !u.height)
  )

  const jsonReport = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalImageReferences: allUsages.length,
      totalPublicImages: publicImages.length,
      totalReusedImages: Object.keys(reusedImages).length,
      totalMissingSizing: missingSizing.length,
    },
    pageWise: pageMap,
    componentWise: componentUsages,
    reusedImages,
    missingSizing,
    publicImages,
  }

  const reportsDir = path.join(ROOT, 'reports')
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true })

  fs.writeFileSync(path.join(reportsDir, 'image-audit.json'), JSON.stringify(jsonReport, null, 2))

  let md = `# Image Audit Report\n\nGenerated: ${jsonReport.generatedAt}\n\n`
  md += `## Summary\n\n`
  md += `| Metric | Count |\n|---|---|\n`
  md += `| Total image references | ${jsonReport.summary.totalImageReferences} |\n`
  md += `| Public image files on disk | ${jsonReport.summary.totalPublicImages} |\n`
  md += `| Reused images (multi-location) | ${jsonReport.summary.totalReusedImages} |\n`
  md += `| Missing explicit sizing | ${jsonReport.summary.totalMissingSizing} |\n\n`

  md += `---\n\n## Section 1: Page-wise Image Listing\n\n`
  for (const [route, usages] of Object.entries(pageMap)) {
    md += `### Route: \`${route}\`\n\n`
    md += `| # | Type | Source | Declared Size | Fill | CSS Sizing Hints | Parent Sizing |\n`
    md += `|---|---|---|---|---|---|---|\n`
    usages.forEach((u, i) => {
      const declaredSize = (u.width && u.height) ? `${u.width}x${u.height}` : 'none'
      const cssh = u.cssSizingHints.length ? u.cssSizingHints.join(', ') : '-'
      const parenth = u.parentSizingHints.length ? u.parentSizingHints.join(', ') : '-'
      const { resolved, type } = resolveImageSrc(u.src)
      md += `| ${i + 1} | ${u.type} | \`${resolved}\` (${type}) | ${declaredSize} | ${u.fill ? 'yes' : 'no'} | ${cssh} | ${parenth} |\n`
    })
    md += `\n`
  }

  if (Object.keys(componentUsages).length > 0) {
    md += `### Shared Components\n\n`
    for (const [comp, usages] of Object.entries(componentUsages)) {
      md += `#### \`${comp}\`\n\n`
      md += `| # | Type | Source | Declared Size | Fill | CSS Sizing Hints |\n`
      md += `|---|---|---|---|---|---|\n`
      usages.forEach((u, i) => {
        const declaredSize = (u.width && u.height) ? `${u.width}x${u.height}` : 'none'
        const cssh = u.cssSizingHints.length ? u.cssSizingHints.join(', ') : '-'
        const { resolved, type } = resolveImageSrc(u.src)
        md += `| ${i + 1} | ${u.type} | \`${resolved}\` (${type}) | ${declaredSize} | ${u.fill ? 'yes' : 'no'} | ${cssh} |\n`
      })
      md += `\n`
    }
  }

  md += `---\n\n## Section 2: Reused Images Summary\n\n`
  if (Object.keys(reusedImages).length === 0) {
    md += `No images are reused across multiple locations.\n\n`
  } else {
    md += `| Image Source | Occurrences | Files | Sizing Differences |\n`
    md += `|---|---|---|---|\n`
    for (const [src, usages] of Object.entries(reusedImages)) {
      const files = [...new Set(usages.map(u => u.file))].join(', ')
      const sizings = usages.map(u => {
        if (u.fill) return 'fill'
        if (u.width && u.height) return `${u.width}x${u.height}`
        return 'unset'
      })
      const uniqueSizings = [...new Set(sizings)]
      const diff = uniqueSizings.length > 1 ? `YES (${uniqueSizings.join(' vs ')})` : 'no'
      md += `| \`${src}\` | ${usages.length} | ${files} | ${diff} |\n`
    }
    md += `\n`
  }

  md += `---\n\n## Section 3: Missing/Unknown Sizing\n\n`
  if (missingSizing.length === 0) {
    md += `All next/image usages have explicit sizing (width/height or fill).\n\n`
  } else {
    md += `| File | Source | Has Fill | Width | Height | Notes |\n`
    md += `|---|---|---|---|---|---|\n`
    for (const u of missingSizing) {
      md += `| ${u.file} | \`${u.src}\` | ${u.fill ? 'yes' : 'no'} | ${u.width || '-'} | ${u.height || '-'} | Missing explicit dimensions |\n`
    }
    md += `\n`
  }

  md += `---\n\n## Section 4: Public Image Files on Disk\n\n`
  md += `| # | Path |\n|---|---|\n`
  publicImages.forEach((img, i) => {
    md += `| ${i + 1} | \`${img}\` |\n`
  })
  md += `\n`

  fs.writeFileSync(path.join(reportsDir, 'image-audit.md'), md)

  console.log(`Image audit complete.`)
  console.log(`  JSON: reports/image-audit.json`)
  console.log(`  Markdown: reports/image-audit.md`)
  console.log(`  Total references: ${allUsages.length}`)
  console.log(`  Public images: ${publicImages.length}`)
  console.log(`  Reused images: ${Object.keys(reusedImages).length}`)
}

main()
