import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import workService from "./workService";

const initialState = {
  work: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const postWorkItem = createAsyncThunk(
  "/postworkitem",
  async (workItemData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await workService.postWorkItem(workItemData, token);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getWork = createAsyncThunk("/getwork", async (_, thunkAPI) => {
  try {
    return await workService.getWork();
  } catch (e) {
    const message =
      (e.response && e.response.data && e.response.data.message) ||
      e.message ||
      e.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getWorkItem = createAsyncThunk(
  "/getworkitem",
  async (id, thunkAPI) => {
    try {
      return await workService.getWorkItem(id);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const workSlice = createSlice({
  name: "workItem",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postWorkItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postWorkItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.work.push(action.payload);
      })
      .addCase(postWorkItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getWork.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWork.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.work = action.payload;
      })
      .addCase(getWork.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getWorkItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWorkItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.work = action.payload;
      })
      .addCase(getWorkItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = workSlice.actions;
export default workSlice.reducer;
