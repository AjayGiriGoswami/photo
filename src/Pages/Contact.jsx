import React, { useState } from "react";
import axios from "axios"; // Import Axios
import "./Style.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await axios.post("https://formcarry.com/s/sEhJ2cWE1Oh", {
        name,
        email,
        message,
      });

      console.log(response);

      if (response.data.code === 200) {
        alert("We received your submission, thank you!");
        // Optionally reset the form fields
        setName("");
        setEmail("");
        setMessage("");
      } else if (response.data.code === 422) {
        // Field validation failed
        setError(response.data.message);
      } else {
        // Other error from formcarry
        setError(response.data.message);
      }
    } catch (error) {
      // Request related error
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="contact-flex">
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Hatod</div>
              <div className="text-two">Indore Madhya Pradesh</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+91 8602035235</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">codinglab@gmail.com</div>
              <div className="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of queries related to my
              tutorial, you can send me a message from here. It's my pleasure to
              help you.
            </p>
            <form onSubmit={onSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Your first and last name"
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="john@doe.com"
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  rows="5"
                  cols="30"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              <button className="button" type="submit">
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
