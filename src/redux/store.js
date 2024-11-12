import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice";
import assignmentReducer from "./slices/assignmentSlice";
import candidateReducer from "./slices/candidatesSlice"; // Import candidatesSlice

const store = configureStore({
  reducer: {
    jobs: jobReducer,
    assignments: assignmentReducer,
    candidates: candidateReducer, // Add candidates slice to the store
  },
});

export default store;
