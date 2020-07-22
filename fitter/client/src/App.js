import React, { Component } from 'react'
import Main from './components/Main'
import Header from './components/shared/Header'
import Sub_Header from './components/shared/Sub_Header'
import Footer from './components/shared/Footer'
import { verifyUser, loginUser, registerUser, removeToken } from './services/auth'
import { withRouter } from 'react-router-dom'
import './css/main.css'

class App extends Component {
  state = {
    userData: {
      username: '',
      password: '',
    },
    currentUser: null,
    loginUserData: {
      username: '',
      password: ''
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

  handleLogInChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      loginUserData: {
        ...prevState.loginUserData,
        [name]: value
      }
    }))
  }

  handleLogin = async () => {
    console.log(this.state.loginUserData)
    const currentUser = await loginUser(this.state.loginUserData)
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
    window.location.reload(false)
  }


  render() {
    return (
      <>
        <Header 
          handleLogInChange={this.handleLogInChange}
          loginUserData={this.state.loginUserData}
          handleLogin={this.handleLogin}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Sub_Header 
          handleChange={this.handleChange}
          userData={this.state.userData}
          handleRegister={this.handleRegister}
          currentUser={this.state.currentUser}
        />
        <Main 
          currentUser={this.state.currentUser}
        />
        <Footer />
      </>
    )
  }
}

export default withRouter(App)