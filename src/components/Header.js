import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/movielist">Movies</Link>
                    </div>
<div>
                       
</div>
                    <ul className="nav-links">
                        
                        <li>
                            <Link to="/watchlist">Hits</Link>
                        </li>

                        <li>
                            <Link to="/watched">Rotten</Link>
                        </li>

                        <li>
                            <Link to="/add" className="btn btn-main">
                                Search
                            </Link>
                        </li>
                        <li>
                            <Link to="/">Logout
                                
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
