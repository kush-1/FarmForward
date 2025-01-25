import React from "react";

const FarmCard = ({ farm }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold">{farm.name}</h2>
      <p className="text-sm text-gray-600">{farm.location}</p>
      <p className="mt-2">{farm.description}</p>
      <button className="bg-green-600 text-white py-1 px-4 mt-4 rounded hover:bg-green-700">
        View Details
      </button>
    </div>
  );
};

export default FarmCard;
