import axios from "axios";

export const usersService = axios.create({
  baseURL: "https://dummyjson.com/users",
  headers: {
    Accept: "application/json",
  },
});
