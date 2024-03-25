import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./css/profile.css";
import { useAuth } from "../AuthContext";
const ProfilePage = () => {
  const { user}= useAuth();
  console.log(user);
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       // console.log("this is document.cookie", document.cookie);
  //       const token = Cookies.get("jwt");
  //       // console.log(token); // Get the token from cookies
  //       if (!token) {
  //         console.log("there is no jwt");
  //         return;
  //       }

  //       const response = await axios.get(
  //         "http://localhost:5000/api/users/getMe",

  //         { withCredentials: true }
  //       );

  //       // console.log(response.data);
  //       setUser(response.data);
  //       // console.log("this is user", user);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  return (
    <div className="profile-container">
      {user && (
        <div className="profile">
          <h1>Profile</h1>
          <div className="profile-info">
            <img src={user.photo} alt="Profile" />
            <div className="info">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Skills:</strong> {user.skills.join(", ")}
              </p>
              <p>
                <strong>Education:</strong> {user.education}
              </p>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
              <p>
                <strong>Bio:</strong> {user.bio}
              </p>
              <p>
                <strong>Bio:</strong> {user.skills}
              </p>
              <p>
                <strong>Link:</strong>{" "}
                <a href={user.link}>{user.link}</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
