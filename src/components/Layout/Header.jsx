import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="Header">
            <div>
                <Link to="/" style={{ color: '#2085b8', paddingRight: '75px', textDecoration: 'none' }}>
                    Home
                </Link>
            </div>
        </div>
    );
}

export { Header };
