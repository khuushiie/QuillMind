import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchAIResponse = async (feature, text) => {
  try {
    const res = await axios.post(`${API}/ai`, {

export const fetchAIResponse = async (feature, text) => {
  try {
    const res = await axios.post("http://localhost:5000/api/ai", {
      feature,
      text,
    });

    return res.data.result;
  } catch (err) {
    console.error("AI API Error:", err);
    throw new Error("Failed to get AI response.");
  }
};