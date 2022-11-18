import axiosClient from "./axiosClient";

const orderApi = {
  getCart() {
    const url = `/orders`;
    return axiosClient.get(url);
  },
};
export default orderApi;
