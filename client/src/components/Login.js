import React, { useState } from "react";
import axios from 'axios'

const initialValues = {
  username: '',
  password: ''
}

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [loginForm, setLoginForm] = useState(initialValues)

  const inputChange = (name, value) => {
    setLoginForm({
      ...loginForm,
      [name]: value
    })
  }

  const onChange = e => {
    const {name, value} = e.target
    inputChange(name, value)
  }

  const formSubmit = (e) => {
    e.preventDefault()
    const newLogin = {
      username: loginForm.username.trim(),
      password: loginForm.password.trim()
    }

  axios.post('http://localhost:5000/api/login', newLogin)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      props.history.push('/bubble-page')
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={formSubmit}>
      <input
        type='text'
        name='username'
        value={loginForm.username}
        onChange={onChange}
        placeholder='Username'
        /> 
        <input
        type='text'
        name='password'
        value={loginForm.password}
        onChange={onChange}
        placeholder='Password'
        /> 
        <button type='submit'>Log In</button>
      </form>
    </>
  );
};

export default Login;
