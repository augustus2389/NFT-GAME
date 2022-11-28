import axiosClient from "./axiosClient";

const productApi = {
  getProducts(tag) {
    const params = {
      tag: tag,
    };
    const url = "/products";
    return axiosClient.get(url, { params });
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
  getProductByPrice(value) {
    const url = `products?_sort=price&_order=${value}`;
    return axiosClient.get(url);
  },
  getProductBySort(value) {
    const url = `products?${value}`;
    return axiosClient.get(url);
  },
};
export default productApi;
