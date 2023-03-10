import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    Accept: "application/json",
    "content-Type": "application/json",
  },
});
