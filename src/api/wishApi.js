import axiosClient from "./axiosClient";

export const wishApi = {
  getWish() {
    const url = `/wishlist`;
    return axiosClient.get(url);
  },
};
