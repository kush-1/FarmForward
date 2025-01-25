import React, { useEffect, useState } from "react";
import FarmCard from "../components/FarmCard";
import { fetchFarms } from "../services/api";

const Farms = () => {
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    const getFarms = async () => {
      const data = await fetchFarms();
      setFarms(data);
    };
    getFarms();
  }, []);

  return (
    <div>
      <h1>Available Farms</h1>
      <div>
        {farms.length > 0 ? (
          farms.map((farm) => <FarmCard key={farm.id} farm={farm} />)
        ) : (
          <p>Loading farms...</p>
        )}
      </div>
    </div>
  );
};

export default Farms;
