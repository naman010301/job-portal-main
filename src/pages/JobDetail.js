import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCandidateStatus } from "../redux/slices/jobSlice";
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import {
  BsCheckCircle,
  BsXCircle,
  BsHourglassSplit,
  BsCalendarCheck,
} from "react-icons/bs";

const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const job = useSelector((state) =>
    state.jobs.find((job) => job.id === parseInt(jobId))
  );
  const candidates = useSelector((state) => state.candidates);

  if (!job) {
    return <p>Job not found.</p>;
  }

  const handleStatusChange = (candidateId, newStatus, e) => {
    e.stopPropagation();
    dispatch(
      updateCandidateStatus({ jobId: job.id, candidateId, status: newStatus })
    );
  };

  const getCandidateDetails = (candidateId) => {
    return candidates.find(
      (candidate) => candidate.candidateId === candidateId
    );
  };

  // Helper function to get status color and icon
  const getStatusAttributes = (status) => {
    switch (status) {
      case "Under Review":
        return { color: "text-yellow-400", icon: <BsHourglassSplit /> };
      case "Interview Scheduled":
        return { color: "text-blue-400", icon: <BsCalendarCheck /> };
      case "Hired":
        return { color: "text-green-400", icon: <BsCheckCircle /> };
      case "Rejected":
        return { color: "text-red-400", icon: <BsXCircle /> };
      default:
        return { color: "text-gray-400", icon: <BsHourglassSplit /> };
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-6 text-violet-300 hover:text-violet-400"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <h1 className="text-3xl font-bold mb-4 text-violet-400">{job.title}</h1>
      <p className="text-gray-300 mb-8">{job.description}</p>

      <h2 className="text-2xl font-semibold mb-4 text-violet-300">
        Candidates Applied
      </h2>

      {/* Candidate Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg bg-gray-800">
        <table className="min-w-full text-white">
          <thead>
            <tr className="bg-violet-700">
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                Sr. No
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                Candidate Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                Resume
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                Application Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                Update Status
              </th>
            </tr>
          </thead>
          <tbody>
            {job.candidatesApplied.length > 0 ? (
              job.candidatesApplied.map((candidate, index) => {
                const candidateDetails = getCandidateDetails(
                  candidate.candidateId
                );
                const { color, icon } = getStatusAttributes(candidate.status);
                return (
                  <tr
                    key={candidate.candidateId}
                    className="border-b border-gray-700"
                  >
                    <td className="px-6 py-4 text-center">{index + 1}</td>
                    <td
                      className="px-6 py-4 cursor-pointer text-violet-200 hover:text-violet-300 font-medium"
                      onClick={() =>
                        navigate(`/candidate/${candidate.candidateId}`)
                      }
                    >
                      {candidateDetails?.name}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={candidateDetails?.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-500 hover:text-blue-400"
                      >
                        <FaDownload className="mr-1" /> Download
                      </a>
                    </td>
                    <td className="px-6 py-4">{candidate.applicationDate}</td>
                    <td className={`px-6 py-4 flex items-center ${color}`}>
                      {icon}
                      <span className="ml-2">{candidate.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={candidate.status}
                        onChange={(e) =>
                          handleStatusChange(
                            candidate.candidateId,
                            e.target.value,
                            e
                          )
                        }
                        className="bg-gray-700 text-white border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
                      >
                        <option value="Under Review">Under Review</option>
                        <option value="Interview Scheduled">
                          Interview Scheduled
                        </option>
                        <option value="Hired">Hired</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No candidates have applied for this job yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobDetail;
