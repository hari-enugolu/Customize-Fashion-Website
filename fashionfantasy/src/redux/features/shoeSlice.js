import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createShoe = createAsyncThunk(
  "shoe/createShoe",
  async ({ shoeData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createShoe(shoeData);
      toast.success("Shoe Added Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getShoes = createAsyncThunk(
  "shoe/getShoes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getShoes();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getShoe = createAsyncThunk(
  "shoe/getShoe",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await api.getShoe(_id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const shoeSlice = createSlice({
  name: "shoe",
  initialState: {
    shoe: {},
    shoes: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createShoe.pending]: (state, action) => {
      state.loading = true;
    },
    [createShoe.fulfilled]: (state, action) => {
      state.loading = false;
      state.shoes = [action.payload];
    },
    [createShoe.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getShoes.pending]: (state, action) => {
      state.loading = true;
    },
    [getShoes.fulfilled]: (state, action) => {
      state.loading = false;
      state.shoes = action.payload;
    },
    [getShoes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getShoe.pending]: (state, action) => {
      state.loading = true;
    },
    [getShoe.fulfilled]: (state, action) => {
      state.loading = false;
      state.shoes = action.payload;
    },
    [getShoe.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default shoeSlice.reducer;
