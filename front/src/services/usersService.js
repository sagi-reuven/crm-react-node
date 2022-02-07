import httpService from "./httpService";
import { apiUrl } from "../config.json";
import Jwt from "jwt-decode";

const TOKEN_KEY = "token";

export function createUser(user) {
  return httpService.post(`${apiUrl}/users`, user);
}

export async function login(email, password) {
  const {
    data: { token },
  } = await httpService.post(`${apiUrl}/auth`, { email, password });
  localStorage.setItem(TOKEN_KEY, token);
}

export async function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(TOKEN_KEY);
    return Jwt(jwt);
  } catch {
    return null;
  }
}
export function logoutUser() {
  return localStorage.removeItem(TOKEN_KEY);
}

const userService = {
  createUser,
  login,
  getCurrentUser,
  logoutUser,
};
export default userService;
