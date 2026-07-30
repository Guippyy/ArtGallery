import Navbar from "../components/Navbar";
import SketchesGallery from "../components/SketchesGallery";

export default function Sketches() {
  return (
    <>
      <Navbar />
      <h1>Sketches</h1>
      <p>My collection of sketches.</p>

      <SketchesGallery/>
    </>
  );
}