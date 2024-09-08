import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';
import './NavBar.css';

export const NavBar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    logOut();
    navigate('./login', { replace: true });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false); // Cerrar el menú al seleccionar una opción
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home" onClick={handleNavLinkClick}>
         Home
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarScroll" 
          aria-controls="navbarScroll" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
         <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1725632551/icons8-men%C3%BA-64_lyjlae.png" alt="" /> 
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
          
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} 
                to="/marvel" 
                onClick={handleNavLinkClick}
              >
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} 
                to="/dc" 
                onClick={handleNavLinkClick}
              >
                DC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} 
                to="/search" 
                onClick={handleNavLinkClick}
              >
                Search
              </NavLink>
            </li>
         
          </ul>
         
            
              <button className="btn btn-outline-danger" onClick={handleClick}>Logout
              </button>
            
            
        </div>
      </div>
    </nav>
  );
};
