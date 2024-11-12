import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("assignments")) || [];

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    createAssignment: (state, action) => {
      const { jobId } = action.payload;
      const existingAssignment = state.find(
        (assignment) => assignment.jobId === jobId
      );
      if (!existingAssignment) {
        state.push({ jobId, questions: [] });
        localStorage.setItem("assignments", JSON.stringify(state));
      }
    },
    addQuestion: (state, action) => {
      const { jobId, question } = action.payload;
      const assignment = state.find((a) => a.jobId === jobId);
      if (assignment) {
        assignment.questions.push(question);
        localStorage.setItem("assignments", JSON.stringify(state));
      }
    },
    editQuestion: (state, action) => {
      const { jobId, questionIndex, updatedQuestion } = action.payload;
      const assignment = state.find((a) => a.jobId === jobId);
      if (assignment && assignment.questions[questionIndex]) {
        assignment.questions[questionIndex] = updatedQuestion;
        localStorage.setItem("assignments", JSON.stringify(state));
      }
    },
    deleteQuestion: (state, action) => {
      const { jobId, questionIndex } = action.payload;
      const assignment = state.find((a) => a.jobId === jobId);
      if (assignment && assignment.questions[questionIndex]) {
        assignment.questions.splice(questionIndex, 1);
        localStorage.setItem("assignments", JSON.stringify(state));
      }
    },
  },
});

export const {
  createAssignment,
  addQuestion,
  editQuestion,
  deleteQuestion,
} = assignmentSlice.actions;

export default assignmentSlice.reducer;
