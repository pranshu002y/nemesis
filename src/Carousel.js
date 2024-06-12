import React, { useState } from "react";
import "./Nav.css"
import { useNavigate } from "react-router-dom";
const Carousel = ()=>{ 
  const navigate = useNavigate(); 

    return(
<div>

      <div id="carousel">
        

        <div className="logo-icon" >
            <img src = "https://cdn.icon-icons.com/icons2/1144/PNG/512/fourdots_80930.png" />
          </div>
          <div className="add-links">
            <a href="#" onClick={()=>navigate("/movie/modal")} >Add Movie</a>
            <a href="#" onClick={()=>navigate("/dress/modal")} >Add Dresses</a>
            <a href="#"  onClick={()=>navigate("/game/modal")} >Add Games</a>
       
          </div>
          <div className="logo-icon" >
            <img src = "https://cdn.icon-icons.com/icons2/1144/PNG/512/fourdots_80930.png"  />
          </div>
        </div>
      </div>
   
  
    )
}
export default Carousel;