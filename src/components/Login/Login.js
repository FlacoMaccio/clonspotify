import React from 'react'
import { getTokenFromURL, loginURL } from './LoginLogic'
import { LoginButton, LoginContainer } from './styles'


const Login = () => {
   const token = getTokenFromURL();
   console.log (token);
  return (
    <LoginContainer>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="logo" className="logo" />
        <LoginButton href={loginURL}> Login with spoify</LoginButton>
    </LoginContainer>

  )
}

export default Login