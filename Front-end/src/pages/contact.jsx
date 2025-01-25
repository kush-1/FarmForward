import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Name</label>
          <input
            id="name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
          ></textarea>
        </div>
        <button>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
