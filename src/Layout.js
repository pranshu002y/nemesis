import React from "react";
import Nav from './Nav';
import Nemesis from './Nemesis';
import Container from './Container';
import Carousel from "./Carousel";
import About from "./About";
const Layout = ()=>{
    return(
        <div>
        <Nav/>
        <Nemesis/>
        <About/>
        <Carousel/>
        <Container/>
         </div>
    )
}
export default Layout;