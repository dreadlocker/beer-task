import axios from "axios";

const apiClient = axios.create({ 
  baseURL: "https://api.punkapi.com/v2/",
  withCredentials: false,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getBeers() {
    return apiClient.get("/beers");
  }
};