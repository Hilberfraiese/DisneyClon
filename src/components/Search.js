import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux"
import {
    selectMovies
 } from "../features/data/TheMovies"
 import { Link } from "react-router-dom";

function Search(){
  const movies = useSelector(selectMovies)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState([])

  useEffect(() => {
    if(search.length>0){
        let array = movies.filter((e)=>e.genero.toLowerCase().includes(search))
        let array2 = movies.filter((e)=>e.title.toLowerCase().includes(search))
        array = array.concat(array2)
        console.log(array)
        setFilter(array) 
    }else{
        setFilter([])
    }  
  }, [search])


    return(
        <Container>
           <Inp placeholder="Título, personaje o género" 
           value = {search}
           onChange={(e) => setSearch(e.target.value)} 
           style ={{color:"white", textAlign:"initial", textIndent: "80px"}}>
          </Inp>   
          {search === ""?(
          <h3>Explorar</h3>
          ):null}
          {search === ""?(
          <Content>
         {movies.map((movie)=>{
           return(
           <Link to= {`/detail/${movie.id}`}>   
           <Wrap> 
              <img src={movie.img}/>
           </Wrap>
           </Link>)
         })}  
        </Content>):
        filter.length >0 ?(
          <Content>
          {filter.map((movie)=>{
           return(
           <Link to= {`/detail/${movie.id}`}>   
           <Wrap> 
              <img src={movie.img}/>
           </Wrap>
           </Link>)
         })} 
          </Content>):(
      
            <h2>No se encontraron resultados para "{search}"</h2>
       
          )}
          
        
         </Container>
    )
}

export default Search

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflox-x:hidden;
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
      font-size: 55px;
      @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@800&display=swap');
      font-family: 'Kanit', sans-serif;
     justify-content:center;
     text-align:center;
    }
    h2{
      justify-content:center;
      text-align:center;
      margin-top: 150px;
      font-size: 40px;
    }

`

const Inp = styled.input`
    position: relative;
    overflox-x:hidden;
    left: -45px;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    outline: none;
    text-overflow: ellipsis;
    z-index: 9;
    border: none;
    color: white;
    height: 80px;
    padding-left: calc(3.5vw + 24px);
    width: 100vw;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background: rgb(82,82,94);
    background: linear-gradient(180deg, rgba(82,82,94,1) 23%, rgba(94,94,107,1) 60%, rgba(106,105,117,1) 76%);
    padding: 1px 2px;
    font-size: 40px;
    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@800&display=swap');
    font-family: 'Kanit', sans-serif;
    
    ::placeholder { 
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@800&display=swap');
        font-family: 'Kanit', sans-serif;
        color: #9B9B9B; 
     
    }

    :focus {
      background: rgb(99,99,112);
      background: linear-gradient(180deg, rgba(99,99,112,1) 23%, rgba(120,120,134,1) 60%, rgba(125,125,139,1) 76%);
        transition: all 0.5s ease-out;
        border: 2px solid #white;
        ::placeholder { 
            @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@800&display=swap');
            font-family: 'Kanit', sans-serif;
            color: white; 
          }
    }

`


const Content = styled.div`
margin-left: 75px;
margin-right: 75px;
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));
margin-top: 100px;
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


const Content2 = styled.div`
display: flex;
.select{
    hight: 10px;
}
`