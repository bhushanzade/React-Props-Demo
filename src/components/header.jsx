import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home';
import Demo from './demo';
import Structure from './structure';

class Header extends PureComponent {
    render() {
        return (
            <div>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link class="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to="/Demo">Demo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to="/Structure">Structure</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div>
                        
                        <Route exact path="/" component={Home} />
                        <Route path="/Demo" component={Demo} />
                        <Route path="/Structure" component={Structure} />
                    </div>
                </Router>
            </div>

        )
    }
}

export default Header