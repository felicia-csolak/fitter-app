import React, { Component } from 'react'
import Feed from './Feed'
import Post from './Post'
import User_Profile from './User_Profile'
import { Route, withRouter } from 'react-router-dom'
import { createPost, deletePost, putPost, getPosts, createComment, getComments } from './../services/api-helper'
import Edit_Post from './Edit_Post'
import Create_Comment_Form from './Create_Comment_Form'

class Main extends Component {
    state = {
        posts: [],
        comments: [],
    }

    componentDidMount() {
        console.log("Are you reading this?")
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
            posts: [...prevState.posts, newPost].reverse()
        }))
        this.props.history.push("/")
    }

    handlePostUpdate = async (id, postData) => {
        const newPost = await putPost(id, postData)
        this.setState(prevState => ({
            posts: prevState.posts.map(post => post.id == parseInt(id) ? newPost : post)
        }))
        this.props.history.push(`/posts/${id}`)
        window.location.reload(false)
    }

    handlePostDelete = async (id) => {
        await deletePost(id)
        this.setState(prevState => ({
        posts: prevState.posts.filter(post => post.id !== id)
        }))
        this.props.history.push("/")
    }

    handleCommentCreate = async (id, commentData) => {
        const newComment = await createComment(id, commentData)
        this.setState(prevState => ({
            // posts: prevState.posts.filter(post => post.id !== id),
            comments: [...prevState.comments, newComment]
        }))
        this.props.history.push(`/posts/${id}/comments`)
        window.location.reload(false)
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
                    currentUser={this.props.currentUser}
                    />
            </Route>
            <Route path='/posts/:id/comments/add'>
                <Create_Comment_Form
                    handleCommentCreate={this.handleCommentCreate}
                    currentUser={this.props.currentUser}
                    />
            </Route>
            <Route path='/posts/:id/edit' render={(props) => {
                const {id} = props.match.params;
                const postItem = this.state.posts.find(post => post.id === parseInt(id));
                return <>
                    <Edit_Post
                            {...props}
                            handlePostUpdate={this.handlePostUpdate}
                            postItem={postItem}
                            id={id}
                        />
                        </>
                    }} />
            </div>
        )
    }
}

export default withRouter(Main)
