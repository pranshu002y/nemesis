import React from "react";
import "./Nav.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
const Nav = ()=>{ 
 
  const {logout } = useAuth0();

 
  
  const navigate = useNavigate(); 
  const [showModal , setShowModal]=useState(false);
  const openModal =()=>{
      setShowModal(true);
  };
  const closeModal =()=>{
      setShowModal(false);
  };
    return(
<div>
{showModal && <Profile setShowModal={setShowModal}/>}
      <div id="nav">
        <div id="nav-part1">
          <h1 onClick={()=>navigate("/")}>Nemesis</h1>
        </div>
        <div id="nav-part2">
          <div id="links">
            <a href="#" onClick={()=>navigate("/movies")}>Movies</a>
            <a href="#" onClick={()=>navigate("/dress")}>Dresses</a>
            <a href="#" onClick={()=>navigate("/games")}>Games</a>
       <a href="#" onClick={() => logout()}>LogOut</a>
          </div>
          <div className="logo-icon" >
            <img src = "https://cdn.icon-icons.com/icons2/1144/PNG/512/fourdots_80930.png" onClick={()=>{
                if(showModal){
                    closeModal();
                }else{
                    openModal();
                }
            }} />
          </div>
        </div>
      </div>
      </div>
  
    )
}
export default Nav;