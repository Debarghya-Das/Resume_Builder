import React from 'react';
import './ResumePreview.css';

const ResumePreview = ({ resumeData }) => {
  return (
    <div className="resume-preview absolute right-0 p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white h-screen w-1/2 shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Resume Preview</h2>
      {resumeData.photo && (
        <div className="text-center mb-6">
          <img src={resumeData.photo} alt="Profile" className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg" />
        </div>
      )}
      <p className="text-lg mb-4"><strong>Name:</strong> {resumeData.name}</p>
      <p className="text-lg mb-4"><strong>Email:</strong> {resumeData.email}</p>
      <p className="text-lg mb-4"><strong>Phone:</strong> {resumeData.phone}</p>
      <p className="text-lg mb-4"><strong>Summary:</strong> {resumeData.summary}</p>
      <p className="text-lg mb-4"><strong>Education:</strong> {resumeData.education}</p>
      <p className="text-lg mb-4"><strong>Experience:</strong> {resumeData.experience}</p>
      <p className="text-lg mb-4"><strong>Skills:</strong> {resumeData.skills}</p>
    </div>
  );
};

export default ResumePreview;
