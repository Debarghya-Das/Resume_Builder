import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import './ResumeForm.css';
import Template1 from './Template1';
import Template2 from './Template2';

const ResumeForm = ({ resumeData, setResumeData, handleTemplateChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeData((prevData) => ({
        ...prevData,
        photo: URL.createObjectURL(file),
      }));
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  };

  const resetSavedData = () => {
    localStorage.removeItem('resumeData');
    setResumeData({
      name: '',
      phone: '',
      summary: '',
      education: '',
      skills: '',
      photo: null,
      template: 'default',
    });
  };

  const downloadResume = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Resume', 10, 10);

    if (resumeData.photo) {
      doc.addImage(resumeData.photo, 'JPEG', 10, 20, 50, 50);
    }

    doc.setFontSize(12);
    doc.text(`Name: ${resumeData.name}`, 10, 80);
    doc.text(`Phone: ${resumeData.phone}`, 10, 90);
    doc.text(`Summary: ${resumeData.summary}`, 10, 100);
    doc.text(`Education: ${resumeData.education}`, 10, 110);
    doc.text(`Skills: ${resumeData.skills}`, 10, 120);

    doc.save('resume.pdf');
  };

  return (
    <div className="resume-builder">
      <div className="resume-form absolute left-0 p-6 bg-gray-200 text-gray-900 h-screen w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter Your Details</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={resumeData.name}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={resumeData.phone}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="input-field"
            />
            <select
              name="template"
              value={resumeData.template}
              onChange={(e) => handleTemplateChange(e.target.value)}
              className="input-field"
            >
              <option value="default">Default</option>
              <option value="template1">Template 1</option>
              <option value="template2">Template 2</option>
            </select>
          </div>
        </form>
        <div className="buttons mt-6 flex flex-wrap space-x-4">
          <button
            onClick={saveToLocalStorage}
            className="button-save-local"
          >
            Save to Local Storage
          </button>
          <button
            onClick={resetSavedData}
            className="button-reset-local"
          >
            Reset Saved Data
          </button>
          <button
            onClick={downloadResume}
            className="button-download"
          >
            Download Resume
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="button-edit"
          >
            {isEditing ? 'Stop Editing' : 'Edit Templates'}
          </button>
        </div>
      </div>
      <div className="resume-preview absolute right-0 p-6 bg-white text-black h-screen w-1/2">
        {resumeData.template === 'template1' ? (
          <Template1 resumeData={resumeData} setResumeData={setResumeData} isEditing={isEditing} />
        ) : (
          <Template2 resumeData={resumeData} setResumeData={setResumeData} isEditing={isEditing} />
        )}
      </div>
    </div>
  );
};

export default ResumeForm;
