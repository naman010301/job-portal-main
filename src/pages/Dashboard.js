import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addJob, editJob, deleteJob } from "../redux/slices/jobSlice";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Dashboard = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const navigate = useNavigate();

  const [newJob, setNewJob] = useState({ title: "", description: "" });
  const [editMode, setEditMode] = useState(false);
  const [jobToEdit, setJobToEdit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler to add or edit job
  const handleSaveJob = () => {
    // Check for empty title or description
    if (!newJob.title.trim() || !newJob.description.trim()) {
      alert("Both title and description are required.");
      return;
    }

    if (editMode && jobToEdit) {
      dispatch(
        editJob({ id: jobToEdit.id, updatedJob: { ...jobToEdit, ...newJob } })
      );
    } else {
      const jobId = Math.floor(Math.random() * 10000); // Generating a random job ID
      dispatch(addJob({ id: jobId, ...newJob, candidatesApplied: [] }));
    }
    setNewJob({ title: "", description: "" });
    setEditMode(false);
    setJobToEdit(null);
    setIsModalOpen(false); // Close modal after save
  };

  // Handler to initiate edit mode
  const handleEditJob = (job, e) => {
    e.stopPropagation(); // Prevent navigating to the job detail page when clicking edit
    setNewJob({ title: job.title, description: job.description });
    setEditMode(true);
    setJobToEdit(job);
    setIsModalOpen(true); // Open modal in edit mode
  };

  // Handler to delete job
  const handleDeleteJob = (jobId, e) => {
    e.stopPropagation(); // Prevent navigating to the job detail page when clicking delete
    dispatch(deleteJob(jobId));
  };

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIsModalOpen(false);
    }
  };

  // Adding event listener for outside click when modal is open
  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-violet-400 flex items-center">
          <FaEdit className="mr-2 text-violet-500" />
          Job Dashboard
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-violet-600 text-white p-3 rounded-md shadow-md hover:bg-violet-700 transition duration-200 flex items-center"
        >
          <FaPlus className="mr-2" />
          Add Job
        </button>
      </div>

      {/* Job List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            onClick={() => navigate(`/job/${job.id}`)} // Navigate to job detail page on card click
            className="cursor-pointer p-6 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 rounded-lg shadow-lg hover:shadow-2xl transition duration-200 transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-violet-200">
              {job.title}
            </h3>
            <p className="text-gray-300 mb-2">{job.description}</p>
            <p className="text-sm text-gray-400">
              Candidates Applied: {job.candidatesApplied.length}
            </p>

            {/* Edit & Delete Buttons */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-4">
                <button
                  onClick={(e) => handleEditJob(job, e)} // Stop event propagation for edit
                  className="text-yellow-400 hover:text-yellow-500 flex items-center"
                >
                  <FaEdit className="mr-2" />
                  Edit
                </button>
                <button
                  onClick={(e) => handleDeleteJob(job.id, e)} // Stop event propagation for delete
                  className="text-red-400 hover:text-red-500 flex items-center"
                >
                  <FaTrash className="mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Add/Edit Job */}
      {isModalOpen && (
        <div
          className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">
              {editMode ? "Edit Job" : "Add New Job"}
            </h2>
            <input
              type="text"
              placeholder="Job Title"
              value={newJob.title}
              onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
              className="border border-gray-500 p-2 mb-4 rounded w-full bg-gray-700 text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Job Description"
              value={newJob.description}
              onChange={(e) =>
                setNewJob({ ...newJob, description: e.target.value })
              }
              className="border border-gray-500 p-2 mb-4 rounded w-full bg-gray-700 text-white placeholder-gray-400"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleSaveJob}
                className="bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 transition duration-200"
              >
                {editMode ? "Update Job" : "Add Job"}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
