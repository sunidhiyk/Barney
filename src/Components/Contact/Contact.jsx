import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1636832b-a633-4d8d-9398-df96a6f930d0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Barney Birthday wishes ! <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out to Barney on his special or should i say Legen
          wait fot it dary Day. let's hope he has an AWESOME time with his
          bestfriends Ted , Lily, Marshall and Robin and not to forget his
          lovely daughter.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            Contact @BarneyStinson.dev
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +123-456-789
          </li>
          <li>
            {" "}
            <img src={location_icon} />
            how i met your mother, New York City
            <br />
            NIT Silchar
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="enter your message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
