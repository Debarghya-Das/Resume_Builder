import React, { useState, useEffect } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import Template1 from './components/Template1';
import Template2 from './components/Template2';
import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    education: '',
    experience: '',
    skills: '',
    photo: null,
    template: 'default',
  });

  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      setResumeData(JSON.parse(savedData));
    }
  }, []);

  const saveData = () => {
    console.log('Data saved');
  };

  const handleTemplateChange = (template) => {
    setResumeData((prevData) => ({ ...prevData, template }));
  };

  return (
    <div className="app-container">
      <ResumeForm
        resumeData={resumeData}
        setResumeData={setResumeData}
        saveData={saveData}
        handleTemplateChange={handleTemplateChange}
      />
      <ResumePreview resumeData={resumeData} />
    </div>
  );
};

export default App;
