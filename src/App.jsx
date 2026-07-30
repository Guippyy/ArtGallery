import './App.css'

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sketches from "./pages/Sketches";
import About from "./pages/About";
import Painting from './pages/Painting';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sketches" element={<Sketches />} />
      <Route path="/about" element={<About />} />
      <Route path="/paintings/:id" element={<Painting />} />
    </Routes>
  );
}