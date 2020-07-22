import React, { Component } from 'react'
import '../../css/main.css'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import logo from './../../logo/heart_logo.png'


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
                        <Link to='/'>
                        <img src={logo} className="logo" />
                        <span className="logo-text">FITTER</span>
                        </Link>
                    </div>
                <div className="tag-line">
                    COMMUNITY FOR THE FITNESS ENTHUSIASTS
                </div>
                <div className="navigation-container">
                    <Navigation
                        loginUserData={this.props.loginUserData}
                        handleLogin={this.props.handleLogin}
                        handleLogInChange={this.props.handleLogInChange}
                        currentUser={this.props.currentUser}
                        handleLogout={this.props.handleLogout}
                        handleChange={this.props.handleChange}
                    />
                </div>
                </div>
            </header>
            </>
        )
    }
}
