import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createAssignment,
  addQuestion,
  editQuestion,
  deleteQuestion,
} from "../redux/slices/assignmentSlice";
import {
  FaPlus,
  FaSave,
  FaEdit,
  FaTrash,
  FaQuestionCircle,
  FaCheckCircle,
  FaRegCircle,
} from "react-icons/fa";

const Assignments = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const assignments = useSelector((state) => state.assignments);

  const [selectedJob, setSelectedJob] = useState(null);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [editingQuestionIndex, setEditingQuestionIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const selectedAssignment = selectedJob
    ? assignments.find((assignment) => assignment.jobId === selectedJob)
    : null;

  const selectedJobDetails = selectedJob
    ? jobs.find((job) => job.id === selectedJob) || null
    : null;

  useEffect(() => {
    console.log("Selected Job:", selectedJob);
    console.log("Selected Job Details:", selectedJobDetails);
  }, [selectedJob, selectedJobDetails]);

  const handleSelectJob = (event) => {
    const jobId = parseInt(event.target.value);
    setSelectedJob(jobId);

    if (!assignments.find((assignment) => assignment.jobId === jobId)) {
      dispatch(createAssignment({ jobId, questions: [] }));
    }
  };

  const handleAddQuestion = () => {
    if (validateQuestion()) {
      dispatch(
        addQuestion({
          jobId: selectedJob,
          question: { question, options, correctAnswer },
        })
      );
      resetForm();
    }
  };

  const handleEditQuestion = (index) => {
    const q = selectedAssignment.questions[index];
    setEditingQuestionIndex(index);
    setQuestion(q.question);
    setOptions(q.options);
    setCorrectAnswer(q.correctAnswer);
    setShowForm(true);
  };

  const handleSaveEditQuestion = () => {
    if (validateQuestion()) {
      dispatch(
        editQuestion({
          jobId: selectedJob,
          questionIndex: editingQuestionIndex,
          updatedQuestion: { question, options, correctAnswer },
        })
      );
      resetForm();
    }
  };

  const handleDeleteQuestion = (index) => {
    dispatch(deleteQuestion({ jobId: selectedJob, questionIndex: index }));
  };

  const validateQuestion = () => {
    if (!question) {
      alert("Please enter a question.");
      return false;
    }
    if (!options.every((opt) => opt)) {
      alert("All options must be filled out.");
      return false;
    }
    if (!options.includes(correctAnswer)) {
      alert("Correct answer must match one of the options.");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
    setEditingQuestionIndex(null);
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold text-violet-400 mb-4">Assignments</h1>

      <select
        className="border p-2 mb-4 w-full bg-gray-800 text-white rounded-md"
        onChange={handleSelectJob}
        value={selectedJob || ""}
      >
        <option value="">Select Job</option>
        {jobs.map((job) => (
          <option key={job.id} value={job.id}>
            {job.title}
          </option>
        ))}
      </select>

      {selectedJob && selectedJobDetails && (
        <div className="mt-6 p-4 border border-violet-600 rounded-md bg-gray-800">
          <h2 className="text-xl font-semibold text-violet-300 mb-2">
            Assignment for {selectedJobDetails.title}
          </h2>
          <p className="text-gray-400 mb-4">{selectedJobDetails.description}</p>

          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="bg-violet-600 text-white py-2 px-4 rounded-md mb-4 flex items-center hover:bg-violet-700 transition duration-200"
          >
            <FaPlus className="mr-2" />
            {showForm ? "Hide Form" : "Add New Question"}
          </button>

          {showForm && (
            <div className="mt-4 mb-4 p-4 border border-violet-600 rounded-md bg-gray-900">
              <div>
                <label className="block font-semibold text-gray-200">
                  Question:
                </label>
                <input
                  type="text"
                  className="border p-2 w-full mb-2 bg-gray-800 text-white rounded-md"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <label className="block font-semibold text-gray-200">
                  Options:
                </label>
                {options.map((opt, index) => (
                  <input
                    key={index}
                    type="text"
                    className="border p-2 mb-2 w-full bg-gray-800 text-white rounded-md"
                    value={opt}
                    placeholder={`Option ${index + 1}`}
                    onChange={(e) => {
                      const newOptions = [...options];
                      newOptions[index] = e.target.value;
                      setOptions(newOptions);
                    }}
                  />
                ))}
              </div>

              <div className="mt-2">
                <label className="block font-semibold text-gray-200">
                  Correct Answer:
                </label>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-800 text-white rounded-md"
                  value={correctAnswer}
                  onChange={(e) => setCorrectAnswer(e.target.value)}
                  placeholder="Must match one of the options"
                />
              </div>

              <button
                onClick={
                  editingQuestionIndex === null
                    ? handleAddQuestion
                    : handleSaveEditQuestion
                }
                className="bg-green-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-700 transition duration-200 flex items-center"
              >
                {editingQuestionIndex === null ? (
                  <>
                    <FaPlus className="mr-2" />
                    Add Question
                  </>
                ) : (
                  <>
                    <FaSave className="mr-2" />
                    Save Edit
                  </>
                )}
              </button>
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-violet-300 mb-2">
              Existing Questions
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {selectedAssignment && selectedAssignment.questions.length > 0 ? (
                selectedAssignment.questions.map((q, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-700 rounded-lg shadow-md border border-gray-600"
                  >
                    <p className="font-bold text-violet-200">
                      Q{index + 1} {q.question}
                    </p>
                    <ul className="mt-2 text-gray-400">
                      {q.options.map((opt, i) => (
                        <li
                          key={i}
                          className={
                            opt === q.correctAnswer ? "text-green-400" : ""
                          }
                        >
                          {opt === q.correctAnswer ? (
                            <FaCheckCircle className="inline mr-2 text-green-400" />
                          ) : (
                            <FaRegCircle className="inline mr-2 text-gray-400" />
                          )}
                          {opt}
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-400 mt-2">
                      Correct Answer:{" "}
                      <span className="text-green-400">{q.correctAnswer}</span>
                    </p>
                    <div className="flex mt-2 space-x-2">
                      <button
                        onClick={() => handleEditQuestion(index)}
                        className="bg-yellow-500 text-white py-1 px-2 rounded-md hover:bg-yellow-600 transition flex items-center"
                        title="Edit Question"
                      >
                        <FaEdit className="mr-1" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteQuestion(index)}
                        className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition flex items-center"
                        title="Delete Question"
                      >
                        <FaTrash className="mr-1" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 col-span-full">
                  No questions added yet.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
