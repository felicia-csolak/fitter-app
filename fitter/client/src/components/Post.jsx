import React, { Component } from 'react'
import { getPost } from '../services/api-helper'
import { Link, withRouter } from 'react-router-dom'
import './../css/feed.css'
import Comments from './Comments'

class Post extends Component {
    constructor(props) {
        super()
    }
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
                            {this.state.post.user && ( 
                                <Link to={`/users/${this.state.post.user.id}`}>
                                    <div>
                                    <img 
                                        className="user-avatar" 
                                        src={this.state.post.user.avatar_url} 
                                        /> 
                                    </div> 
                                </Link> )}
                            {this.state.post.user && (
                                <div>
                                    @{this.state.post.user.username}
                                </div>
                            )}
                            <div>{this.state.post.updated_at}</div>
                        </div>
                    
                        <div className="post-content">
                            <div className="title">
                                {this.state.post.title}
                            </div>
                            <p>{this.state.post.content}</p>
                            {this.state.post.photo_url ?
                            <img className="post-photo" src={this.state.post.photo_url} />
                            : <></>
                            }
                        </div>

                        <div className="post-footer">
                            <h3>Format: {this.state.post.exercise_type}</h3>
                            <h3>Duration: {this.state.post.exercise_duration}</h3>
                            
                            <Link to={`/posts/${this.state.post.id}/edit`}><button>Edit Post</button></Link>
                            <button onClick={() => this.props.handlePostDelete(this.state.post.id)}>Delete</button>
                            <Link to={`/posts/${this.state.post.id}/comments/add`}><button>Comment</button></Link>
                        </div>
                    </div>
                </div>
                {this.state.post.comments ? 
                    <Comments 
                        comments={this.state.post.comments} 
                        username={this.state.post.user.username} 
                        user_id={this.state.post.user.id}
                        currentUser={this.props.currentUser}
                    />
                    : 
                    <></>
                }
            </React.Fragment>
        )
    }
}

export default withRouter(Post)
