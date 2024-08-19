import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Gallery from "./Components/Gallery/Gallery";
import Title from "./Components/Gallery/Title/Title";
import BadPicture from "./Components/badPicture/BadPicture";
import PhotoGallery from "./Components/PhotoGallery/PhotoGallery";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero></Hero>
      <div className="container">
        <Title title="Barney's Legendary Moments"></Title>
        <Gallery></Gallery>
        <Title title="Your Only Bad Pic :)"></Title>
        <BadPicture></BadPicture>
        <Title title="Photo gallery !"></Title>
        <PhotoGallery></PhotoGallery>
        <Title title="Get in Touch"></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
