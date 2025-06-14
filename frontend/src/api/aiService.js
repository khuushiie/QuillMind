import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

export const fetchAIResponse = async (feature, text) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/ai`, {
      feature,
      text,
    });

    return res.data.result;
  } catch (err) {
    console.error("AI API Error:", err);
    throw new Error("Failed to get AI response.");
  }
};

