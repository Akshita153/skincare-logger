import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Dashboard' },
  { path: '/routine', label: 'Routine' },
  { path: '/log', label: 'Daily Log' },
  { path: '/products', label: 'Products' },
  { path: '/insights', label: 'AI Insights' },
]

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        🌿 DermaTrack
      </div>
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? 'nav-link active' : 'nav-link'}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar