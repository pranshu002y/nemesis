import React from "react";
import "./Cards.css"
const Cards = ({name}) =>{
    return(
        <div>
           

    <div class="card">
      <div class="card-inner" style={{"--clr":"#fff;"}}>
        <div class="box">
          <div class="imgBox">
            <img src="https://images.unsplash.com/photo-1716277486487-1c9d08eaf021?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trust & Co."/>
          </div>
          <div class="icon">
            <a href="https://www.netflix.com/browse" class="iconBox"> 
            <span class="material-symbols-outlined">
               hey
              </span></a>
          </div>
        </div>
      </div>
      <div class="content">
        <h3>netflix</h3>
        <p>Fill out the form and the algorithm will offer the right team of experts</p>
        <ul>
          <li style={{"--clr-tag":"#d3b19a;"}} class="branding">branding</li>
          <li style={{"--clr-tag":"#70b3b1;"}} class="packaging">packaging</li>
        </ul>
      </div>
      
    </div>
   </div>

       
    )
}
export default Cards;