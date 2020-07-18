import React, { Component } from 'react'
import Axios from 'axios'
import './../css/form.css'
import '../css/feed.css'

export default class Create_Comment_Form extends Component {
    constructor(props){
        super()
    }
    state = {
        post: {
            title: '',
            content: ''
        }
    }
    render() {
        return (
            <>
            <div className="sub-header-container">
                <div className="post-header">
            Hi @{this.props.currentUser.username}!  Share your progress.
                </div>
                <div className="post-content">
        <form onSubmit="">
        Title: 
                        <input
                                name='name' 
                                type='text' 
                                onChange={this.props.handleChange} 
                            />
                        
            </form>
                </div>
                <div className="post-footer"></div>
            </div>
            </>
        )
    }
}
