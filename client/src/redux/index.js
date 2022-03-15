import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authReducer";
import blogReducer from "./blog/blogReducer";
import profileReducer from "./profile/profileReducer";
import skillsReducer from "./skills/skillsReducer";
import workReducer from "./work/workReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    profile: profileReducer,
    skills: skillsReducer,
    work: workReducer,
  },
});
