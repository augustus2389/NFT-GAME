import axiosClient from "./axiosClient";

export const authApi = {
  getAuth() {
    const url = `/auths`;
    return axiosClient.get(url);
  },
};
