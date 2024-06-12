import React,{useState,useEffect} from "react";
import "./Cards.css"
import Cards from "./Cards";

const Container = () =>{
    const [reels,setReels] = useState();
    useEffect(()=>{ 
        fetch("https://api.unsplash.com/photos/?client_id=lCRj-Mv0lFa6C2e5D1KntRtPIviTnTt1en2VCePfzU8")
        .then(r =>r.json())
        .then(post =>setReels(post))
        console.log(reels)
    },[]);
    return(
        <section> 
            {reels && reels.map((e)=>{
            return(
        <div class="container">
     
    <div class="card">
      <div class="card-inner" style={{"--clr":"#fff;"}}>
        <div class="box">
          <div class="imgBox">
            <img src={e.urls.regular} alt="Trust & Co."/>
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
            </div>)})}
            </section>

    )
}
export default Container;