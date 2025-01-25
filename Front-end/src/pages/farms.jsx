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
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Available Farms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
