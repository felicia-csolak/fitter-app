import React, { Component } from 'react'
import '../../css/main.css'
import { Link, Route, withRouter } from 'react-router-dom'

class Navigation extends Component {

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
                            onSubmit={(e) => {
                                e.preventDefault();
                                this.props.handleLogin()
                            }}
                            className='login'>

                            <lable htmlFor='username'>
                                Username:
                                <input
                                    name='username'
                                    type='text'
                                    value={this.props.loginUserData.username}
                                    onChange={this.props.handleLogInChange}
                                />
                            </lable>

                            <lable htmlFor='password'>
                                Password:
                                <input
                                    name='password'
                                    type='password'
                                    value={this.props.loginUserData.password}
                                    onChange={this.props.handleLogInChange}
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
