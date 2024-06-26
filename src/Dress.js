import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Loading from "./Loading";
import Nav from "./Nav";
const Dress = ()=>{
  const [isLoader, setLoader] =useState(true);

    const [data, setData] = useState([]);
    const getimage = async () => {
        try {
          const res = await axios.get('https://nemesis-backend.onrender.com/auth/dress/data', {
            headers: {
              "Content-Type": "application/json",
            },
          });
          setData(res.data);
          setLoader(false);
          console.log(data,"bsdka")
          
        } catch (err) {
          console.log(err);
          setLoader(false);
        }
      };
    
      useEffect(() => {
        getimage();
      }, []);

      return isLoader ? (
        <Loading />
      ) : (
        <div>
            <Nav/>
            <section>
    {data && data.map((e)=>(
 <div class="container">
 <div class="card">
<div class="card-inner" style={{"--clr":"#fff;"}}>
 <div class="box">
   <div class="imgBox">
     <img className="image-upload" src={e.Category} alt="Trust & Co."/>
   </div>
   <div class="icon">
     <a href={e.Link} class="iconBox"> 
     <span class="material-symbols-outlined">
      Open It
       </span></a>
   </div>
 </div>
</div>
<div class="content">
 <h3>{e.Title}</h3>
 <p>{e.Image}</p>
 <ul>
   <li style={{"--clr-tag":"#d3b19a;"}} class="branding">branding</li>
   <li style={{"--clr-tag":"#70b3b1;"}} class="packaging">packaging</li>
 </ul>
</div>

</div>
     </div> ))}
     </section>
        </div>
            )
}
export default Dress;