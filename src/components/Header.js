import React, {useEffect} from 'react'
import styled from 'styled-components'
import firebase from '../firebase'
import { useHistory,Link } from 'react-router-dom'
import {
   selectUserName,
   selectUserPhoto,
   setUserLogin,
   setSignOut
} from "../features/user/userSlice"
import {useDispatch, useSelector} from "react-redux"

 

function Header(){
   const dispatch = useDispatch()
   const history = useHistory()
   const userName = useSelector(selectUserName)
   const userPhoto = useSelector(selectUserPhoto)

   useEffect(() => { 
      firebase.auth().onAuthStateChanged(async(user)=>{
         if(user){
            dispatch(setUserLogin({
               name: user.displayName,
               email: user.email,
               photo: user.photoURL 
            }));
            history.push("/")
         }
      }) 
   }, [])

   useEffect(() => {
     
   }, [userPhoto])

   const signIn = () =>{
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then((result) =>{
         let user = result.user
         dispatch(setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL 
         }));
         history.push("/")
      })
   }

   const signOut = () =>{
      firebase.auth().signOut()
      .then(()=>{
         dispatch(setSignOut())
         history.push("/login")
      })
   }

   console.log(userPhoto)
    return(
        <Nav>
           <Logo src = "/images/logo.svg"/>
           { !userName? (
            <LoginContainer>
               <Login onClick={signIn}>Login</Login> 
            </LoginContainer>  
             ):
            <>
            <NavMenu>
             <a>
             <img src = "/images/home-icon.svg"/>
             <Link to="/" style={{ textDecoration: 'none' , color:'white'}}>
             <span>INICIO</span> 
             </Link>
            </a>
            <a>
              <img src = "/images/search-icon.svg"/>
              <Link to="/search" style={{ textDecoration: 'none' , color:'white'}}> 
                <span>BUSQUEDA</span> 
              </Link>
            </a>
            <a>
            <img src = "/images/watchlist-icon.svg"/>
            <Link to="/watchlist" style={{ textDecoration: 'none' , color:'white'}}> 
                <span>MI LISTA</span> 
              </Link>
            </a>
            <a>
               <img src = "/images/original-icon.svg"/>
               <Link to="/originals" style={{ textDecoration: 'none' , color:'white'}}> 
                <span>ORIGINALES</span> 
              </Link>
            </a>
            <a>
              <img src = "/images/movie-icon.svg"/>
              <Link to="/movies" style={{ textDecoration: 'none' , color:'white'}}>
               <span>PELICULAS</span> 
               </Link>
            </a>
             <a>
              <img src = "/images/series-icon.svg"/>
              <Link to="/series" style={{ textDecoration: 'none' , color:'white'}}>
               <span>SERIES</span> 
               </Link> 
       
            </a>
            </NavMenu>
            <UserImg 
            onClick={signOut}
            src = {userPhoto} />
           
               </>
            }
        </Nav>
    )

    }
export default Header
const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex; 
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0; 
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`


const Login = styled.div`
 border: 1px solid #f9f9f9;
 padding: 8px 16px;
 border-radius: 4px;
 letter-spacing: 1.5px;
 text-transform: uppercase;
 background-color: rgba(0, 0, 0, 0.6);
 transition: all 0.2s ease 0s;
 cursor: pointer;

 &:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
 }
`

const LoginContainer = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
`

const LinkStyle = styled.div`
text-decoration: none;
`