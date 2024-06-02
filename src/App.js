import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Modal from './Modal';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/shop" element={<Modal />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
