import { PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';
import React from 'react'
import { FooterCenter, FooterContainer, FooterLeft, FooterRight } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft> 
        <img src="https://www.lahiguera.net/musicalia/artistas/j_balvin/disco/11475/j_balvin_jose-portada.jpg" alt="cover"></img>
        <div>
          <h4>F40</h4>
          <p>J Balvin</p>
        </div>
      </FooterLeft>
      <FooterCenter>
        <Shuffle/>
        <SkipPrevious/>
        <PlayCircleOutline/>
        <SkipNext/>
        <Repeat/>
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={2}>
            <Grid item><PlaylistPlay/></Grid>
            <Grid item><VolumeDown/></Grid>
            <Grid item xs><Slider/></Grid>
        </Grid>
      </FooterRight>
      </FooterContainer>
  )
}

export default Footer;