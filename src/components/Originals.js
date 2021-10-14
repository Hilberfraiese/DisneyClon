import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux"
import {
    selectMovies
 } from "../features/data/TheMovies"
 import { Link } from "react-router-dom";

function Originals(){
  const movies = useSelector(selectMovies)
  let array = movies.filter((e)=>e.original === true)
 
 

    return(
        <Container>
         <h3>ORIGINALES</h3>  
         <Content>
         {array.map((movie)=>{
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

export default Originals


const Container = styled.div`
    font-size: 30px;
    margin-left: 75px;
    margin-right: 75px;
    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@800&display=swap');
    font-family: 'Kanit', sans-serif;
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    height: 100%;
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
      h3{
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@800&display=swap');
        font-family: 'Kanit', sans-serif;
        text-align: center;
        justify-content: center;
        margin-top: 60px;
        margin-bottom: 60px;
        font-size: 30px;
    
       }
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

const Content2 = styled.div`
display: flex;
.select{
    hight: 10px;
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
    height: 100%;
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
const Selected =styled.select`
text-align:center;
height: 30px;
width: 145px;
margin-top:40px;
margin-left: 5%;
font-size: 15px;
border-radius: 15px;
background-color: #4B4D50;
color: white;
`
