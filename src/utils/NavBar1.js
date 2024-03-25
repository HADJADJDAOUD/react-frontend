import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

import axios from "axios";
import { useAuth } from "../AuthContext";

const NavBar1 = () => {
  const { user, setUser } = useAuth(); // Empty dependency array
  // console.log(user);
  const navigate = useNavigate();
  const logout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/signOut",
        {},
        { withCredentials: true }
      );
      // console.log(res.data.status);
      // console.log(document.cookie);
      if (res.data.status === "success") {
        setUser(null);
        navigate("/");
      } else {
        // Handle other cases if needed
        alert("An error occurred. Please try again.");
      }
    } catch (e) {
      console.log(e.response.data.message);
      alert("wrong details");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo">
          <img className="logo" src="logo.png" alt="Profile" />
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/blogs" className="navbar-link">
              Blogs
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/courses" className="navbar-link">
              Courses
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/resources" className="navbar-link">
              Resources
            </Link>
          </li>
          {user ? (
            <>
              <li className="navbar-item">
                <Link to="/profile" className="navbar-link">
                  Profile
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/cvs" className="navbar-link">
                  CVs
                </Link>
              </li>
              <li className="navbar-item">
                {/* <Link to="/" className="navbar-link"> */}
                <button onClick={logout}>logout</button>

                {/* </Link> */}
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link to="/" className="navbar-link">
                  Sign In
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/signup" className="navbar-link">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar1;
