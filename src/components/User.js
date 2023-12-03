import React, { useState } from "react";
import Login from "./Login";
import { useNavigate } from 'react-router';


function User({ user, setUser }) {

  const [showLogin, setShowLogin] = useState(true);

  const history = useNavigate()

  function handleLogoutClick(e) {
    e.preventDefault();
      fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
          setUser(null);
        history('/Login')
      }
      });
  }
  
  return (
    <div>
      {showLogin ? (
        <>
        <Login user={user} setUser={setUser} /> &nbsp;
        </> 
        ):(
        <>
        <button className="submit-btn" type="submit" onClick={handleLogoutClick}>Logout</button> &nbsp;
        </>
        )}
    </div>
  )
}

export default User;