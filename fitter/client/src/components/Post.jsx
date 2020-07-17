import React, { Component } from 'react'
import { getPost } from '../services/api-helper'
import { withRouter } from 'react-router-dom'
import './../css/feed.css'

class Post extends Component {
    state = {
        post: []
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const post = await getPost(id)
        this.setState({
            post
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="feed-container">
              <div className="post-feed-container">
                        <div className='post-header'> 
                        
                            <div>@username here</div>
                            <div>{this.state.post.title}</div>
                            <div>{this.state.post.updated_at}</div>
                          
                        </div>
                        <div className="post-content">
                            <p>{this.state.post.content}</p>
                        </div>
                        <div className="post-footer">
                            <h3>Format: {this.state.post.exercise_type}</h3>
                            <h3>Duration: {this.state.post.exercise_duration}</h3>
                            <h3>{this.state.post.calories} kcal</h3>
                        </div>
                        </div>
                        </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Post)
