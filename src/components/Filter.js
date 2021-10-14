import React from "react";
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {
    selectMovies
 } from "../features/data/TheMovies"

function Filter(){
    let background = ""
    let logo = ""
    const {id} = useParams()
   
    if(id === "disney"){
        background = "https://wallpapercave.com/wp/wp2420911.jpg";
    
    }else if(id === "marvel"){
        background = "https://coolwallpapers.me/picsup/2618748-avengers-4k-wallpaper-pc-background.jpg"

    }else if(id === "pixar"){
        background = "https://wallpaperaccess.com/full/331622.jpg";
    }else if(id === "SW"){
        background= "https://c4.wallpaperflare.com/wallpaper/1005/822/563/star-wars-death-star-at-at-space-wallpaper-preview.jpg"
  
    }else if(id === "national"){
        background = "https://www.lareserva.com/sites/default/files/styles/article_image/public/field/image/chakmoolf.jpg?itok=fSYChRvG"

    }
    const movies = useSelector(selectMovies)
    const moviesFilter = movies.filter(e => e.creador === id)
    return(
        <Container>
            <Background>
              <img src={background} />
            </Background>
        <Content>
         {moviesFilter.map((movie)=>{
    
           return(
           <Link to= {`/detail/${movie.id}`}>   
           <Wrap> 
              <img src={movie.img}/>
           </Wrap>
           </Link>)
         })}  
        </Content>
    </Container>
    )
}

export default Filter
 
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



const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));
margin-top: 500px;
 img{
    width: 100%;
    heght: 100%;
    object-fit: cover;
} 
`
const Wrap =styled.div`
border-radius: 10px;
overflow: hidden;
border: 3 px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb (0 0 0 /69%) 0px 26px 30px -10px,
rgb( 0 0 0/73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

&:hover{
 transform: scale(1.05);
 box-shadow: rgb (0 0 0 /80%) 0px 40px 58px -16px,
 rgb( 0 0 0/72%) 0px 30px 22px -10px;
 border-color: rgba(249, 249, 249, 0.8);
}

`
const Background = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 z-index: -1;
 opacity: 0.8;
 img{
     width: 100%;
     height: 100%;
    
 }
`

const ImageTitle =  styled.div`
 margin: auto;
 margin-top: 0px;
 height: 120vh;
 min-height: 170px;
 width: 50vw;
 min-width: 200px;

 img{
     width: 100%;
     height: 100%;
     object-fit: contain;
 }
`


