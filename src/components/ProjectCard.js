import React from 'react';

function ProjectCard({ id, name, date, link, onDelete }) {

  function handleDeletedProjects() {
    fetch(`/projects/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      onDelete(id)
    })
  }

  return (
    <div id={id}>
      <h3>My Projects</h3>
      <h4>{name}</h4>
      <p>{date}</p>
        {link? <a href={link}>Link</a>
        : 
        <p>Link coming soon</p>}
        <br/>
      <button className="delete-btn" onClick={handleDeletedProjects}>🗑</button>
    </div>
  )
}

export default ProjectCard;