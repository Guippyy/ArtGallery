// import Navbar from "../components/Navbar";

// export default function About(){
//     return(
//     <>
//     <Navbar/>
//     <p>Totus tuus.</p>

//     <img src="/ArtGallery/images/cat_moths_funny_216798_1920x1080.jpg"></img>
//     </>
//     )
// }

import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="page">
        <h1>About</h1>
        <p style={{ maxWidth: 520, margin: "0 auto 40px" }}>Totus tuus.</p>

        <img
          src="/ArtGallery/images/cat_moths_funny_216798_1920x1080.jpg"
          alt="A cat watching moths at night"
          style={{
            maxWidth: "min(90vw, 900px)",
            width: "100%",
            borderRadius: 6,
            border: "1px solid var(--border)",
          }}
        />
      </section>
    </>
  );
}
