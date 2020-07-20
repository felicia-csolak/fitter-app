import React, { Component } from 'react'
import Feed from './Feed'
import Post from './Post'
import User_Profile from './User_Profile'
import { Link, Route, withRouter } from 'react-router-dom'
import { createPost, deletePost, putPost, getPosts, createComment, getComments } from './../services/api-helper'
import Edit_Post from './Edit_Post'
import Create_Comment_Form from './Create_Comment_Form'

class Main extends Component {
    state = {
        posts: [],
        comments: []
    }

    componentDidMount() {
        this.showPosts()
        this.showComments()
    }

    showPosts = async () => {
        const posts = await getPosts()
        this.setState({ posts })
    }

    showComments = async () => {
        const comments = await getComments()
        this.setState({ comments })
    }

    handlePostCreate = async (postData) => {
        const newPost = await createPost(postData)
        this.setState(prevState => ({
            posts: [...prevState.posts, newPost]
        }))
    }

    handlePostUpdate = async (id, postData) => {
        const newPost = await putPost(id, postData)
        this.setState(prevState => ({
        posts: prevState.posts.map(post => post.id == parseInt(id) ? newPost : post)
        }))
    }


    handlePostDelete = async (id) => {
        await deletePost(id)
        this.setState(prevState => ({
        posts: prevState.posts.filter(post => post.id !== id)
        }))
    }

    handleCommentCreate = async (id, commentData) => {
        const newComment = await createComment(id, commentData)
        this.setState(prevState => ({
            comments: [...prevState.comments, newComment]
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
                    comments={this.state.comments}
                    currentUser={this.props.currentUser}
                    />
            </Route>
            <Route path='/users/:id'>
                <User_Profile />
            </Route>
            <Route path ='/posts/:id'>
                <Post
                    handlePostDelete={this.handlePostDelete}
                    handlePostUpdate={this.handlePostUpdate}
                    />
            </Route>
            <Route path='/posts/:id/edit' render={(props) => {
                const {id} = props.match.params;
                const postItem = this.state.posts.find(post => post.id === parseInt(id));
                return <Edit_Post
                            {...props}
                            handlePostUpdate={this.handlePostUpdate}
                            postItem={postItem}
                            id={id}
                        />
                    }} />
            <Route path='/posts/:id/comments/add'>
                <Create_Comment_Form
                    handleCommentCreate={this.handleCommentCreate}
                    />
            </Route>
                    
            </div>
        )
    }
}

export default withRouter(Main)
