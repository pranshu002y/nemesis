import React, { useEffect, useState } from "react";
import axios from 'axios';

import Nav from "./Nav";
import Loading from "./Loading";

const Movies = ()=>{
    const [data, setData] = useState([]);
    const [records, setRecords] = useState(data);
    const [isLoader, setLoader] =useState(true);

    const getimage = async () => {
        try {
          const res = await axios.get('https://nemesis-backend.onrender.com/auth/movie/data', {
            headers: {
              "Content-Type": "application/json",
            },
          });
          setData(res.data);
          setRecords(res.data);
          setLoader(false);
          console.log(res.data, "bsdka");
        } catch (err) {
          console.log(err);
          setLoader(false);
        }
      };
    
      useEffect(() => {
        getimage();
      }, []);

      const Filter = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setRecords(data.filter(f =>
          (f.Title && f.Title.toLowerCase().includes(searchTerm)) ||
          (f.Category && f.Category.toLowerCase().includes(searchTerm)) ||
          (f.Shirts && f.Shirts.toLowerCase().includes(searchTerm)) ||
          (f.Men && f.Men.toLowerCase().includes(searchTerm)) ||
          (f.Women && f.Women.toLowerCase().includes(searchTerm))
        ));
      };

      return isLoader ? (<Loading/>):(
        <div>
            <Nav/>
            <div class="search-box">
            <input class="search-input" type="search" placeholder="Search..." onChange={Filter}/>
    </div>
            
 <section>
 {records && records.map((e, index) => (
          
          <div className="container" key={index}>
            
 <div className="card">
<div className="card-inner" style={{"--clr":"#fff;"}}>
 <div className="box">
   <div className="imgBox">
     <img classNameName="image-upload" src={e.Image} alt="Trust & Co."/>
   </div>
   <div className="icon">
     <a href={e.Link} className="iconBox"> 
     <span className="material-symbols-outlined">
    Link
       </span></a>
   </div>
 </div>
</div>
<div className="content">
 <h3>{e.Title}</h3>
 <p>{e.Category}</p>
 <ul>
   <li style={{"--clr-tag":"#d3b19a;"}} className="branding">branding</li>
   <li style={{"--clr-tag":"#70b3b1;"}} className="packaging">packaging</li>
 </ul>
</div>

</div>
     </div> ))}
     </section>
     
          
           
        </div>
            )
}
export default Movies;