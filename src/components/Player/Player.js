import React from 'react'
import Body from '../Body/Body'
import Sidebar from '../SideBar/Sidebar'
import { SpotifyBody } from './styles'

const Player = () => {
  return (
    <SpotifyBody>
        <Sidebar/>
        <Body/>    

    </SpotifyBody>
  )
}

export default Player