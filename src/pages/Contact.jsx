import React from "react";
import ThanksGivingDessert from "../assets/thanksgivingdessert.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ThanksGivingDessert})` }}
      ></div>
      <div className="rightSide">
        <h1> CONTACT US </h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" required />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" required />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"  
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;