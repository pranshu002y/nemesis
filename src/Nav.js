import React from "react";
import "./Nav.css"

const Nav = ()=>{
    return(
       
        
      <div id="nav">
        <div id="nav-part1">
          <h1>Nemesis</h1>
        </div>
        <div id="nav-part2">
          <div id="links">
            <a href="#" >Shop</a>
            <a href="#" >Events</a>
            <a href="#">Games</a>
            <a href="#" >Donate</a>
          </div>
          <div className="logo-icon">
            <img src = "https://cdn.icon-icons.com/icons2/1144/PNG/512/fourdots_80930.png"/>
          </div>
        </div>
      </div>
  
    )
}
export default Nav;