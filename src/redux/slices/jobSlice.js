// jobSlice.js
import { createSlice } from "@reduxjs/toolkit";
// import jobsData from "/data/jobs"; // Adjust this path if necessary
import { jobsData } from "../../data/jobs";

const initialState = jobsData;

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
    editJob: (state, action) => {
      const { id, updatedJob } = action.payload;
      const index = state.findIndex((job) => job.id === id);
      if (index !== -1) {
        state[index] = updatedJob;
      }
    },
    deleteJob: (state, action) => {
      return state.filter((job) => job.id !== action.payload);
    },
    updateCandidateStatus: (state, action) => {
      const { jobId, candidateId, status } = action.payload;
      const job = state.find((job) => job.id === jobId);
      if (job) {
        const candidate = job.candidatesApplied.find(
          (cand) => cand.candidateId === candidateId
        );
        if (candidate) {
          candidate.status = status;
        }
      }
    },
    updateCandidateApplicationDate: (state, action) => {
      const { jobId, candidateId, applicationDate } = action.payload;
      const job = state.find((job) => job.id === jobId);
      if (job) {
        const candidate = job.candidatesApplied.find(
          (cand) => cand.candidateId === candidateId
        );
        if (candidate) {
          candidate.applicationDate = applicationDate;
        }
      }
    },
  },
});

export const {
  addJob,
  editJob,
  deleteJob,
  updateCandidateStatus,
  updateCandidateApplicationDate,
} = jobSlice.actions;

export default jobSlice.reducer;
