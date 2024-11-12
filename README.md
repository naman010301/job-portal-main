# Job Management Platform

This project is a Job Management Platform built with React, Redux, and Tailwind CSS. It allows users to manage job postings, candidates, and assessments, providing an intuitive interface for both job seekers and recruiters.

## **Features**

- **Job Management**: Recruiters can create, edit, and delete job postings.
- **Candidate Management**: Track candidates' applications and update their status (Under Review, Interview Scheduled, etc.).
- **Assessments**: Admins can create assessments for job candidates with multiple-choice questions.
- **Routing**: The application supports routing between different views like Dashboard, Job Detail, and Candidate Detail.
- **State Management**: Redux is used for state management and data persistence.

## **Tech Stack**

- **Frontend**: React, Redux, React Router, Tailwind CSS
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Backend**: (Optional) For API calls and data storage, this app could connect to a backend API (currently uses local storage).

## **File Structure**

/src
  ├── /assets                     # Static assets (like images, logos, etc.)
  │    └── logo.png
  ├── /components                 # Reusable components
  │    ├── Navbar.jsx             # Navbar component for navigation
  │    ├── JobCard.jsx            # Job card component
  │    ├── JobList.jsx            # Job listing component
  │    ├── ApplicationCard.jsx    # Application card for each candidate
  │    ├── AddCompanyDrawer.jsx   # Component for adding a company
  │    ├── ApplyJobDrawer.jsx     # Component for applying to a job
  │    ├── CreatedApplications.jsx # Component to display created applications
  │    └── AssessmentForm.jsx     # Component for managing assessments
  ├── /features                   # Redux slices for state management
  │    ├── /jobSlice              # Job-related Redux slice
  │    │    ├── jobSlice.js
  │    │    └── jobSlice.test.js
  │    ├── /assignmentSlice       # Assignment-related Redux slice
  │    │    ├── assignmentSlice.js
  │    │    └── assignmentSlice.test.js
  │    ├── /candidateSlice        # Candidate-related Redux slice
  │    │    ├── candidateSlice.js
  │    │    └── candidateSlice.test.js
  ├── /pages                      # Pages for different routes
  │    ├── Homepage.jsx           # Homepage view
  │    ├── Dashboard.jsx          # Dashboard view for managing jobs
  │    ├── JobDetail.jsx          # Detailed job view
  │    ├── CandidateDetail.jsx    # Detailed candidate view
  │    ├── Assignments.jsx        # Page for managing assignments
  │    └── ApplicantsPage.jsx     # Page for managing applicant details
  ├── /redux                      # Redux store setup
  │    └── store.js               # Central Redux store configuration
  ├── /services                   # Data fetching logic or API helpers
  │    └── api.js                 # API functions for interacting with the backend
  ├── /styles                     # Global styling (Tailwind, CSS, etc.)
  │    ├── tailwind.css           # Tailwind CSS file
  │    └── App.css                # Global styles for the app
  ├── /utils                      # Utility functions
  │    ├── formatDate.js          # Date formatting utility
  │    ├── validateForm.js        # Form validation utilities
  ├── App.jsx                     # Main application component (includes routing)
  ├── index.js                    # React entry point for rendering the app
  └── package.json                # Project metadata and dependencies


## **Getting Started**

To run this project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/job-management-platform.git

2. Install dependencies:

cd job-management-platform
npm install
npm start
