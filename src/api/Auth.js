// src/api/auth.js
const BASE_URL = import.meta.env.VITE_API_URL;

const request = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: { Accept: "application/json", ...options.headers },
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const error = new Error(data?.message || "Something went wrong");
    error.errors = data?.errors;
    throw error;
  }

  return data;
};

export const login = ({ email, password }) =>
  request("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

export const register = ({
  avatar,
  username,
  email,
  password,
  confirmPassword,
}) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("password_confirmation", confirmPassword);
  if (avatar) formData.append("avatar", avatar);

  return request("/register", { method: "POST", body: formData });
};
export const getCurrentUser = (token) =>
  request("/me", { headers: { Authorization: `Bearer ${token}` } });
