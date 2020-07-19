import React, { Component } from 'react'
import Feed from './Feed'
import Post from './Post'
import User_Profile from './User_Profile'
import { Link, Route, withRouter } from 'react-router-dom'
import { createPost } from './../services/api-helper'

class Main extends Component {
    state = {
        post: []
    }

    handlePost = async (postData) => {
        const newPost = await createPost(postData)
        this.setState(prevState => ({
          post: [...prevState.post, newPost]
        }))
      }

    render() {
        return (
            <div>
                <Feed />
                <Route path='/users/:id'>
                <User_Profile />
                </Route>
                <Route path ='/posts/:id'>
                <Post />
                </Route>
            </div>
        )
    }
}

export default withRouter(Main)
