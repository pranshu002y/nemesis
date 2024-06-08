import './App.css';
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Movies from "./Movies";
import Dress from "./Dress";
import Games from "./Games";
function App() {
  return (
    <Auth0Provider
    domain="dev-znpkkdznh44b4pbj.us.auth0.com"
    clientId="ZqcH7V2C9Qi7d5t8aJDOxVDyYxhA02F4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/dress" element={<Dress/>} />
      <Route path="/games" element={<Games />} />
    </Routes>
  </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
