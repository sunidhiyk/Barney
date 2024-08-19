import React, { useRef } from "react";
import "./PhotoGallery.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import a1 from "../../assets/a1.jpg";
import a2 from "../../assets/a2.jpg";
import a3 from "../../assets/a3.jpg";
import a4 from "../../assets/a4.jpg";
import a5 from "../../assets/a5.jpg";
import a6 from "../../assets/a6.jpg";
import a7 from "../../assets/a7.jpg";

const PhotoGallery = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -70) {
      tx -= 15;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 15;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="PhotoGallery">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="a1">
                <img src={a1} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="a2">
                <img src={a2} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="a3">
                <img src={a3} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="a4">
                <img src={a4} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="a5">
                <img src={a5} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="a6">
                <img src={a6} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="a7">
                <img src={a7} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PhotoGallery;
