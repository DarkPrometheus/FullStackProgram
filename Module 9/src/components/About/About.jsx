import React, { Component } from 'react'

class About extends Component {
    state = { 
        emailVisible: false
     }
    render() { 
        return ( 
            <div className="about"> 
                <h1>Emmanuel Frias</h1>
                <p>
                    Send an email and we can chat about any project
                </p>

                { this.getEmailText() }

                <button onClick ={this.onButtonClicked}>{this.state.emailVisible ? "Hide email" : "Show email"}</button>
            </div>
         );
    }

    onButtonClicked = () => {
        this.setState({emailVisible: !this.state.emailVisible})
    }

    getEmailText = () => {
        if (this.state.emailVisible) {
            return <a href="mailto:contact@mail.com">Email</a>
        }
        else
            return <label>Click me to see my email</label>
    }
}
export default About;