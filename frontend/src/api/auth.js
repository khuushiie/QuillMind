// src/api/auth.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // your backend server URL
});

// Register function - sends correct fields as backend expects
export const register = ({ name, email, password, confirmPassword }) =>
  API.post("/auth/register", { name, email, password, confirmPassword });

// Login function
export const login = ({ email, password }) =>
  API.post("/auth/login", { email, password });