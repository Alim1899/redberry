// BASE URL FOR AL REQUEST
const BASE_URL = import.meta.env.VITE_API_URL;
// REQUEST FOR ALL METHOD
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
// LOGIN
export const login = ({ email, password }) =>
  request("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
// REGISTER
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
// GET CURRENT USER DETAILS
export const getCurrentUser = (token) =>
  request("/me", { headers: { Authorization: `Bearer ${token}` } });
// LOG OUT BY SERVER SIDE
export const logout = (token) =>
  request("/logout", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });

  // SAVE UPDATED USER DATA
  export const updateProfile = (
  token,
  { fullName, mobileNumber, dateOfBirth, preferredVenueId },
) => {
  const formData = new FormData();
  formData.append("fullName", fullName);
  formData.append("mobileNumber", mobileNumber); // სივრცეებს სერვერი თავად აშორებს
  formData.append("dateOfBirth", dateOfBirth); // yyyy-mm-dd
  if (preferredVenueId) formData.append("preferredVenueId", preferredVenueId);

  // Content-Type-ს არ ვწერთ, ბრაუზერი boundary-ით დააყენებს
  return request("/profile", {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
};
