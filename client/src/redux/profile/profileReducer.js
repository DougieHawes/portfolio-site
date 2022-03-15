import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import profileService from "./profileService";

const initialState = {
  profile: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const postProfileItem = createAsyncThunk(
  "/postprofileitem",
  async (profileItemData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await profileService.postProfileItem(profileItemData, token);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProfile = createAsyncThunk(
  "/getprofile",
  async (_, thunkAPI) => {
    try {
      return await profileService.getProfile();
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const profileSlice = createSlice({
  name: "profileItem",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postProfileItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postProfileItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile.push(action.payload);
      })
      .addCase(postProfileItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;
