import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { parse } from 'acorn'
import { simple } from 'acorn-walk'

const dir = 'dist/scripts'
const hasBad = (s) => /\/[/*]/.test(s)
const fixStr = (s) => s.replace(/\/\//g, '/\\/').replace(/\/\*/g, '/\\*')

// Rewrites every "/" inside a regex pattern (escaped or inside a [class]) as \x2F
const fixRegex = (pattern, flags) => {
  let out = ''
  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i]
    if (c === '\\') {
      const next = pattern[++i]
      out += next === '/' ? '\\x2F' : '\\' + next
    } else if (c === '/') {
      out += '\\x2F'
    } else {
      out += c
    }
  }
  return '/' + out + '/' + flags
}

for (const f of readdirSync(dir).filter((f) => f.endsWith('.js'))) {
  const p = `${dir}/${f}`
  const code = readFileSync(p, 'utf8')
  const ast = parse(code, { ecmaVersion: 'latest', sourceType: 'module' })
  const edits = []
  simple(ast, {
    Literal(n) {
      if (n.regex) {
        if (n.raw.includes('/')) {
          const r = fixRegex(n.regex.pattern, n.regex.flags)
          if (r !== n.raw) edits.push([n.start, n.end, r])
        }
      } else if (typeof n.value === 'string' && hasBad(n.raw)) {
        edits.push([n.start, n.end, fixStr(n.raw)])
      }
    },
    TemplateElement(n) {
      if (hasBad(n.value.raw)) edits.push([n.start, n.end, fixStr(n.value.raw)])
    },
  })
  let out = code
  for (const [s, e, r] of edits.sort((a, b) => b[0] - a[0])) {
    out = out.slice(0, s) + r + out.slice(e)
  }
  writeFileSync(p, out)
}