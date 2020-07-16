import React, { Component } from 'react'
import Main from './components/Main'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import { verifyUser, loginUser, registerUser } from './services/auth'
import { withRouter } from 'react-router-dom'

class App extends Component {
  state = {
    userData: {
      username: '',
      password: '',
    },
    currentUser: null
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

  loginSubmit = async (e) => {
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

  render() {
    return (
      <>
        <Header 
          handleChange={this.handleChange}
          userData={this.state.userData}
          handleLogin={this.loginSubmit}
          currentUser={this.state.currentUser}
        />
        <Main />
        <Footer />
      </>
    )
  }
}

export default withRouter(App)