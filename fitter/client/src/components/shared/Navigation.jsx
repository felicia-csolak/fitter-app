import React, { Component } from 'react'
import '../../css/main.css'
import { Link, Route, withRouter } from 'react-router-dom'

class Navigation extends Component {
    state = {
        userData: {
            username: '',
            password: ''
        },
        currentUser: null
    }


    render() {
        return (
            <>
                {this.props.currentUser ?
                <>
                    <Link to={`/users/${this.props.currentUser.id}`}>
                        <h2>@{this.props.currentUser.username}</h2>
                    </Link>
                    <button onClick={this.props.handleLogout}>
                        Logout
                    </button>
                </>
                :
                <div className="login-form">
                    <form 
                        onSubmit={this.props.handleLogin}
                        className='login'>
                            
                                <lable htmlFor='username'>
                                    Username: 
                                <input 
                                    name='username'
                                    type='text'
                                    value={this.props.userData.username}
                                    onChange={this.props.handleChange} 
                                />
                                </lable>

                                <lable htmlFor='password'>
                                    Password: 
                                <input 
                                    name='password'
                                    type='password'
                                    value={this.props.userData.password}
                                    onChange={this.props.handleChange}
                                />
                                </lable>

                            <input type='submit' value="Login" />
                        </form>
                    </div>
                }
            </>
        )
    }
}

export default withRouter(Navigation)
