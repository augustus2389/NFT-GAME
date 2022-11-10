import axiosClient from "./axiosClient";

const productApi = {
  getProducts() {
    const url = "/products";
    return axiosClient.get(url);
  },
  getProductById(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getProductBySeller() {
    const url = `/products?tag=Seller`;
    return axiosClient.get(url);
  },
  getProductByMost() {
    const url = `/products?tag=Most`;
    return axiosClient.get(url);
  },
  getProductByNew() {
    const url = `/products?tag=New`;
    return axiosClient.get(url);
  },
};
export default productApi;
