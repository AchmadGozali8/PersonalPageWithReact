import React, { Component } from 'react';

const HeaderLogo = () => {
    return (
        <span>
            <a className="navbar-brand" href="#">ICHAL</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </span>
    )
}

const HeaderMenu = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Me <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Articles</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    )
}

class Header extends Component{
    render() {
        return(
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <HeaderLogo />    
                    <HeaderMenu /> 
                </div>
            </nav>
        )
    }
}

export default Header