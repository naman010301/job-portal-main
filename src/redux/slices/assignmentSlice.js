import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    createAssignment: (state, action) => {
      state.push(action.payload);
    },
    updateAssignment: (state, action) => {
      const { jobId, updatedAssignment } = action.payload;
      const index = state.findIndex((assignment) => assignment.jobId === jobId);
      if (index !== -1) {
        state[index] = updatedAssignment;
      }
    },
    addQuestion: (state, action) => {
      const { jobId, question } = action.payload;
      const assignment = state.find((assign) => assign.jobId === jobId);
      if (assignment) {
        assignment.questions.push(question);
      }
    },
    editQuestion: (state, action) => {
      const { jobId, questionIndex, updatedQuestion } = action.payload;
      const assignment = state.find((assign) => assign.jobId === jobId);
      if (assignment) {
        assignment.questions[questionIndex] = updatedQuestion;
      }
    },
    deleteQuestion: (state, action) => {
      const { jobId, questionIndex } = action.payload;
      const assignment = state.find((assign) => assign.jobId === jobId);
      if (assignment) {
        assignment.questions.splice(questionIndex, 1);
      }
    },
  },
});

export const {
  createAssignment,
  updateAssignment,
  addQuestion,
  editQuestion,
  deleteQuestion,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
