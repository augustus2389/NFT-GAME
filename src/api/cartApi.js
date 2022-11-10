import axiosClient from "./axiosClient";

const cartApi = {
  getCart() {
    const url = `/cart`;
    return axiosClient.get(url);
  },
};
export default cartApi;
