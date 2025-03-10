import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">LYCEUM</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">🏠 Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">📖 About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">📞 Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
