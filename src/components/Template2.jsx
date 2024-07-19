import React from 'react';
import './Template2.css';

const Template2 = ({ resumeData, setResumeData, isEditing }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="template2">
      <div className="header">
        <h1>{resumeData.name || 'Your Name'}</h1>
        <p>{resumeData.phone || 'Your Phone Number'}</p>
      </div>
      <div className="content">
        <section>
          <h2>Summary</h2>
          {isEditing ? (
            <textarea
              name="summary"
              value={resumeData.summary || 'Innovative professional with expertise in software development and a passion for continuous learning.'}
              onChange={handleChange}
              className="input-field"
            />
          ) : (
            <p>{resumeData.summary || 'Innovative professional with expertise in software development and a passion for continuous learning.'}</p>
          )}
        </section>
        <section>
          <h2>Education</h2>
          {isEditing ? (
            <textarea
              name="education"
              value={resumeData.education || 'Master of Science in Information Technology from ABC University.'}
              onChange={handleChange}
              className="input-field"
            />
          ) : (
            <p>{resumeData.education || 'Master of Science in Information Technology from ABC University.'}</p>
          )}
        </section>
        <section>
          <h2>Skills</h2>
          {isEditing ? (
            <textarea
              name="skills"
              value={resumeData.skills || 'Expert in React and Redux\nProficient in Node.js and Express\nExcellent communication skills'}
              onChange={handleChange}
              className="input-field"
            />
          ) : (
            <ul>
              {(resumeData.skills || 'Expert in React and Redux\nProficient in Node.js and Express\nExcellent communication skills').split('\n').map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default Template2;
