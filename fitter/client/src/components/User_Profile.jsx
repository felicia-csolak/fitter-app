import React, { Component } from 'react'
import { getUser } from '../services/api-helper'
import { withRouter } from 'react-router-dom'

class User_Profile extends Component {
    state ={
        user: null
    }

    componentDidMount = async () => {
        const user = await getUser(`match.params.${id}`)
        this.setState({
            user
        })
    }
    render() {
    return (
        <div>
            I'm the user profile!
        </div>
    )
}
}

export default withRouter(User_Profile)