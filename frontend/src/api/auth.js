import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Register function with better error handling
export const register = async ({ name, email, password, confirmPassword }) => {
  try {
    const res = await API.post("/auth/register", {
      name,
      email,
      password,
      confirmPassword,
    });
    return res.data;
  } catch (err) {
    // Throw the full error response so the frontend can display it properly
    throw err;
  }
};

// Login function
export const login = ({ email, password }) =>
  API.post("/auth/login", { email, password });
