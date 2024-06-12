import React, { useState } from "react";
import "./Nav.css"
import { useNavigate } from "react-router-dom";
const Carousel = ()=>{ 
  const navigate = useNavigate(); 

    return(
<div>

      <div id="carousel">
        

        <div className="logo-icon" >
            <img src = "https://static.vecteezy.com/system/resources/previews/021/190/084/original/settings-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" />
          </div>
          <div className="add-links">
            <a href="#" onClick={()=>navigate("/movie/modal")} >Add Movie</a>
            <a href="#" onClick={()=>navigate("/dress/modal")} >Add Dresses</a>
            <a href="#"  onClick={()=>navigate("/game/modal")} >Add Games</a>
       
          </div>
          <div className="logo-icon" >
            <img src = "https://static.vecteezy.com/system/resources/previews/021/190/084/original/settings-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"  />
          </div>
        </div>
      </div>
   
  
    )
}
export default Carousel;