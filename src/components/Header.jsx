import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const primary = [
  { to: '/', label: 'Course Home' },
  { to: '/contract', label: 'Contract' },
  { to: '/introduction', label: 'Introduction' },
  { to: '/about', label: 'About' },
]

const secondary = [
  { href: 'https://c81eb.github.io/', label: 'Personal Home' },
  { href: 'https://c81eb.github.io/itis3135/stuff/cRaP%20py@.HTM', label: 'Crappy Page' },
  { href: 'https://c81eb.github.io/itis3135/hobby/index.html', label: 'Hobby' },
]

export default function Header() {
  return (
    <header>
      <img src="/images/mascot.png" alt="Clever Gecko mascot" width="80" />
      <h1>Caleb Gilmore's Clever Gecko | ITIS3135</h1>
      <em>Building web applications with precision</em>
      {/* Primary Navigation: Styled Course Pages */}
      <nav aria-label="Primary">
        {primary.map((item, i) => (
          <Fragment key={item.to}>
            {i > 0 && ' | '}
            <Link to={item.to}>{item.label}</Link>
          </Fragment>
        ))}
      </nav>
      {/* Secondary Navigation: Un-styled / Standalone Pages */}
      <nav aria-label="Secondary">
        {secondary.map((item, i) => (
          <Fragment key={item.href}>
            {i > 0 && ' | '}
            <a href={item.href}>{item.label}</a>
          </Fragment>
        ))}
      </nav>
    </header>
  )
}