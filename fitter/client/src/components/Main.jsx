import React, { Component } from 'react'
import Feed from './Feed'
import Post from './Post'
import User_Profile from './User_Profile'
import { Link, Route, withRouter } from 'react-router-dom'
import { createPost, deletePost, putPost, getPosts } from './../services/api-helper'
import Edit_Post from './Edit_Post'

class Main extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.showPosts()
    }

    showPosts = async () => {
        const posts = await getPosts();
        this.setState({ posts });
    }

    handlePostCreate = async (postData) => {
        const newPost = await createPost(postData)
        this.setState(prevState => ({
            posts: [...prevState.posts, newPost]
        }))
    }

    handlePostUpdate = async (postData) => {
        let id
        const updatePost = await putPost(id, postData);
        this.setState(prevState => ({
        posts: prevState.posts.map(post => post.id === parseInt(id) ? updatePost : post)
        }))
    }


    handlePostDelete = async (id) => {
        await deletePost(id)
        this.setState(prevState => ({
        posts: prevState.posts.filter(post => post.id !== id)
        }))
    }


    render() 
    { 
        return (
            <div>
            <Route exact path='/'>
                <Feed
                    handlePostCreate={this.handlePostCreate}
                    posts={this.state.posts}
                    currentUser={this.props.currentUser}
                    />
            </Route>
            <Route path='/users/:id'>
                <User_Profile />
            </Route>
            <Route path ='/posts/:id'>
                <Post
                    handlePostDelete={this.handlePostDelete}
                    // handlePostUpdate={this.handlePostUpdate}
                    />
            </Route>
            <Route path='/posts/:id/edit' render={(props) => {
            const { id } = props.match.params
            const postItem = this.state.posts.find(post => post.id === parseInt(id));
            return <Edit_Post
            {...props}
            handlePostUpdate={this.handlePostUpdate}
            postItem={postItem}
            id={id}
          />
        }} />
            </div>
        )
    }
}

export default withRouter(Main)
