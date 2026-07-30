import ArtworkCard from "./ArtworkCard";
import {sketches} from "../data/sketches";

export default function SketchesGallery() {
  return (
    <div className="gallery">
      {sketches.map(art => (
        <ArtworkCard
          key={art.id}
          artwork={art}
        />
      ))}
    </div>
  );
}