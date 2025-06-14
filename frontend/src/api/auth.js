import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

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
    throw err;
  }
};

export const login = async ({ email, password }) => {
  const res = await API.post("/auth/login", { email, password });
  return res.data;
};

