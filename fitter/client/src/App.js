import React, { Component } from 'react'
import Main from './components/Main'
import Header from './components/shared/Header'
import Sub_Header from './components/shared/Sub_Header'
import Footer from './components/shared/Footer'
import { verifyUser, loginUser, registerUser } from './services/auth'
import { createPost } from './services/api-helper'
import { withRouter } from 'react-router-dom'

class App extends Component {
  state = {
    userData: {
      username: '',
      password: '',
    },
    currentUser: null,
    post: {
      title: '',
      content: '',
      exercise_type: '',
      exercise_duration: '',
      calories: null
    }
  }

  componentDidMount = async () => {
    const currentUser = await verifyUser()
    this.setState({
      currentUser
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        [name]: value
      }
    }))
  }

  handleLogin = async (e) => {
    e.preventDefault()
    const currentUser = await loginUser(this.state.userData)
    this.setState({
      currentUser
    })
  }

  handleRegister = async (e) => {
    e.preventDefault()
    const currentUser = await registerUser(this.state.userData)
    this.setState({
      currentUser
    })
    this.props.history.push('/')
  }

  handlePost = async (e) => {
    e.preventDefault()
    const post = await createPost(this.state.post)
    this.setState({
      post
    })
  }

  render() {
    return (
      <>
        <Header 
          handleChange={this.handleChange}
          userData={this.state.userData}
          handleLogin={this.handleLogin}
          currentUser={this.state.currentUser}
        />
        <Sub_Header 
          handleChange={this.handleChange}
          userData={this.state.userData}
          handleRegister={this.handleRegister}
          handlePost={this.handlePost}
        />
        <Main />
        <Footer />
      </>
    )
  }
}

export default withRouter(App)