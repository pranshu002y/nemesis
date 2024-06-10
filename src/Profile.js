import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
const Profile = ({ setShowModal }) => {


  const { user} = useAuth0();
  return (
    <div className="si">
      <div className="notification">
        <main>
          <div className="card-2">
            <img
              src={user.picture}

            />
            <div className="card-content">
              
            <span> {user.name}</span> 
              <p>
              {user.email}
              </p>
 
            </div>
          </div>
        </main>
        <div className="view-all">
        
          <div className="close-btn" onClick={() => setShowModal(false)}>
            CLOSE
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
