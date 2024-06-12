import React from "react";
import Nav from './Nav';
import Nemesis from './Nemesis';
import Container from './Container';
import Carousel from "./Carousel";
const Layout = ()=>{
    return(
        <div>
        <Nav/>
        <Nemesis/>
        <Carousel/>
        <Container/>
         </div>
    )
}
export default Layout;