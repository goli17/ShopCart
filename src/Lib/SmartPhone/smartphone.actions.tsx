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
      return response.data;
    } catch (err: any) {
      toastErrorMessage(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err?.response?.data);
    }
  }
);
export const getSmartPhone = createAsyncThunk(
  "product/getById",
  async (_, thunkApi) => {
    try {
      const response = await axiosInstance.get(
        `/products/category/smartphones`
      );
      return response.data;
    } catch (err: any) {
      toastErrorMessage(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err?.response?.data);
    }
  }
);

export const getGroceries = createAsyncThunk(
  "product/getById",
  async (_, thunkApi) => {
    try {
      const response = await axiosInstance.get(`/products/category/groceries`);
      return response.data;
    } catch (err: any) {
      toastErrorMessage(err?.response?.data?.message);
      return thunkApi.rejectWithValue(err?.response?.data);
    }
  }
);
