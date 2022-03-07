import React from 'react'
import { LoginButton, LoginContainer } from './styles'

const endpoint = "https://accounts.spotify.com/authorize";
const clientID = `270b420c3a4b442fbe44cf723c0c26d9`
console.log = clientID;
const redirectUri = "https://localhost:3000/"
const scopes = ["user-read.currently-playing",
"user-read.recently-played",
"user-read.playback-state",
"user-top-read",
"user-modify-playback-state",]
const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true}`


const Login = () => {
  return (
    <LoginContainer>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="logo" className="logo" />
        <LoginButton href={loginURL}> Login with spoify</LoginButton>
    </LoginContainer>

  )
}

export default Login