import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="py-10 px-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to FarmForward</h1>
        <p className="text-lg text-gray-700 mb-6">
          Preserving the future of agriculture, one farm at a time.
        </p>
        <Link to="/about">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
