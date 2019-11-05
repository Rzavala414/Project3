import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from "axios";

export default class LandingPage extends Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }
    render() {
        return (
            <div>
            <h1>This is LandingPage</h1>
                {this.renderRedirect()}
                <button onClick={this.setRedirect}>Get Started</button>
            </div>
        )
    }
};