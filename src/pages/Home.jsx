// import Gallery from "../components/Gallary";
// import Navbar from "../components/Navbar";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Gallery />
//     </>
//   );
// }

import Gallery from "../components/Gallary";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>devotee's Art Gallery</h1>
        <p className="hero-sub">Retrouvez vous dans l'art.</p>
      </section>
      <Gallery />
    </>
  );
}
