import React, { Component } from 'react';
import "./navBar.css"

function NavBar() { 
    return ( 
        <div className="nav">
            <div className="nav-container nav-container-1">
                <div>Home</div>
                <div>Link</div>
                <div>Dropdown</div>
                <div>Disable</div>
            </div>
            <div className="nav-container"></div>
            <div className=" nav-container nav-container-2">
                <div>Search</div>
                <div>Button</div>
            </div>
        </div>
     );
}

export default NavBar;