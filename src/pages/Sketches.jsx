// import Navbar from "../components/Navbar";
// import SketchesGallery from "../components/SketchesGallery";

// export default function Sketches() {
//   return (
//     <>
//       <Navbar />
//       <h1>Sketches</h1>
//       <p>My collection of sketches.</p>

//       <SketchesGallery/>
//     </>
//   );
// }


import Navbar from "../components/Navbar";
import SketchesGallery from "../components/SketchesGallery";

export default function Sketches() {
  return (
    <>
      <Navbar />
      <section className="page" style={{ paddingBottom: 0 }}>
        <h1>Sketches</h1>
        <p style={{ maxWidth: 480, margin: "0 auto" }}>My collection of sketches.</p>
      </section>

      <SketchesGallery />
    </>
  );
}
