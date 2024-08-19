import React from "react";
import "./Gallery.css";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="photo">
        <img src={p1} alt="" />
        <div className="caption"></div>
      </div>
      <div className="photo">
        <img src={p2} alt="" />
      </div>
      <div className="photo">
        <img src={p3} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
