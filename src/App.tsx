import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home'
import './App.css'
import Care  from "./Pages/Care";
import Children from "./Pages/Children";
import Perfumes from "./Pages/Perfumes";
import MakeUp from "./Pages/MakeUp";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/care" element={<Care />} />
      <Route path="/home" element={<Home />} />
      <Route path="/children" element={<Children />} />
      <Route path="/perfumes" element={<Perfumes />} />
      <Route path="/make-up" element={<MakeUp />} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
