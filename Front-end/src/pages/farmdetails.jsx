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
          <h1>{farm.name}</h1>
          <p>{farm.description}</p>
          <p>Location: {farm.location}</p>
          <p>Size: {farm.size} acres</p>
        </>
      ) : (
        <p>Loading farm details...</p>
      )}
    </div>
  );
};

export default FarmDetails;
