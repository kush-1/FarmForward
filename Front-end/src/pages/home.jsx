import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to FarmForward</h1>
      <p className="mb-6 text-gray-700">
        Helping connect farm owners with aspiring farmers to secure the future of agriculture.
      </p>
      <Link
        to="/farms"
        className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700"
      >
        Explore Farms
      </Link>
    </div>
  );
};

export default Home;
