const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const SCAN_DIRS = ['app', 'components']
const PUBLIC_DIR = path.join(ROOT, 'public')
const ASSETS_FILE = path.join(ROOT, 'data', 'assets.ts')
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

function parseAssetsRegistry() {
  const lookup = {}
  if (!fs.existsSync(ASSETS_FILE)) return lookup
  const content = fs.readFileSync(ASSETS_FILE, 'utf-8')

  const blockRegex = /export\s+const\s+(\w+)\s*=\s*\{([^}]+)\}/gs
  let blockMatch
  while ((blockMatch = blockRegex.exec(content)) !== null) {
    const groupName = blockMatch[1]
    const body = blockMatch[2]
    const entryRegex = /(\w+)\s*:\s*"([^"]+)"/g
    let entryMatch
    while ((entryMatch = entryRegex.exec(body)) !== null) {
      const key = entryMatch[1]
      const val = entryMatch[2]
      lookup[`${groupName}.${key}`] = val
    }
  }
  return lookup
}

function resolveVariable(src, assetsLookup, fileContent) {
  if (src.startsWith('"') || src.startsWith("'")) {
    return src.slice(1, -1)
  }
  if (src.startsWith('/') || src.startsWith('http')) {
    return src
  }

  if (assetsLookup[src]) return assetsLookup[src]

  const dotParts = src.split('.')
  if (dotParts.length === 2) {
    const [obj, prop] = dotParts
    if (assetsLookup[`${obj}.${prop}`]) return assetsLookup[`${obj}.${prop}`]
  }

  if (src.includes('[') && src.includes(']')) {
    const base = src.replace(/\[.*\]/, '')
    const dotBase = base.replace(/\.$/, '')
    const matches = Object.entries(assetsLookup).filter(([k]) => k.startsWith(dotBase + '.'))
    if (matches.length > 0) {
      return matches.map(([, v]) => v).join(' | ')
    }
  }

  if (fileContent) {
    const aliasRegex = new RegExp(`(?:const|let|var)\\s+${escapeRegex(src)}\\s*=\\s*([^;\\n]+)`)
    const aliasMatch = fileContent.match(aliasRegex)
    if (aliasMatch) {
      const aliasVal = aliasMatch[1].trim()
      return resolveVariable(aliasVal, assetsLookup, null)
    }
  }

  return null
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
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

function parseImageUsages(filePath, assetsLookup) {
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

    const parentContext = content.substring(Math.max(0, match.index - 500), match.index)
    const parentClassMatch = parentContext.match(/className="([^"]*)"[^]*$/s)
    const parentSizing = parentClassMatch ? extractSizingFromClassName(parentClassMatch[1]) : []

    const rawSrc = srcMatch ? srcMatch[1].trim() : 'unknown'
    const resolvedPath = resolveVariable(rawSrc, assetsLookup, content)

    usages.push({
      type: 'next/image',
      file: rel,
      src: rawSrc,
      resolvedPath: resolvedPath,
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

    const rawSrc = srcMatch ? srcMatch[1].trim() : 'unknown'
    const resolvedPath = resolveVariable(rawSrc, assetsLookup, content)

    usages.push({
      type: 'img',
      file: rel,
      src: rawSrc,
      resolvedPath: resolvedPath,
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
      resolvedPath: match[1],
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

function srcType(src) {
  if (src.startsWith('/')) return 'local'
  if (src.startsWith('http')) return 'remote'
  return 'variable'
}

function fileExists(publicPath) {
  if (!publicPath || !publicPath.startsWith('/')) return null
  const full = path.join(PUBLIC_DIR, publicPath)
  return fs.existsSync(full)
}

function main() {
  const assetsLookup = parseAssetsRegistry()
  console.log(`Parsed assets registry: ${Object.keys(assetsLookup).length} entries`)

  const allFiles = []
  for (const dir of SCAN_DIRS) {
    allFiles.push(...walkDir(path.join(ROOT, dir), EXTENSIONS))
  }

  const publicImages = walkPublic(PUBLIC_DIR, '')

  const allUsages = []
  for (const file of allFiles) {
    allUsages.push(...parseImageUsages(file, assetsLookup))
  }

  const pageFiles = []
  const componentFiles = []
  for (const file of allFiles) {
    const rel = path.relative(ROOT, file).replace(/\\/g, '/')
    const route = inferRouteFromFile(file)
    if (route) {
      pageFiles.push({ file: rel, route })
    } else if (rel.startsWith('components/')) {
      componentFiles.push(rel)
    }
  }

  const pageMap = {}
  for (const { file, route } of pageFiles) {
    const fileUsages = allUsages.filter(u => u.file === file)
    if (fileUsages.length > 0) {
      pageMap[route] = { file, usages: fileUsages }
    }
  }

  const componentUsages = {}
  for (const comp of componentFiles) {
    const usages = allUsages.filter(u => u.file === comp)
    if (usages.length > 0) {
      componentUsages[comp] = usages
    }
  }

  const resolvedReuseMap = {}
  for (const usage of allUsages) {
    const resolved = usage.resolvedPath || usage.src
    const paths = resolved.includes(' | ') ? resolved.split(' | ').map(s => s.trim()) : [resolved]
    for (const p of paths) {
      if (!resolvedReuseMap[p]) resolvedReuseMap[p] = []
      resolvedReuseMap[p].push(usage)
    }
  }

  const reusedImages = {}
  for (const [src, usages] of Object.entries(resolvedReuseMap)) {
    if (usages.length > 1) {
      reusedImages[src] = usages
    }
  }

  const missingSizing = allUsages.filter(u =>
    u.type === 'next/image' && !u.fill && (!u.width || !u.height)
  )

  const jsonReport = {
    generatedAt: new Date().toISOString(),
    assetsRegistry: assetsLookup,
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
  md += `| Missing explicit sizing | ${jsonReport.summary.totalMissingSizing} |\n`
  md += `| Assets registry entries | ${Object.keys(assetsLookup).length} |\n\n`

  md += `---\n\n## Section 1: Page-wise Image Listing\n\n`
  const sortedRoutes = Object.keys(pageMap).sort()
  for (const route of sortedRoutes) {
    const { file, usages } = pageMap[route]
    md += `### Route: \`${route}\`\n`
    md += `**File:** \`${file}\`\n\n`
    md += `| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |\n`
    md += `|---|---|---|---|---|---|---|---|---|\n`
    usages.forEach((u, i) => {
      const declaredSize = (u.width && u.height) ? `${u.width}x${u.height}` : '-'
      const cssh = u.cssSizingHints.length ? u.cssSizingHints.join(', ') : '-'
      const parenth = u.parentSizingHints.length ? u.parentSizingHints.join(', ') : '-'
      const resolved = u.resolvedPath || '(unresolved)'
      const exists = resolved.startsWith('/') ? (fileExists(resolved) ? 'YES' : 'NO') : '-'
      md += `| ${i + 1} | ${u.type} | \`${u.src}\` | \`${resolved}\` | ${exists} | ${declaredSize} | ${u.fill ? 'yes' : 'no'} | ${cssh} | ${parenth} |\n`
    })
    md += `\n`
  }

  if (Object.keys(componentUsages).length > 0) {
    md += `---\n\n## Section 2: Shared Component Images\n\n`
    for (const [comp, usages] of Object.entries(componentUsages)) {
      md += `### \`${comp}\`\n\n`
      md += `| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |\n`
      md += `|---|---|---|---|---|---|---|---|---|\n`
      usages.forEach((u, i) => {
        const declaredSize = (u.width && u.height) ? `${u.width}x${u.height}` : '-'
        const cssh = u.cssSizingHints.length ? u.cssSizingHints.join(', ') : '-'
        const parenth = u.parentSizingHints.length ? u.parentSizingHints.join(', ') : '-'
        const resolved = u.resolvedPath || '(unresolved)'
        const exists = resolved.startsWith('/') ? (fileExists(resolved) ? 'YES' : 'NO') : '-'
        md += `| ${i + 1} | ${u.type} | \`${u.src}\` | \`${resolved}\` | ${exists} | ${declaredSize} | ${u.fill ? 'yes' : 'no'} | ${cssh} | ${parenth} |\n`
      })
      md += `\n`
    }
  }

  md += `---\n\n## Section 3: Reused Images Detail\n\n`
  if (Object.keys(reusedImages).length === 0) {
    md += `No images are reused across multiple locations.\n\n`
  } else {
    md += `| Resolved File | Occurrences | Used In Files | Pages | Sizing Differs |\n`
    md += `|---|---|---|---|---|\n`
    for (const [src, usages] of Object.entries(reusedImages)) {
      const files = [...new Set(usages.map(u => u.file))]
      const pages = []
      for (const f of files) {
        const pf = pageFiles.find(p => p.file === f)
        if (pf) pages.push(pf.route)
        else pages.push('(component)')
      }
      const sizings = usages.map(u => {
        if (u.fill) {
          const hints = [...u.cssSizingHints, ...u.parentSizingHints]
          return 'fill' + (hints.length ? ` [${hints.join(', ')}]` : '')
        }
        if (u.width && u.height) return `${u.width}x${u.height}`
        return 'unset'
      })
      const uniqueSizings = [...new Set(sizings)]
      const diff = uniqueSizings.length > 1 ? 'YES' : 'no'
      const fileName = src.startsWith('/') ? path.basename(src) : src
      md += `| \`${fileName}\` (\`${src}\`) | ${usages.length} | ${files.map(f => `\`${f}\``).join(', ')} | ${pages.join(', ')} | ${diff} |\n`
    }
    md += `\n`
    if (Object.values(reusedImages).some(usages => {
      const sizings = usages.map(u => {
        if (u.fill) {
          const hints = [...u.cssSizingHints, ...u.parentSizingHints]
          return 'fill' + (hints.length ? ` [${hints.join(', ')}]` : '')
        }
        if (u.width && u.height) return `${u.width}x${u.height}`
        return 'unset'
      })
      return [...new Set(sizings)].length > 1
    })) {
      md += `### Sizing Differences Detail\n\n`
      for (const [src, usages] of Object.entries(reusedImages)) {
        const sizings = usages.map(u => {
          if (u.fill) {
            const hints = [...u.cssSizingHints, ...u.parentSizingHints]
            return 'fill' + (hints.length ? ` [${hints.join(', ')}]` : '')
          }
          if (u.width && u.height) return `${u.width}x${u.height}`
          return 'unset'
        })
        if ([...new Set(sizings)].length > 1) {
          md += `**\`${src}\`**:\n`
          usages.forEach((u, i) => {
            md += `  - ${u.file}: ${sizings[i]}\n`
          })
          md += `\n`
        }
      }
    }
  }

  md += `---\n\n## Section 4: Missing/Unknown Sizing\n\n`
  if (missingSizing.length === 0) {
    md += `All next/image usages have explicit sizing (width/height or fill).\n\n`
  } else {
    md += `| File | Variable | Resolved Path | Has Fill | Width | Height | Notes |\n`
    md += `|---|---|---|---|---|---|---|\n`
    for (const u of missingSizing) {
      const resolved = u.resolvedPath || '(unresolved)'
      md += `| ${u.file} | \`${u.src}\` | \`${resolved}\` | ${u.fill ? 'yes' : 'no'} | ${u.width || '-'} | ${u.height || '-'} | Missing explicit dimensions |\n`
    }
    md += `\n`
  }

  md += `---\n\n## Section 5: Public Image Files on Disk\n\n`
  const usedPaths = new Set()
  for (const u of allUsages) {
    if (u.resolvedPath) {
      if (u.resolvedPath.includes(' | ')) {
        u.resolvedPath.split(' | ').forEach(p => usedPaths.add(p.trim()))
      } else {
        usedPaths.add(u.resolvedPath)
      }
    }
  }

  md += `| # | Path | Referenced | File Name |\n|---|---|---|---|\n`
  publicImages.forEach((img, i) => {
    const referenced = usedPaths.has(img) ? 'YES' : 'NO'
    const fileName = path.basename(img)
    md += `| ${i + 1} | \`${img}\` | ${referenced} | ${fileName} |\n`
  })
  md += `\n`

  const unreferenced = publicImages.filter(img => !usedPaths.has(img))
  if (unreferenced.length > 0) {
    md += `### Unreferenced Public Images\n\n`
    md += `The following images exist on disk but were not found referenced in code:\n\n`
    unreferenced.forEach(img => {
      md += `- \`${img}\`\n`
    })
    md += `\n`
  }

  md += `---\n\n## Section 6: Assets Registry (\`data/assets.ts\`)\n\n`
  md += `| Variable | Resolved Path | File Exists |\n|---|---|---|\n`
  for (const [variable, filePath] of Object.entries(assetsLookup)) {
    const exists = fileExists(filePath) ? 'YES' : 'NO'
    md += `| \`${variable}\` | \`${filePath}\` | ${exists} |\n`
  }
  md += `\n`

  fs.writeFileSync(path.join(reportsDir, 'image-audit.md'), md)

  console.log(`\nImage audit complete.`)
  console.log(`  JSON: reports/image-audit.json`)
  console.log(`  Markdown: reports/image-audit.md`)
  console.log(`  Total references: ${allUsages.length}`)
  console.log(`  Public images: ${publicImages.length}`)
  console.log(`  Reused images: ${Object.keys(reusedImages).length}`)
  console.log(`  Assets registry: ${Object.keys(assetsLookup).length} entries`)
}

main()
