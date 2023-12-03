import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Routes, Route  } from 'react-router-dom';
import Tony from './Tony';
import ProjectCard from './ProjectCard';
import User from './User';

function Home() {

  const [user, setUser] = useState("");

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      };
    });
  }, []);

  return (
    <div>
      <header className="App-header">
        <h1>Swearingen Unlimited LLC</h1>
        <NavBar />
        <Routes>
          <Route path="/Tony" element={<Tony/>} />
          <Route path="/ProjectCard" element={<ProjectCard user={user} setUser={setUser} />} />
          <Route path="/User" element={<User user={user} setUser />}/>
        </Routes>
      </header>
    </div>
  )
}

export default Home