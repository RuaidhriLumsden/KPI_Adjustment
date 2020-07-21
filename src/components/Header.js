import React from 'react'
import { render } from '@testing-library/react'

function Header() {
    return(
        <div className="navbar">
            <div className="navbar-inner">
                <a className="brand" href="#">SMSKP Central</a>
                <ul className="nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header