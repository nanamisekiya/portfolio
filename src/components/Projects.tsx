import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {/* プロジェクトの概要をここに追加 */}
        <div className="project-item">
          <h3>プロジェクト1</h3>
          <p>プロジェクトの説明。</p>
        </div>
        <div className="project-item">
          <h3>プロジェクト2</h3>
          <p>プロジェクトの説明。</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
