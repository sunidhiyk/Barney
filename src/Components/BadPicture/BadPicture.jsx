import React from "react";
import "./BadPicture.css";
import b3 from "../../assets/b3.jpg";

const BadPicture = () => {
  return (
    <div className="BadPicture">
      <div className="left">
        <img src={b3} alt="" />
      </div>
      <div className="right">
        <p>
          {" "}
          we got you on this one Barney !! <br />
          But still how do you manage you click perfect pictures all the time!!
        </p>
      </div>
    </div>
  );
};

export default BadPicture;
