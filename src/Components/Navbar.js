import React, { Component } from "react";
import {Link} from 'react-scroll';

export default class Navbar extends Component {
render(){
    return (<nav className="navbar navbar-default navbar-fixed-right" >
        <div className="container-fluide">
            <div className="collapse navbar-collapse" id="main-navbar">
                <ul className="nav nav-bar">
                    <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true}
                              duration={500}>First project</Link></li>
                    <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true}
                              duration={500}>Second project</Link></li>
                </ul>
            </div>
        </div>
    </nav>)
    }
}