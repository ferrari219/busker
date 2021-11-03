import axios from "axios";

export const baseURL = "https://ferrari219.github.io/data/";

const Api = axios.create({ baseURL });

export default Api;
export const profileApi = {
  iam: () => Api.get("profile/iam.json"),
};
