import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import blogService from "./blogService";

const initialState = {
  blog: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const postBlogItem = createAsyncThunk(
  "/postblogitem",
  async (blogItemData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await blogService.postBlogItem(blogItemData, token);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getBlog = createAsyncThunk("/getblog", async (_, thunkAPI) => {
  try {
    return await blogService.getBlog();
  } catch (e) {
    const message =
      (e.response && e.response.data && e.response.data.message) ||
      e.message ||
      e.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getBlogItem = createAsyncThunk(
  "/getblogitem",
  async (id, thunkAPI) => {
    try {
      return await blogService.getBlogItem(id);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const blogSlice = createSlice({
  name: "blogItem",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postBlogItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBlogItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blog.push(action.payload);
      })
      .addCase(postBlogItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBlogItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(getBlogItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;
