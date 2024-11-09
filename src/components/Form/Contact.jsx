import React from "react";

const ContactForm = () => {
  return (
    <form>
      <h2>Contact Us</h2>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Message:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
