import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFarmDetails } from "../services/api";

const FarmDetails = () => {
  const { id } = useParams();
  const [farm, setFarm] = useState(null);

  useEffect(() => {
    const getFarmDetails = async () => {
      const data = await fetchFarmDetails(id);
      setFarm(data);
    };
    getFarmDetails();
  }, [id]);

  return (
    <div className="container mx-auto py-8">
      {farm ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{farm.name}</h1>
          <p className="text-gray-700 mb-6">{farm.description}</p>
          <p className="font-bold">Location: {farm.location}</p>
          <p>Size: {farm.size} acres</p>
        </>
      ) : (
        <p>Loading farm details...</p>
      )}
    </div>
  );
};

export default FarmDetails;
