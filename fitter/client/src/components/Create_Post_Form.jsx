import React, { Component } from 'react'
import './../css/form.css'
import '../css/feed.css'
import { verifyUser } from './../services/auth'

export default class Create_Comment_Form extends Component {
    constructor(props) {
        super()
    }
    state = {
        post: {
            title: '',
            content: '',
            exercise_type: '',
            exercise_duration: '',
            user_id: null,
            photo_url: '',
        },
        currentUser: null,
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            post: {
            ...prevState.post,
            [name]: value
        }
        }))
    }


    render() {
        return (
            <>
                <div className="sub-header-container">
                    {this.props.currentUser && (
                        <div className="post-header">
                            Hi @{this.props.currentUser.username}! Share your progress. 
                        </div>
                    )}
            
                    <div className="post-content">
                        <form 
                            onSubmit={(e) => {
                                e.preventDefault();
                                this.props.handlePostCreate(this.state.post)
                            }}>
                        
                        Title:
                        <input
                                name='title'
                                type='text'
                                value={this.state.post.title}
                                onChange={this.handleChange}
                            />
                        <br />    

                        How'd it feel? What did you do?
                        <input
                                name='content'
                                type='textarea'
                                value={this.state.post.content}
                                onChange={this.handleChange}
                            />
                        <br />

                        Style of training: 
                        <input
                                name='exercise_type'
                                type='text'
                                value={this.state.post.exercise_type}
                                onChange={this.handleChange} />
                        <br />

                        Duration:
                        <input
                                name='exercise_duration'
                                type='text'
                                value={this.state.post.exercise_duration}
                                onChange={this.handleChange}
                            />
                        <br />


                        Upload a Photo: 
                            <input
                                name='photo_url'
                                type='text'
                                value={this.state.post.photo_url}
                                onChange={this.handleChange}
                            />
                        < br/>

                        <input type='submit' value="Submit" />
                        </form>
                    </div>
                    <div className="post-footer"></div>
                </div>
            </>
        )
    }
}
