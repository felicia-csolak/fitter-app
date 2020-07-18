import React, { Component } from 'react'
import { verifyUser } from './../../services/auth'
import Create_Post_Form from '../Create_Comment_Form'
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
            {this.state.currentUser ? 
            <Create_Post_Form 
                currentUser={this.state.currentUser}
                onChange={this.props.handleChange}
            /> :
            <div className="sub-header-container">
                <div className="post-header">
                <div className="welcome">Welcome.</div> Create an account to get started!
            </div>
                <div className="post-content">
                    <div className="welcome"></div>
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
                <div className="post-footer"></div>
            </div>
    }
            </div>
        </>
    )
}
}
