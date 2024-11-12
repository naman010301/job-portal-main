# Job Management Platform

This project is a Job Management Platform built with React, Redux, and Tailwind CSS. It allows users to manage job postings, candidates, and assessments, providing an intuitive interface for both job seekers and recruiters.

## Features

- **Job Management**: Recruiters can create, edit, and delete job postings.
- **Candidate Management**: Track candidates' applications and update their status (Under Review, Interview Scheduled, etc.).
- **Assessments**: Admins can create assessments for job candidates with multiple-choice questions.
- **Routing**: The application supports routing between different views like Dashboard, Job Detail, and Candidate Detail.
- **State Management**: Redux is used for state management and data persistence.

## Tech Stack

- **Frontend**: React, Redux, React Router, Tailwind CSS
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Backend**: (Optional) For API calls and data storage, this app could connect to a backend API (currently uses local storage).
 
## Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository:
git clone [https://github.com/naman010301/job-portal-main/edit/main/README.md](https://github.com/naman010301/job-portal-main/tree/main)

## 2. Install dependencies:

- cd job-management-platform
- npm install
- npm start



## File Structure
```bash
/src
  ├── /assets                     
  │    └── logo.png
  ├── /components                
  │    ├── Navbar.jsx            
  │    ├── JobCard.jsx            
  │    ├── JobList.jsx            
  │    ├── ApplicationCard.jsx    
  │    ├── AddCompanyDrawer.jsx  
  │    ├── ApplyJobDrawer.jsx     
  │    ├── CreatedApplications.jsx 
  │    └── AssessmentForm.jsx     
  ├── /features                  
  │    ├── /jobSlice              
  │    │    ├── jobSlice.js
  │    │    └── jobSlice.test.js
  │    ├── /assignmentSlice       
  │    │    ├── assignmentSlice.js
  │    │    └── assignmentSlice.test.js
  │    ├── /candidateSlice        
  │    │    ├── candidateSlice.js
  │    │    └── candidateSlice.test.js
  ├── /pages                     
  │    ├── Homepage.jsx         
  │    ├── Dashboard.jsx         
  │    ├── JobDetail.jsx         
  │    ├── CandidateDetail.jsx    
  │    ├── Assignments.jsx       
  │    └── ApplicantsPage.jsx     
  ├── /redux                      
  │    └── store.js
  ├── /services                   
  │    └── api.js                
  ├── /styles                    
  │    ├── tailwind.css          
  │    └── App.css               
  ├── /utils                    
  │    ├── formatDate.js          
  │    ├── validateForm.js       
  ├── App.jsx                     
  ├── index.js                   
  └── package.json                



