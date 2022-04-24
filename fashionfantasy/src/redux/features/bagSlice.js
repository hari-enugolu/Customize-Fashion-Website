import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createBag = createAsyncThunk(
  "bag/createBag",
  async ({ bagData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createBag(bagData);
      toast.success("Bag Added Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getBags = createAsyncThunk(
  "bag/getBags",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getBags();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getBag = createAsyncThunk(
  "bag/getBag",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getBag(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const searchBags = createAsyncThunk(
  "bag/searchBags",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await api.getBagsBySearch(searchQuery);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
// export const filterBags = createAsyncThunk(
//   "bag/filterBags",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await api.filterBags();
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const bagSlice = createSlice({
  name: "bag",
  initialState: {
    bag: {},
    bags: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createBag.pending]: (state, action) => {
      state.loading = true;
    },
    [createBag.fulfilled]: (state, action) => {
      state.loading = false;
      state.bags = [action.payload];
    },
    [createBag.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getBags.pending]: (state, action) => {
      state.loading = true;
    },
    [getBags.fulfilled]: (state, action) => {
      state.loading = false;
      state.bags = action.payload;
    },
    [getBags.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getBag.pending]: (state, action) => {
      state.loading = true;
    },
    [getBag.fulfilled]: (state, action) => {
      state.loading = false;
      state.bag = action.payload;
    },
    [getBag.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [searchBags.pending]: (state, action) => {
      state.loading = true;
    },
    [searchBags.fulfilled]: (state, action) => {
      state.loading = false;
      state.bag = action.payload;
    },
    [searchBags.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default bagSlice.reducer;
