import React, { Component } from 'react'
import { verifyUser } from './../../services/auth'
import Create_Post_Form from '../Create_Post_Form'
import { createPost } from '../../services/api-helper'
import '../../css/form.css'
import '../../css/feed.css'

export default class Sub_Header extends Component {
    constructor(props) {
        super()
    }
    state = {
        currentUser: null
    }

    componentDidMount = async () => {
        const currentUser = await verifyUser()
        this.setState({
            currentUser
        })
    }

    render() {
        return (
            <>
                <div className="sub-header-master-container">
                    {this.props.currentUser ?
                        <></>
                        :
                        <>
                            <div className="sub-header-container">
                                <div className="post-header">
                                    <div className="welcome">
                                        Welcome.
                                    </div>
                                    Create an account to get started!
                                </div>
                            <div className="post-content">
                                <form onSubmit={this.props.handleRegister}>
                                    <div className="registration-input">

                                        <label htmlFor='name'>
                                            Name:
                                            <input
                                                name='name'
                                                type='text'
                                                value={this.props.userData.name}
                                                onChange={this.props.handleChange}
                                            />
                                        </label>

                                        <label htmlFor='age'>
                                            Age:
                                            <input
                                                name='age'
                                                type='text'
                                                value={this.props.userData.age}
                                                onChange={this.props.handleChange}
                                            />
                                        </label>

                                        <label htmlFor='location'>
                                            Location:
                                            <input
                                                name='location'
                                                type='text'
                                                value={this.props.userData.location}
                                                onChange={this.props.handleChange}
                                            />
                                        </label>
                                            
                                        <label htmlFor='username'>
                                            Username:
                                            <input
                                                name='username'
                                                type='text'
                                                value={this.props.userData.username}
                                                onChange={this.props.handleChange}
                                            />
                                        </label>

                                        <label htmlFor='email'>
                                            Email:
                                            <input
                                                name='email'
                                                type='text'
                                                value={this.props.userData.email}
                                                onChange={this.props.handleChange}
                                            />
                                        </label>

                                        <label htmlFor='password'>
                                            Password:
                                            <input
                                                name='password'
                                                type='password'
                                                value={this.props.userData.password}
                                                onChange={this.props.handleChange}
                                            />
                                        </label>

                                        <label htmlFor='avatar'>
                                            Profile Avatar:
                                            <input
                                                name='avatar_url'
                                                type='text'
                                                value={this.props.userData.avatar_url}
                                                onChange={this.props.handleChange}
                                            />
                                        </label>
                                            
                                    </div>
                                        <input type='submit' value="Register" />
                                    </form>
                                </div>
                                <div className="post-footer"></div>
                            </div>
                        </>
                    }
                </div>
            </>
        )
    }
}
