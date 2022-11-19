import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../api/axiosClient";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await axiosClient.get("/products");
    return response;
  }
);
export const fetchProductBySearch = createAsyncThunk(
  "product/fetchProductBySearch",
  async (data) => {
    const response = await axiosClient.get(`/products?q=${data}`);
    return response;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: true,
    products: [],
    filterList: [],
  },
  reducers: {
    setFilter(state, action) {
      state.action = action.payload;
    },
    setProductListNew(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchProductBySearch.fulfilled, (state, action) => {
      const productFilter = action.payload.filter((product) => {
        if (state.filterList.length === 0) {
          return true;
        }
        return product.type.every((t) => {
          if (state.filterList.some((fl) => fl === t)) {
            return true;
          }
          return false;
        });
        // const filter = []
        // filter = state.products.filter(item=> item.title = )
      });
      state.products = productFilter;
    });
  },
});

export const { setFilter, setProductListNew } = productSlice.actions;

export default productSlice.reducer;
