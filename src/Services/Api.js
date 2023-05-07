import axios from "axios";

const Api = axios.create({
  baseURL: `https://brasilapi.com.br/api/`,
  headers: {
    "Content-Type": "application/json",
  },
});
export default Api;