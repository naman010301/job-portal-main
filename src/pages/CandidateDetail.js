import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import {
  MdEmail,
  MdPhone,
  MdOutlineWork,
  MdAssignmentInd,
} from "react-icons/md";

const CandidateDetail = () => {
  const { candidateId } = useParams();
  const navigate = useNavigate();

  // Retrieve the candidate's details from the Redux store
  const candidate = useSelector((state) =>
    state.candidates.find((cand) => cand.candidateId === parseInt(candidateId))
  );

  if (!candidate) {
    return <p>Candidate not found.</p>;
  }

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-6 text-violet-300 hover:text-violet-400"
      >
        <FaArrowLeft className="mr-2" /> Go Back
      </button>

      <h1 className="text-3xl font-bold mb-4 text-violet-400">
        Candidate Details
      </h1>

      {/* Candidate Info Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="text-2xl font-semibold mb-4 text-violet-300 flex items-center">
          <MdAssignmentInd className="mr-2" /> {candidate.name}
        </p>

        <div className="text-gray-300 space-y-4">
          {/* Email */}
          <div className="flex items-center">
            <MdEmail className="text-blue-500 mr-3" />
            <span>{candidate.email}</span>
          </div>

          {/* Contact */}
          <div className="flex items-center">
            <MdPhone className="text-green-500 mr-3" />
            <span>{candidate.contactDetails}</span>
          </div>

          {/* Skills */}
          <div className="flex items-center flex-wrap">
            <MdOutlineWork className="text-yellow-500 mr-3" />
            <span className="font-semibold text-yellow-400 mr-2">Skills:</span>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-violet-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="flex items-center">
            <MdOutlineWork className="text-yellow-500 mr-3" />
            <span className="font-semibold text-yellow-400 mr-2">
              Experience:
            </span>
            <span>{candidate.experience}</span>
          </div>

          {/* Resume */}
          <div className="flex items-center">
            <FaDownload className="text-blue-500 mr-3" />
            <a
              href={candidate.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-400"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
