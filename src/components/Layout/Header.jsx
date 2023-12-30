import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="Header">
            <div>
                <Link to="/" style={{ color: '#2085b8', paddingRight: '75px', textDecoration: 'none' }}>
                    Home
                </Link>
                <Link to="/Resume" style={{ color: '#2085b8', paddingRight: '75px', textDecoration: 'none' }}>
                    Resume
                </Link>
                <Link to="/Logging" style={{ color: '#2085b8', paddingRight: '75px', textDecoration: 'none' }}>
                    Login/Logout
                </Link>
            </div>
        </div>
    );
}

export { Header };
