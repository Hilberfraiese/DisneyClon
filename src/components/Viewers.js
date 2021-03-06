import React from 'react'
import styled from 'styled-components'
import  HoverVideoPlayer from 'react-hover-video-player' 
import {Link} from "react-router-dom"

function Viewers() {

  let marvel = "marvel"
  let star= "SW"
  let disney = "disney"
  let NG = "national"
  let pixar = "pixar"

    return (
        <Container>
          <Link to= {`/filter/${disney}`} >
           <Wrap>
            < HoverVideoPlayer 
            videoSrc = "./videos/1564674844-disney.mp4" 
            style={{
            display: "center",
            margin: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundSize: "cover",
            }}

            hoverOverlay = {
              < div  className = "hover-overlay" >
              < img 
              src = "/images/viewers-disney.png"  
              alt = "" 
              style = { { 
              // Haz que la imagen se expanda para cubrir las dimensiones del video 
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
              marginTop: "1.5px"
              } } 
              /> 
              </div>
            }
            pausedOverlay = { 
            < img 
            src = "/images/viewers-disney.png"  
            alt = "" 
            style = { { 
            // Haz que la imagen se expanda para cubrir las dimensiones del video 
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px",
            backgroundColor: "#040714",
            } } 
            />
          
              } 
            loadingOverlay= { 
              < div  className = "loading-overlay" > 
                < div  className = "loading-spinner" /> 
              </ div > 
            } 
            /> 
           </Wrap>
           </Link>
           <Link to= {`/filter/${pixar}`} >
           <Wrap>
            < HoverVideoPlayer 
            videoSrc = "./videos/1564676714-pixar.mp4" 
            style={{
            display: "center",
            margin: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundSize: "cover",
            }}

            hoverOverlay = {
              < div  className = "hover-overlay" >
              < img 
              src = "/images/viewers-pixar.png"  
              alt = "" 
              style = { { 
              // Haz que la imagen se expanda para cubrir las dimensiones del video 
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
              marginTop: "1.5px"
              } } 
              /> 
              </div>
            }
            pausedOverlay = { 
            < img 
            src = "/images/viewers-pixar.png"  
            alt = "" 
            style = { { 
            // Haz que la imagen se expanda para cubrir las dimensiones del video 
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px",
            backgroundColor: "#040714",
            } } 
            />
          
              } 
            loadingOverlay= { 
              < div  className = "loading-overlay" > 
                < div  className = "loading-spinner" /> 
              </ div > 
            } 
            /> 
           </Wrap>
           </Link>
           <Link to= {`/filter/${marvel}`} >
           <Wrap>
            < HoverVideoPlayer 
            videoSrc = "./videos/1564676115-marvel.mp4" 
            style={{
            display: "center",
            margin: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundSize: "cover",
            }}

            hoverOverlay = {
              < div  className = "hover-overlay" >
              < img 
              src = "/images/viewers-marvel.png"  
              alt = "" 
              style = { { 
              // Haz que la imagen se expanda para cubrir las dimensiones del video 
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
              marginTop: "1.5px"
              } } 
              /> 
              </div>
            }
            pausedOverlay = { 
            < img 
            src = "/images/viewers-marvel.png"  
            alt = "" 
            style = { { 
            // Haz que la imagen se expanda para cubrir las dimensiones del video 
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px",
            backgroundColor: "#040714",
            } } 
            />
          
              } 
            loadingOverlay= { 
              < div  className = "loading-overlay" > 
                < div  className = "loading-spinner" /> 
              </ div > 
            } 
            /> 
           </Wrap>
           </Link>
           <Link to= {`/filter/${star}`} >
           <Wrap>
            < HoverVideoPlayer 
            videoSrc = "./videos/1608229455-star-wars.mp4" 
            style={{
            display: "center",
            margin: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundSize: "cover",
            }}

            hoverOverlay = {
              < div  className = "hover-overlay" >
              < img 
              src = "/images/viewers-starwars.png"  
              alt = "" 
              style = { { 
              // Haz que la imagen se expanda para cubrir las dimensiones del video 
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
              marginTop: "1.5px"
              } } 
              /> 
              </div>
            }
            pausedOverlay = { 
            < img 
            src = "/images/viewers-starwars.png"  
            alt = "" 
            style = { { 
            // Haz que la imagen se expanda para cubrir las dimensiones del video 
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px",
            backgroundColor: "#040714",
            } } 
            />
          
              } 
            loadingOverlay= { 
              < div  className = "loading-overlay" > 
                < div  className = "loading-spinner" /> 
              </ div > 
            } 
            /> 
           </Wrap>
           </Link>
           <Link to= {`/filter/${NG}`} >
           <Wrap>
            < HoverVideoPlayer 
            videoSrc = "./videos/1564676296-national-geographic.mp4" 
            style={{
            display: "center",
            margin: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundSize: "cover",
            }}

            hoverOverlay = {
              < div  className = "hover-overlay" >
              < img 
              src = "/images/viewers-national.png"  
              alt = "" 
              style = { { 
              // Haz que la imagen se expanda para cubrir las dimensiones del video 
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
              marginTop: "1.5px"
              } } 
              /> 
              </div>
            }
            pausedOverlay = { 
            < img 
            src = "/images/viewers-national.png"  
            alt = "" 
            style = { { 
            // Haz que la imagen se expanda para cubrir las dimensiones del video 
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px",
            backgroundColor: "#040714",
            } } 
            />
          
              } 
            loadingOverlay= { 
              < div  className = "loading-overlay" > 
                < div  className = "loading-spinner" /> 
              </ div > 
            } 
            /> 
           </Wrap>
           </Link>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
margin-top: 30px;
display: grid;
grid-template-columns: repeat(5, minmax(0, 1fr));
grid-gap: 25px;  
padding: 30px 0px 26px;
justify-content: center;

`

const Wrap = styled.div`
border-radius: 10px;
cursor: pointer;
border: 4px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0 /73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
overflow: hidden;

img{
     width: 100%;
     height: 100%;
     object-fit: cover;  
   }

&:hover {
 box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
  rgb(0 0 0 /72%) 0px 30px 22px -10px;
 transform: scale(1.05);
 border-color: rgba(249, 249, 249, 0.8)

}   
`

