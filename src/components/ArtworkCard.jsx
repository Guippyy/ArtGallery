export default function ArtworkCard({ artwork, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={artwork.image} alt={artwork.title} />

      <div className="overlay">
        <h2>{artwork.title}</h2>
        <p>{artwork.year}</p>
      </div>
    </div>
  );
}