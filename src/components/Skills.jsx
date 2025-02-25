import React from 'react';

const Skills = () => {
  const skills = [
    "JavaScript (React.js, Node.js, Angular)",
    "Python (Django, Django REST Framework, Flask, FastAPI, TensorFlow, PyTorch, Keras)",
    "Java (Spring Boot, Android, Kotlin)",
    "C++",
    "Dart (Flutter)",
    "PHP (Laravel)",
    "SQL & NoSQL Databases (MySQL, SQLite, PostgreSQL, MongoDB, Firebase)",
    "Cloud & DevOps (AWS, Amazon S3, Docker, Git, GitHub, CI/CD, JIRA)",
    "Machine Learning & AI (ML, Deep Learning, NLP, LLMs, Computer Vision)",
    "Mobile Development (Flutter, Android)",
    "Full-Stack Development",
    "Cloud Computing & IoT Development",
    "Tools & Services (Hugging Face, Google Analytics, Google Play, Zendesk)",
    "UI Frameworks (Bootstrap, Firebase)"
  ];
  

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: '#e9ecef' }}>
      <div className="container">
        <h2>My Skills</h2>
        <br/>
        <ul className="list-group">
          {skills.map((skill, index) => (
            <li className="list-group-item" key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;