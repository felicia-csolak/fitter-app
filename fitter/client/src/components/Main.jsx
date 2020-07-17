import React, { Component } from 'react'
import Feed from './Feed'
import Post from './Post'
import User_Profile from './User_Profile'
import { Link, Route, withRouter } from 'react-router-dom'

class Main extends Component {
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
