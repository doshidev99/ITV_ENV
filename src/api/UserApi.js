import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token") || "";
  if (token) {
    config.headers.Authorization = `Bearer ` + token;
  }

  return config;
});

class UserApi {
  static login = (data) => {
    return axios.post(`${URL}/client/auth/login`, data);
  };

  static register = (data) => {
    return axios.post(`${URL}/client/auth/register`, data);
  };

  static getAllProject = () => {
    return axios.get(`${URL}/client/projects`);
  };
}

export default UserApi;
