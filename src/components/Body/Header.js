import { Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight } from './styles'

const Header = () => {
  return (
    <HeaderContainer >
        <HeaderLeft>
          <Search/>
          <input type="text" placeholder="Search for Artist, Songs, or order"></input>
        </HeaderLeft>
        <HeaderRight>
          <Avatar/>
          <h4>Flaco Macio</h4>

        </HeaderRight>

    </HeaderContainer>
  )
}

export default Header