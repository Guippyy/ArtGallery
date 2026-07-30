import ArtworkCard from "./ArtworkCard";
import { artworks } from "../data/artworks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Painting from "../pages/Painting";
import { Navigate } from 'react-router-dom';

export default function Gallery() {

  const navigate = useNavigate();
  
  function shoot(id) {
    navigate(`/paintings/${id}`);
  }


  return (
    <div className="gallery">
      {artworks.map(art => (
        <ArtworkCard
          key={art.id}
          artwork={art}
          onClick={() => shoot(art.id)}
        />
      ))}
    </div>
  );
}