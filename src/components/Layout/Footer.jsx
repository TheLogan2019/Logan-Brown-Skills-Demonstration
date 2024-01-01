import React from "react";
import { Link } from "react-router-dom";

function Footer () {

    return(
        <div className="Footer">
            <div>
                <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px', textDecoration: 'none' }}>
                    Home
                </Link>
            </div>
        </div>
    )
}

export { Footer }