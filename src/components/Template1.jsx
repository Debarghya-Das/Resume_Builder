import React from 'react';
import './Template1.css';

const Template1 = ({ resumeData, setResumeData, isEditing }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="template1">
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
              value={resumeData.summary || 'Dedicated and experienced professional with a proven track record in delivering high-quality work.'}
              onChange={handleChange}
              className="input-field"
            />
          ) : (
            <p>{resumeData.summary || 'Dedicated and experienced professional with a proven track record in delivering high-quality work.'}</p>
          )}
        </section>
        <section>
          <h2>Education</h2>
          {isEditing ? (
            <textarea
              name="education"
              value={resumeData.education || 'Bachelor of Science in Computer Science from XYZ University.'}
              onChange={handleChange}
              className="input-field"
            />
          ) : (
            <p>{resumeData.education || 'Bachelor of Science in Computer Science from XYZ University.'}</p>
          )}
        </section>
        <section>
          <h2>Skills</h2>
          {isEditing ? (
            <textarea
              name="skills"
              value={resumeData.skills || 'Proficient in React and JavaScript\nExperienced with CSS and Tailwind CSS\nStrong problem-solving skills'}
              onChange={handleChange}
              className="input-field"
            />
          ) : (
            <ul>
              {(resumeData.skills || 'Proficient in React and JavaScript\nExperienced with CSS and Tailwind CSS\nStrong problem-solving skills').split('\n').map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default Template1;
