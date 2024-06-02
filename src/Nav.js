import React from "react";
import "./Nav.css"

import { useState } from "react";
import Modal from "./Modal";
const Nav = ()=>{
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
          <h1>Nemesis</h1>
        </div>
        <div id="nav-part2">
          <div id="links">
            <a href="#" >Movies</a>
            <a href="#" >Dresses</a>
            <a href="#">Games</a>
            <a href="#" >Donate</a>
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