import React, { Component } from 'react'
import { getPosts } from '../services/api-helper'
import { Link, Route, withRouter } from 'react-router-dom'
import '../css/feed.css'
import '../css/main.css'

class Feed extends Component {
    state = {
        posts: null,
        userData: {
            username: '',
            password: ''
        },
        currentUser: null
    }

    componentDidMount = async () => {
        const posts = await getPosts()
        this.setState({
            posts
        })
    }
    render() {
        return (
            <>
                <Route exact path='/'>
                    <div className="feed-container">
                    {this.state.posts && this.state.posts.map(post => (
                        <React.Fragment>
                        <div className="post-feed-container">
                        <div className='post-header'>
                            <Link to={`/post/${post.id}`}>
                            <div>@{post.user.username}</div>
                            <div>{post.title}</div>
                            <div>{post.updated_at}</div>
                            </Link>
                        </div>
                        <div className="post-content">
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
                </Route>
            </>
        )
    }
}

export default withRouter(Feed)
