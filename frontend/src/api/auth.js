// src/api/auth.js
import axios from "axios";
const API_URL = import.meta.env.VITE_APP_API_URL;

const API = axios.create({
  baseURL: `${API_URL}`, // your backend server URL

const API = axios.create({
  baseURL: "http://localhost:5000/api", 
});

// Register function - sends correct fields as backend expects
export const register = ({ name, email, password, confirmPassword }) =>
  API.post("/auth/register", { name, email, password, confirmPassword });

// Login function
export const login = ({ email, password }) =>
  API.post("/auth/login", { email, password });