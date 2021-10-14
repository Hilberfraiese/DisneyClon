import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import {Link} from "react-router-dom"
import {
    selectMovies,
    selectList
 } from "../features/data/TheMovies"
import {useDispatch, useSelector} from "react-redux"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Movies() {
   const movies = useSelector(selectMovies)
   const list = useSelector(selectList)

   let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,}

    let familiar = movies.filter((e)=> e.genero.includes("Comedia"))
    let superheroes = movies.filter((e) => e.genero.includes("Superhéroes"))
    let docu = movies.filter((e)=> e.genero.includes("Docu"))
    let cf = movies.filter((e)=> e.genero.includes("Ciencia ficc"))
    

    return (
        <Container>
            <h4>Para toda la familia</h4>
          
            <Carousel {...settings}>
             {familiar.map((movie)=>{
               
               return(
                
               <Link to= {`/detail/${movie.id}`}>   
               <Wrap> 
                  <img src={movie.img}/>
               </Wrap>
               </Link>
              )
             })} 
              </Carousel> 
              <h4>Superhéroes</h4>
          
          <Carousel {...settings}>
           {superheroes.map((movie)=>{
             
             return(
              
             <Link to= {`/detail/${movie.id}`}>   
             <Wrap> 
                <img src={movie.img}/>
             </Wrap>
             </Link>
            )
           })} 
            </Carousel> 
         
            <h4>Documental</h4>
          
          <Carousel {...settings}>
           {docu.map((movie)=>{
             
             return(
              
             <Link to= {`/detail/${movie.id}`}>   
             <Wrap> 
                <img src={movie.img}/>
             </Wrap>
             </Link>
            )
           })} 
            </Carousel> 
            <h4>Ciencia Ficción</h4>
            <Carousel {...settings}>
           {cf.map((movie)=>{
             
             return(
              
             <Link to= {`/detail/${movie.id}`}>   
             <Wrap> 
                <img src={movie.img}/>
             </Wrap>
             </Link>
            )
           })} 
            </Carousel> 
        </Container>
    )
}

export default Movies

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
      &:before {
          font-size: 10px;
          color: rgb (150, 158, 171);
      }
  }

  li.slick-active button::before{
      color: white;
  }
  .slick-list{
      overflow:visible;
  } 

  button{
      z-index: 1;
  }
`
const Container = styled.div`

`

const Content = styled.div`
display: grid;
grid-gap: 25px; 
grid-template-columns: repeat(4, minmax(0,1fr));

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

img{
    border: 4px solid transparent;
    width: 100%;
    heght: 100%;
    border-radius: 15px;
    box-shadow: rgb( 0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
    transition-duration: 300ms;

    &:hover {
        border: 4px solid rgba(249, 249, 249, 0.8)
    }
}

&:hover{
 transform: scale(1.02);
 box-shadow: rgb (0 0 0 /80%) 0px 40px 58px -16px,
 rgb( 0 0 0/72%) 0px 30px 22px -10px;
 border-color: rgba(249, 249, 249, 0.8);
}

`
