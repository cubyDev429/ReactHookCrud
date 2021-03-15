// import axios from "axios";
import authHeader from "./auth-header";
import http from "../http-common";

// const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
//   return axios.get(API_URL + "all");
  return http.get("/all");
};

const getUserBoard = () => {
//   return axios.get(API_URL + "user", { headers: authHeader() });
  return http.get("/test/user", { headers: authHeader() });
};


const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
  return http.get("/test/mod", { headers: authHeader() });
};

const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
  return http.get("/test/admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};