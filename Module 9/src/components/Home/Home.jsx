import React, { Component } from 'react';
import "./Home.css"

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="cont">
                <h1 class="Title">Hello, world!</h1>
                    <p class="text">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p class="text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </div>
         );
    }
}

export default Home;