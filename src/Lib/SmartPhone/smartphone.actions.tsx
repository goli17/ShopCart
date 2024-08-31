import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axois";
import { toastErrorMessage } from "@/util/toster-helper";

export const getAllProduct = createAsyncThunk(
  "product/allproduts",
  async (_, thunkApi) => {
    try {
      const response = await axiosInstance.get(`/products`);
      return response.data;
    } catch (err: any) {
      toastErrorMessage(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err?.response?.data);
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getById",
  async (id: any, thunkApi) => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      console.log("->>", response.data);
      return response.data;
    } catch (err: any) {
      toastErrorMessage(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err?.response?.data);
    }
  }
);
