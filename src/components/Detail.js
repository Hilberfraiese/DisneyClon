import React, {useEffect, useState}from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { selectMovies, setList } from '../features/data/TheMovies'

function Detail() {
 const {id} = useParams()

 const state= useSelector(selectMovies)
 const dispatch = useDispatch();
 const movie = state.filter(e => e.id === Number(id))
 const [lista, setLista] = useState()
 
 function addList(movi){
   if(movi !== undefined)
   setLista(movi)
  }
 
 useEffect(()=>{
   if(lista!==undefined){
     dispatch(setList(lista))
   }
},[lista])

    return (
        <Container>
            <Background>
              <img src={movie[0].background} />
            </Background>
            <ImageTitle>
             <img src ={movie[0].imgtitle}/> 

            </ImageTitle>
            <Controls>
              <PlayButton>
                  <img src="/images/play-icon-black.png"/>
                  <span>PLAY</span>
              </PlayButton>
              <TrailerButton>
                  <img src="/images/play-icon-white.png"/>
                  <span>Trailer</span>
              </TrailerButton>
              <AddButton>
                  <span onClick={e=> addList(movie[0])}>+</span>
              </AddButton>
              <GroupWatchButton> 
                <img src="/images/group-icon.png"/>  
              </GroupWatchButton>
            </Controls>
            <Subtitle>
            {movie[0].genero}         
             </Subtitle>
             <Description>
              {movie[0].info}
             </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
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
margin-top: 50px;
 height: 30vh;
 min-height: 170px;
 width: 35vw;
 min-width: 200px;

 img{
     width: 100%;
     height: 100%;
     object-fit: contain;
 }
`
const Controls = styled.div`
margin-top: 25px;
display: flex;
align-items: center;
`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  heght: 56px;
  background: rgb (249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover{
      background: rgb(198, 198, 198);
  }
`
const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
text-transform: uppercase;
`
const AddButton = styled.button`
margin-right: 16px;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6); 
cursor: pointer;
span{
    font-size: 30px;
    color: white;
`

const GroupWatchButton = styled(AddButton)`
background: rgb(0,0,0);
`

const Subtitle = styled.div`
color: rgb (249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`

const Description = styled.div`
line-height: 1.5;
font-size: 17px;
margin-top: 16px;
color: rgb(249, 249, 249);
text-align: left;
width: 50%;
`