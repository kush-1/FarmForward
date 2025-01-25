import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div>
        <h1>Welcome to FarmForward</h1>
        <p>
          Preserving the future of agriculture, one farm at a time.
        </p>
        <Link to="/about">
          <button>
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
