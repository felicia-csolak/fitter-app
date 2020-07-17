import React, { Component } from 'react'
import { getUser } from '../services/api-helper'
import { Link, withRouter } from 'react-router-dom'
import './../css/profile.css'
import './../css/feed.css'

class User_Profile extends Component {
    state ={
        user: []
    }

    componentDidMount = async () => {
        const id = parseInt(this.props.match.params.id)
        const user = await getUser(id)
        this.setState({
            user
        })
    }
    render() {
    return (
        <div className='user-profile-master-container'>
            <div className="user-profile-container">
    <div className="post-header">@{this.state.user.username}</div>
    <div className="post-content">
        <p>Joined: {this.state.user.created_at}</p>
        <p>Name: {this.state.user.name}</p>
        <p>Age: {this.state.user.age}</p>
        <p>Location: {this.state.user.location}</p>
    </div>
            <div className="post-footer"></div>
            {this.state.user.posts && this.state.user.posts.map(post => (
                        <React.Fragment>
                       
                        <div className='post-header'>
                            <Link to={`/posts/${post.id}`}>
                            <div></div>
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
                       
                        </React.Fragment>
                    ))}
            </div>
        </div>
    )
}
}

export default withRouter(User_Profile)