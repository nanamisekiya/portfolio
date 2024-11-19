import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <div className="project-icon">🌸</div>
          <h3 className="project-title">Project 1</h3>
          <p className="project-description">あとで追記</p>
        </div>
        <div className="project-item">
          <div className="project-icon">🚚</div>
          <h3 className="project-title">Project 2</h3>
          <p className="project-description">あとで追記</p>
        </div>
        <div className="project-item">
          <div className="project-icon">📚</div>
          <h3 className="project-title">Project 3</h3>
          <p className="project-description">あとで追記</p>
        </div>
        <div className="project-item">
          <div className="project-icon">🌟</div>
          <h3 className="project-title">Project 4</h3>
          <p className="project-description">あとで追記</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
