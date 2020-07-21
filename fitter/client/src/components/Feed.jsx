import React, { Component } from 'react'
import Post from '../components/Post'
import { Link, Route, withRouter } from 'react-router-dom'
import { verifyUser } from '../services/auth'
import '../css/feed.css'
import '../css/main.css'
import Create_Post_Form from '../components/Create_Post_Form'

class Feed extends Component {
    state ={
        currentUser: ''
    }

    render() {
        return (
            <>
                <div className="feed-container">
                    {this.props.currentUser ? 
                        <Create_Post_Form 
                            handlePostCreate={this.props.handlePostCreate}
                            currentUser={this.props.currentUser}
                        />
                        : 
                        <></> 
                    }
                    {this.props.posts && this.props.posts.map(post => (
                        <React.Fragment id={post.id}>
                        <div className="post-feed-container">
                        <div className='post-header'>
                            <Link to={`/posts/${post.id}`}>
                            <div>
                                {post.user.avatar_url ? 
                                <img 
                                    className="user-avatar" 
                                    src={post.user.avatar_url} 
                                    />
                                : <></> }   
                            </div>
                            <div>@{post.user && post.user.username}</div>
                            <div>{post.updated_at}</div>
                            </Link>
                        </div>
                        <div className="post-content">
                            <div className="title">
                                {post.title}
                            </div>
                            <div className="post-content-container">
                                <p>{post.content}</p>
                            {post.photo_url ? 
                                <div className="post-photo-container">
                                <img 
                                    className="post-photo" 
                                    src={post.photo_url} />
                                </div> : <></> }
                            </div>
                        </div>
                        <div className="post-footer">
                            <h3>Format: {post.exercise_type}</h3>
                            <h3>Duration: {post.exercise_duration}</h3>
                            <h3>{post.calories} kcal</h3>
                            <h3>
                                <Link to={`/posts/${post.id}/comments`}>
                                    Add a comment.
                                </Link>
                            </h3>
                                
                        </div>
                        </div>
                        </React.Fragment>
                    ))}
                    </div>

            </>
        )
    }
}

export default withRouter(Feed)
