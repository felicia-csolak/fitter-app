import React, { Component } from 'react'
import '../../css/form.css'

export default class Sub_Header extends Component {
    constructor(props) {
        super()
    }
    state = {

    }
    render() {
    return (
        <>
        <div className="sub-header-master-container">
            <div className="sub-header-container">
                <div className="welcome">
                    Welcome! Create an account to get started!
            </div>
                <div className="registration">
                    <form onSubmit={this.props.handleRegister}>
                        <div className="registration-input">
                            <div className="form-left">
                            <lable htmlFor='name'>
                                Name: 
                            <input
                                name='name' 
                                type='text' 
                                value={this.props.userData.name}
                                onChange={this.props.handleChange} 
                            />
                            </lable>

                            <lable htmlFor='age'>
                                Age: 
                            <input
                                name='age' 
                                type='text' 
                                value={this.props.userData.age}
                                onChange={this.props.handleChange} 
                            />
                            </lable>

                            <lable htmlFor='location'>
                                Location: 
                            <input
                                name='location' 
                                type='text' 
                                value={this.props.userData.location}
                                onChange={this.props.handleChange} 
                            />
                            </lable>
                            </div>

                            <div className="form-right">
                            <label htmlFor='username'>
                                Username: 
                            </label>
                            <input
                                name='username' 
                                type='text' 
                                value={this.props.userData.username}
                                onChange={this.props.handleChange} 
                            />

                            <label htmlFor='email'>
                                Email: 
                            </label>
                            <input
                                name='email' 
                                type='text' 
                                value={this.props.userData.email}
                                onChange={this.props.handleChange} 
                            />
                        
                            <label htmlFor='password'>
                                Password: 
                            </label>
                            <input 
                                name='password' 
                                type='password'
                                value={this.props.userData.password}
                                onChange={this.props.handleChange}
                            />
                        </div>
                        </div>
                        <input type='submit' value="Register" />
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}
}
