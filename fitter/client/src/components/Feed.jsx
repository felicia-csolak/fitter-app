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
                      <Create_Post_Form 
                        handlePostCreate={this.props.handlePostCreate}
                        currentUser={this.props.currentUser}
                        />
                    {this.props.posts && this.props.posts.map(post => (
                        <React.Fragment>
                        <div className="post-feed-container">
                        <div className='post-header'>
                            <Link to={`/posts/${post.id}`}>
                            <div>@{post.user && post.user.username}</div>
                            <div>{post.updated_at}</div>
                            </Link>
                        </div>
                        <div className="post-content">
                            <div className="title">{post.title}</div>
                            <p>{post.content}</p>
                        </div>
                        <div className="post-footer">
                            <h3>Format: {post.exercise_type}</h3>
                            <h3>Duration: {post.exercise_duration}</h3>
                            <h3>{post.calories} kcal</h3>
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
