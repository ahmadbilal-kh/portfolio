import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="section-glow-end" data-aos="zoom-in"></div>
      <section className="contact" id="contact">
        <h2 className="section-title">Contact Me</h2>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
