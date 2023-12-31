import React, { useState } from 'react'

function ProjectForm({ user, addProject }) {


  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");


  function handleProjectCreate(e) {
    e.preventDefault();
    console.log(user)
    const formData = {
        name: name,
        date: date,
        user_id: user.id,
        link: link,
    };
    fetch('/projects', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then((data) => {
      setName("")
      setDate("")
      setLink("")
      addProject(data)
    })
  }

  return (
    <div>
    <form onSubmit={handleProjectCreate}>
      <div>
        <label htmlFor="name"></label>
        <input 
          type="text"
          id="name"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name"></label>
        <input 
          type="text"
          id="date"
          placeholder='Project Date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name"></label>
        <input 
          type="text"
          id="link"
          placeholder='Link URL'
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <button type="submit" >Submit</button>
    </form></div>
  )
}

export default ProjectForm