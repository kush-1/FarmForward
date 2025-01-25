import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-bold">Name</label>
          <input
            id="name"
            type="text"
            className="border rounded w-full px-4 py-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-bold">Email</label>
          <input
            id="email"
            type="email"
            className="border rounded w-full px-4 py-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-bold">Message</label>
          <textarea
            id="message"
            className="border rounded w-full px-4 py-2"
            rows="4"
          ></textarea>
        </div>
        <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
