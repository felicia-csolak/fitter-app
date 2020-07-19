import React, { Component } from 'react'
import Main from './components/Main'
import Header from './components/shared/Header'
import Sub_Header from './components/shared/Sub_Header'
import Footer from './components/shared/Footer'
import { verifyUser, loginUser, registerUser, removeToken } from './services/auth'
import { withRouter } from 'react-router-dom'

class App extends Component {
  state = {
    userData: {
      username: '',
      password: '',
    },
    currentUser: null,
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

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    removeToken();
    this.props.history.push('/')
  }


  render() {
    return (
      <>
        <Header 
          handleChange={this.handleChange}
          userData={this.state.userData}
          handleLogin={this.handleLogin}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Sub_Header 
          handleChange={this.handleChange}
          userData={this.state.userData}
          handleRegister={this.handleRegister}
        />
        <Main />
        <Footer />
      </>
    )
  }
}

export default withRouter(App)