import React, {useEffect, useState}from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import SliderImg from './Slider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from "../firebase.js"

import mov from "./pelis"
import { setMovies } from '../features/data/TheMovies';


function  Home() {

  const dispatch = useDispatch();
  
   useEffect(()=>{
  dispatch(setMovies(mov))
  })

  return (
        <Container>
            <SliderImg/>
            <Viewers/>
            <Movies/>
        </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflox-x:hidden;

  &:before{
      background: url("/images/home-background.png") center center / cover no-repeat fixed;
      height: 100%;
      content : "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
`

