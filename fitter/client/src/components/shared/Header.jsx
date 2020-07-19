import React, { Component } from 'react'
import '../../css/main.css'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'


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
                <Link to='/'>FITTER</Link>
                </div>
                <div className="tag-line">
                    COMMUNITY FOR THE FITNESS ENTHUSIASTS
                </div>
                <div className="navigation-container">
                <Navigation
                    handleChange={this.props.handleChange}
                    userData={this.props.userData}
                    handleLogin={this.props.handleLogin}
                    currentUser={this.props.currentUser}
                    handleLogout={this.props.handleLogout}
                    />
                </div>
                </div>
            </header>
            </>
        )
    }
}
