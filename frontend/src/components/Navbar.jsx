import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">QuillMind</Link>

        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link></li>
          <li><Link to="/editor" onClick={toggleMenu}>Editor</Link></li>
          <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
          {isLoggedIn && (
            <>
              <li>
                <Link to="/my-documents" onClick={toggleMenu}>
                  My Documents
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-red-600">Logout</button>
              </li>
            </>
          )}

          {!isLoggedIn && (
            <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

