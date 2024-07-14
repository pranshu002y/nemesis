import React, { useEffect, useState } from "react";
import axios from 'axios';
import Loading from "./Loading";
import Nav from "./Nav";

const Dress = () => {
  const [isLoader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const [records, setRecords] = useState(data);

  const getimage = async () => {
    try {
      const res = await axios.get('https://nemesis-backend.onrender.com/auth/dress/data', {
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

  return isLoader ? (
    <Loading />
  ) : (
    <div>
      <Nav onChange={Filter} />
      <div class="search-box">
        <input class="search-input" type="search" placeholder="Search..." onChange={Filter}/>
    </div>
            
      <section className="search">
      
      {/* <input type="text" id="search-bar" placeholder="What can I help you with today?" onChange={Filter}/> */}
       
        {records && records.map((e, index) => (
          
          <div className="container" key={index}>
            
            <div className="card">
              <div className="card-inner" style={{ "--clr": "#fff;" }}>
                <div className="box">
                  <div className="imgBox">
                    <img className="image-upload" src={e.Category} alt="Trust & Co." />
                  </div>
                  <div className="icon">
                    <a href={e.Link} className="iconBox"> 
                      <span className="material-symbols-outlined">
                       Link
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>{e.Title}</h3>
                <p>{e.Image}</p>
                <ul>
                  <li style={{ "--clr-tag": "#d3b19a;" }} className="branding">branding</li>
                  <li style={{ "--clr-tag": "#70b3b1;" }} className="packaging">packaging</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dress;
