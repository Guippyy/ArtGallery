// import { useParams } from "react-router-dom";
// import { artworks } from "../data/artworks";
// import "./Painting.css"

// export default function Painting() {
//   const { id } = useParams();

//   const painting = artworks.find(
//     (art) => art.id === Number(id)
//   );

//   if (!painting) {
//     return <h1>Painting not found</h1>;
//   }

//   return (
//     <div>
//       <h1>{painting.title}</h1>
//       <p>{painting.artist}</p>
//       <img src={painting.image} alt={painting.title} className="painting-image" />
//     </div>
//   );
// }


import { useParams, Link } from "react-router-dom";
import { artworks } from "../data/artworks";
import Navbar from "../components/Navbar";
import "./Painting.css";

export default function Painting() {
  const { id } = useParams();

  const painting = artworks.find(
    (art) => art.id === Number(id)
  );

  if (!painting) {
    return (
      <>
        <Navbar />
        <div className="painting-page">
          <h1>Painting not found</h1>
          <Link className="back-link" to="/ArtGallery/">&larr; Back to gallery</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="painting-page">
        <Link className="back-link" to="/ArtGallery/">&larr; Back to gallery</Link>

        <img src={painting.image} alt={painting.title} className="painting-image" />

        <div className="painting-info">
          <h1>{painting.title}</h1>
          <p>{painting.artist}{painting.year ? ` \u00b7 ${painting.year}` : ""}</p>
        </div>
      </div>
    </>
  );
}
