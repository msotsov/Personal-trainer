import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to='/'>Personal trainer</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/customers">Customers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/trainings">Trainings</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;