import axios from "axios";

export const baseURL = "https://ferrari219.github.io/data/";

const Api = axios.create({ baseURL: baseURL });

export const nameApi = {
  iam: () => Api.get("profile/iam.json"),
};
