import React, { Component } from 'react'
import './../css/form.css'
import '../css/feed.css'

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
            calories: null,
            user_id: null,
        }
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

      componentDidMount = () => {
          this.setState ({
             post: { user_id: this.props.currentUser.id }
          })
      }

    render() {
        return (
            <>
                <div className="sub-header-container">
                    <div className="post-header">
                        Hi @{this.props.currentUser.username}!  Share your progress.
                </div>
                    <div className="post-content">
                        <form onSubmit={this.props.handlePost}>
                            Title:
                        <input
                                name='title'
                                type='text'
                                value={this.state.post.title}
                                onChange={this.handleChange}
                            />
                        How'd it feel? What did you do?
                        <input
                                name='content'
                                type='text'
                                value={this.state.post.content}
                                onChange={this.handleChange}
                            />
                        Activity Tracker 
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
                            Calories: 
                            <input
                                name='title'
                                type='text'
                                value={this.state.post.calories}
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
