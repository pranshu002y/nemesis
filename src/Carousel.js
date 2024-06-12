import React, { useState } from "react";
import "./Nav.css"
import { useNavigate } from "react-router-dom";
const Carousel = ()=>{ 
  const navigate = useNavigate(); 

    return(
<div>

      <div id="carousel">
        

        <div className="logo-icon" >
            <img src = "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-cog-wheel-icon-png-image_956693.jpg" />
          </div>
          <div className="add-links">
            <a href="#" onClick={()=>navigate("/movie/modal")} >Add Movie</a>
            <a href="#" onClick={()=>navigate("/dress/modal")} >Add Dresses</a>
            <a href="#"  onClick={()=>navigate("/game/modal")} >Add Games</a>
       
          </div>
          <div className="logo-icon" >
            <img src = "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-cog-wheel-icon-png-image_956693.jpg"  />
          </div>
        </div>
      </div>
   
  
    )
}
export default Carousel;