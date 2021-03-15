import axios from "axios";
import http from "../http-common";
const API_URL = "http://localhost:8080/api/auth/";

const register = data => {
//   return axios.post(API_URL + "signup", {
//     username,
//     email,
//     password,
//   });
    return http.post("/auth/signup", data);
};

const login = (username, password) => {
//   return axios
//     .post(API_URL + "signin", {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
    return http.post("/auth/signin", data).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};