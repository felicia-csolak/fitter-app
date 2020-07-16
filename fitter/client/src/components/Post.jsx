import React, { Component } from 'react'
import { getPost } from '../services/api-helper'
import { withRouter } from 'react-router-dom'

class Post extends Component {
    state = {
        post: []
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const post = await getPost(id)
        this.setState({
            post: []
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

export default withRouter(Post)
