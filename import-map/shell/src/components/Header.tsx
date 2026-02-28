import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <NavLink to="/" end className="header-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">MFA PoC</span>
        </NavLink>

        <nav className="header-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            About
          </NavLink>
        </nav>

        <div className="header-badge">
          <span className="header-label">Import Map</span>
          <span>shell</span>
          <span className="port-badge">:3000</span>
        </div>
      </div>
    </header>
  )
}

export default Header
