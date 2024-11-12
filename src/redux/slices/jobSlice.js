// jobSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "Develop user interfaces for web applications with modern frameworks such as React and Vue. Collaborate with backend developers to integrate APIs and create seamless experiences for users.",
    candidatesApplied: [
      { candidateId: 1, status: "Under Review", applicationDate: "2024-11-01" },
      {
        candidateId: 2,
        status: "Interview Scheduled",
        applicationDate: "2024-11-02",
      },
      {
        candidateId: 3,
        status: "Interview Scheduled",
        applicationDate: "2024-11-03",
      },
      { candidateId: 4, status: "Rejected", applicationDate: "2024-11-04" },
      { candidateId: 5, status: "Under Review", applicationDate: "2024-11-05" },
      {
        candidateId: 6,
        status: "Interview Scheduled",
        applicationDate: "2024-11-06",
      },
      { candidateId: 7, status: "Under Review", applicationDate: "2024-11-07" },
      {
        candidateId: 8,
        status: "Interview Scheduled",
        applicationDate: "2024-11-08",
      },
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    description:
      "Design and build scalable server-side systems with technologies like Node.js, Express, and Java. Focus on API development, data storage, and ensuring smooth communication with frontend systems.",
    candidatesApplied: [
      { candidateId: 9, status: "Under Review", applicationDate: "2024-11-01" },
      { candidateId: 10, status: "Rejected", applicationDate: "2024-11-02" },
      {
        candidateId: 11,
        status: "Interview Scheduled",
        applicationDate: "2024-11-03",
      },
      {
        candidateId: 12,
        status: "Under Review",
        applicationDate: "2024-11-04",
      },
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    description:
      "Work on both frontend and backend to build and maintain full-stack web applications. Proficiency in React, Node.js, and various databases is required to ensure seamless integration of all parts.",
    candidatesApplied: [
      {
        candidateId: 13,
        status: "Under Review",
        applicationDate: "2024-11-01",
      },
      {
        candidateId: 14,
        status: "Interview Scheduled",
        applicationDate: "2024-11-02",
      },
      {
        candidateId: 15,
        status: "Interview Scheduled",
        applicationDate: "2024-11-03",
      },
      { candidateId: 16, status: "Rejected", applicationDate: "2024-11-04" },
    ],
  },
  {
    id: 4,
    title: "Mobile Developer (iOS)",
    description:
      "Design, develop, and deploy iOS mobile applications using Swift and Objective-C. You will be responsible for the entire mobile development lifecycle, from concept to deployment.",
    candidatesApplied: [
      {
        candidateId: 17,
        status: "Under Review",
        applicationDate: "2024-11-01",
      },
      {
        candidateId: 18,
        status: "Interview Scheduled",
        applicationDate: "2024-11-02",
      },
      {
        candidateId: 19,
        status: "Interview Scheduled",
        applicationDate: "2024-11-03",
      },
    ],
  },
];

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
