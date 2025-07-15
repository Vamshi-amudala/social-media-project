import React from "react";
import { auth } from "../config/firebase";

export const Profile = () => {
  return (
    <div className="Profile">
      <h1>Profile Page</h1>
      <p>This is your profile page.</p>
      {/* Add more profile related content here */}

      <div>
        <p>
          {auth.currentUser ? `Welcome, ${auth.currentUser.displayName}` : "Please log in"}</p>

         <img src={auth.currentUser?.photoURL || " "} width="100" height="100"  style={{borderRadius:"50%"}}/>
      </div>
    </div>
  );
}