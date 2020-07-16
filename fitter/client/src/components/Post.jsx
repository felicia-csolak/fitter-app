import React, { Component } from 'react'
import { getPost } from '../services/api-helper'

export default class Post extends Component {
    state = {
        post: null
    }

    componentDidMount = async () => {
        const post = await getPost()
        this.setState({
            post
        })
    }
    render() {
        return (
            <div>
               {this.state.post} 
            </div>
        )
    }
}
