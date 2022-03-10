import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './components/Login/Login';
import { getTokenFromURL } from './components/Login/LoginLogic';
import Player from './components/Player/Player';
import { SET_USER } from './features/counter/UserSlice';

const spotify = new SpotifyWebApi();


function App() {
  const [token, setToken] = useState("")
  const dispatch = useDispatch()


  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash ="";
    const _token = hash.access_token;
    dispatch(SET_USER(_token))
    console.log("token =>", token);
  }, [token])
  return (
    <div >
      {
        token ?  <Player /> : <Login />
      }   
    </div>
  );
}

export default App;
