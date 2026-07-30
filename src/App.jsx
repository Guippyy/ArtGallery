import './App.css'

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sketches from "./pages/Sketches";
import About from "./pages/About";
import Painting from './pages/Painting';

export default function App() {
  return (
    <Routes>
      <Route path="/ArtGallery/" element={<Home />} />
      <Route path="/ArtGallery/sketches" element={<Sketches />} />
      <Route path="/ArtGallery/about" element={<About />} />
      <Route path="/ArtGallery/paintings/:id" element={<Painting />} />
    </Routes>
  );
}