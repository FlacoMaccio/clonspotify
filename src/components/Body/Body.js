import React from 'react'
import Header from './Header'
import { BodyContainer, Icons, Info, InfoText, Songs } from './styles'
import { useSelector } from 'react-redux'
import { selectPlaylist } from '../../features/PlayListSlice'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material'
import SongRow from './SongRow'


const Body = () => {
  const playlist = useSelector(selectPlaylist);

  return (
    <BodyContainer >
      <Header />
      <Info>
        {/* <img src={playlist?.images[0]?.url} alt="img" /> */}
      <InfoText>
        <h4>Play List</h4>
        <h2>Discover</h2>
        <p>{playlist?.name}</p>
      </InfoText>
      </Info>
      <Songs>
        <Icons>
          <PlayCircleFilled />
          <Favorite fontSize="large"/>
          <MoreHoriz fontSize="large"/>
        </Icons>
        {
            playlist?.tracks?.items.map((item, index) => (
              <SongRow track={item.track} key={index}/>
            ))
        }
      </Songs>

      
    </BodyContainer>
  )
}

export default Body