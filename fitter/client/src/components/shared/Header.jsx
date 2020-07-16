import React, { Component } from 'react'
import '../../css/main.css'
import Navigation from './Navigation'


export default class extends Component {
    constructor(props){
        super()
    }
    render() {
        return (
            <>
            <header>
                <div className="header-container">
                <div className="main-logo">
                FITTER
                </div>
                <div className="tag-line">
                    COMMUNITY FOR THE FITNESS ENTHUSIASTS
                </div>
                </div>
                <Navigation
                    handleChange={this.props.handleChange}
                    userData={this.props.userData}
                    handleLogin={this.props.handleLogin}
                    currentUser={this.props.currentUser}
                    />
            </header>
            </>
        )
    }
}
