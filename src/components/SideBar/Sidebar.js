import React from 'react'
import { Home, LibraryMusic, Search } from '@mui/icons-material'
import { PlayList, SidebarContainer } from './styles'
import SideBarChoice from './SideBarChoice'

const Sidebar = () => {
  return (
    <SidebarContainer >
        <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" />
        <SideBarChoice title="Home" Icon={Home}/>
        <SideBarChoice title="Search" Icon={Search}/>
        <SideBarChoice title="You Library" Icon={LibraryMusic}/>     
        <PlayList>PLAYLIST</PlayList>
        <hr/>
        <SideBarChoice title="2022 Chillout Music" />
        <SideBarChoice title="Reguetton Fiestero" />

    </SidebarContainer>
  )
}

export default Sidebar