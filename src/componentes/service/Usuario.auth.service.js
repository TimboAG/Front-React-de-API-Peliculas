import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL_USER = "http://localhost:8081/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL_USER);
};

const getUserBoard = () => {
  return axios.get(API_URL_USER + "user", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL_USER + "admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
};

export default UserService;
