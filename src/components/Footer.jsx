import { Fragment } from 'react'

const links = [
  { href: 'https://webpages.charlotte.edu/cgilmo11/', label: 'CLT Web' },
  { href: 'https://c81eb.github.io/', label: 'GitHub.io' },
  { href: 'https://github.com/c81eb', label: 'GitHub', blank: true },
  { href: 'https://www.freecodecamp.org/c81eb', label: 'freeCodeCamp', blank: true },
  { href: 'https://www.codecademy.com/profiles/array8146532926', label: 'Codecademy', blank: true },
  { href: 'https://www.linkedin.com/in/calebgilmore', label: 'LinkedIn', blank: true },
  { href: 'https://c81eb.github.io/itis3135/', label: 'Course.io' },
]

export default function Footer() {
  return (
    <footer>
      <nav>
        {links.map((l, i) => (
          <Fragment key={l.href}>
            {i > 0 && ' | '}
            <a href={l.href} target={l.blank ? '_blank' : undefined}>{l.label}</a>
          </Fragment>
        ))}
      </nav>
      <p>
        Page Designed by <a href="https://c81eb.github.io/calebgilmoredesigns.co/">Gilmore Enterprises</a> &copy;2026 |{' '}
        <a href="https://www.freecodecamp.org/certification/c81eb/responsive-web-design-v9" target="_blank">Certified in Responsive Web Design</a>
      </p>
      <p>
        <a href="https://validator.w3.org/check?uri=referer">HTML Validator</a> |{' '}
        <a href="https://jigsaw.w3.org/css-validator/check/referer">CSS Validator</a>
      </p>
    </footer>
  )
}