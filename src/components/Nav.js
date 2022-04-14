import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-start">
        <NavLink to='/' className="navbar-item">Home</NavLink>
        <NavLink to='/content' className="navbar-item">Content</NavLink>
        <NavLink to='/gallery' className="navbar-item">Gallery</NavLink>
      </div>

    </nav>
  )
}

export default Nav
