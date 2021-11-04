import axios from "axios";

export const baseURL = "https://ferrari219.github.io/busker/frontend/src/data/";

const Api = axios.create({ baseURL });

export default Api;
export const eventApi = {
  event: () => Api.get("event.json"),
};
