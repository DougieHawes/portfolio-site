import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import skillsService from "./skillsService";

const initialState = {
  skills: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const postSkillsItem = createAsyncThunk(
  "/postskillsitem",
  async (skillsItemData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await skillsService.postSkillsItem(skillsItemData, token);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSkills = createAsyncThunk("/getskills", async (_, thunkAPI) => {
  try {
    return await skillsService.getSkills();
  } catch (e) {
    const message =
      (e.response && e.response.data && e.response.data.message) ||
      e.message ||
      e.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getSkillsItemm = createAsyncThunk("/", async (_, thunkAPI) => {
  try {
  } catch (e) {}
});

export const skillsSlice = createSlice({
  name: "skillsItem",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postSkillsItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postSkillsItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.skills.push(action.payload);
      })
      .addCase(postSkillsItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSkills.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSkills.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.skills = action.payload;
      })
      .addCase(getSkills.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = skillsSlice.actions;
export default skillsSlice.reducer;
