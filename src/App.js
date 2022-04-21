import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './components/Login/Login';
import { getTokenFromURL } from './components/Login/LoginLogic';
import Player from './components/Player/Player';
import { SET_USER } from './features/UserSlice';
import { selecToken, SET_TOKEN } from './features/TokenSlice';
import { SET_PLAYLIST } from './features/PlayListSlice';

const spotify = new SpotifyWebApi();

function App() {
  const token = useSelector(selecToken)
  // const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const hash = getTokenFromURL();
    const _token = hash.access_token;    
    if (_token) {
      dispatch(SET_TOKEN(_token))
      spotify.setAccessToken(_token);
      spotify.getMe().then (user => dispatch(SET_USER(user)))   
      spotify.getPlaylist("37i9dQZEVXbMDoHDwVN2tF").then (
        playlist => dispatch(SET_PLAYLIST(playlist)))
     }  
    
  },[dispatch])
  return (
    <div >
      {
        token ?  <Player /> : <Login />
      }   
    </div>
  );
}

export default App;
