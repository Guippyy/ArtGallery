import { useParams } from "react-router-dom";
import { artworks } from "../data/artworks";
import "./Painting.css"

export default function Painting() {
  const { id } = useParams();

  const painting = artworks.find(
    (art) => art.id === Number(id)
  );

  if (!painting) {
    return <h1>Painting not found</h1>;
  }

  return (
    <div>
      <h1>{painting.title}</h1>
      <p>{painting.artist}</p>
      <img src={painting.image} alt={painting.title} className="painting-image" />
    </div>
  );
}