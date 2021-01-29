import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialValues = {
  username: '',
  password: ''
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState(initialValues);

  const { push } = useHistory();

  const onChange = e => {
    const {name, value} = e.target;
    setCredentials({...credentials, [name]: value});
  };

  const login = () => {
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.payload)
        push('/bubble-page')
      })
      .catch(err => {
        console.log(err)
      });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    login();
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={loginSubmit}>
      <input
        type='text'
        name='username'
        value={credentials.username}
        onChange={onChange}
        placeholder='Username'
        /> 
        <input
        type='text'
        name='password'
        value={credentials.password}
        onChange={onChange}
        placeholder='Password'
        /> 
        <button className='login-button' type='submit'>Log In</button>
      </form>
    </>
  );
};

export default Login;
