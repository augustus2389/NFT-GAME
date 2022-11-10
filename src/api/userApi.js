import axiosClient from "./axiosClient";

export const userApi = {
  getUser() {
    const url = `/users`;
    return axiosClient.get(url);
  },
};
