import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Movies from "./Movies";
import Dress from "./Dress";
import Games from "./Games";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/dress" element={<Dress/>} />
      <Route path="/games" element={<Games />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
