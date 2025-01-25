import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchFarms = async () => {
  try {
    const response = await axios.get(`${API_URL}/farms`);
    return response.data;
  } catch (error) {
    console.error("Error fetching farms:", error);
    return [];
  }
};

export const fetchFarmDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/farms/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching farm details:", error);
    return null;
  }
};
