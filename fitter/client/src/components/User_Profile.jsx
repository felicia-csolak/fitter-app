import React, { Component } from 'react'
import { getUser } from '../services/api-helper'
import { Link, withRouter } from 'react-router-dom'
import './../css/profile.css'
import './../css/feed.css'

class User_Profile extends Component {
    state ={
        user: ""
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const user = await getUser(id)
        console.log(user)
        this.setState({
            user
        })
    }

    render() {
    return (
        <div className='user-profile-master-container'>
            <div className="user-profile-container">
            <div className="post-header">
                <h2>User Profile</h2>
            </div>
    
    <div className="post-content">
        <h1>@{this.state.user && this.state.user.username}</h1>
        <div className="post-content-container">
        <img 
            className="profile-user-avatar" 
            src={this.state.user.avatar_url} 
            />
        <div className="profile-info">
            <h3>Joined: {this.state.user.created_at}</h3>
            <h3>Name: {this.state.user.name}</h3>
            <h3>Age: {this.state.user.age}</h3>
            <h3>Location: {this.state.user.location}</h3>
        </div>
        </div>
    </div>
            <div className="post-footer"></div>
            {this.state.user.posts && this.state.user.posts.map(post => (
                        <React.Fragment>
                       <div className="user-post-feed-container">
                        <div className='post-header'>
                        <Link to={`/posts/${post.id}`}>
                                <img 
                                    className="user-avatar" 
                                    src={this.state.user.avatar_url} 
                                    />
                            @{post.username}
                            {post.updated_at}
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
                        </div>
                        </div>
                        </React.Fragment>
                    ))}
            </div>
        </div>
    )
}
}

export default withRouter(User_Profile)