import React from "react";
import "./Nav.css"
import { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Nav = ()=>{ 
 
  const { user,loginWithRedirect ,isAuthenticated ,logout } = useAuth0();

  console.log("logged User",user);
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
{showModal && <Modal setShowModal={setShowModal}/>}
      <div id="nav">
        <div id="nav-part1">
          <h1 onClick={()=>navigate("/")}>Nemesis</h1>
        </div>
        <div id="nav-part2">
          <div id="links">
         {
          isAuthenticated ? (<button onClick={() => logout()}>LogOut</button>) : ( <button onClick={() => loginWithRedirect()}>Log In</button>)
         }
            <a href="#" onClick={()=>navigate("/movies")}>Movies</a>
            <a href="#" onClick={()=>navigate("/dress")}>Dresses</a>
            <a href="#" onClick={()=>navigate("/games")}>Games</a>
            <a href="https://www.linkedin.com/in/pranshu002y/"  onClick={()=>navigate("/linkedin")}>Donate</a>
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