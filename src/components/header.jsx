import React, { PureComponent } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from './home';
import Demo from './demo';
import Structure from './structure';
import Props from './props';
import image1 from '../assets/images/free2.jpg';
import image2 from '../assets/images/city1.jpg';
import image3 from '../assets/images/city2.jpg';
import image4 from '../assets/images/city3.jpg';
import image5 from '../assets/images/city4.jpg'

class Header extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            peoples: {
                name: 'Bhushan Zade',
                image: image1,
                address: 'Nashik , Yeola'
            },

            multipleData: [{
                name: 'London',
                image: image2,
                address: 'London , UK'
            },
            {
                name: 'Paris',
                image: image3,
                address: 'Paris , UK'
            },
            {
                name: 'Dubai',
                image: image4,
                address: 'Middle East , Dubai'
            },
            {
                name: 'Seuol',
                image: image5,
                address: 'Koria , Koria'
            }],

            text : {
                discription : 'The main difference between state and props is that props are immutable. This is why the container component should define the state that can be updated and changed, while the child components should only pass data from the state using props.'
            }
        }
        
    }
    render() {
        return (
            <div>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">{this.props.title}</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Demo">Demo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Structure">Structure</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Props">Props Demo</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/Demo" component={Demo} />
                        <Route path="/Structure" component={Structure} />
                        <Route path="/Props" render={(props) => <Props {...props} data={this.state.peoples} multiple={this.state.multipleData} desc={this.state.text.discription} />} />
                    </div>
                </Router>
            </div>

        )
    }
}

export default Header