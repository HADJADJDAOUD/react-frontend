import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Assuming you save your CSS in a file named Login.css
// import NavBar from "../utils/NavBar";
const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  async function submit(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(passwordConfirm);
    try {
      const res = await axios.post("http://localhost:5000/api/users/signUp", {
        email,
        password,
        passwordConfirm,
      });
      console.log(res.data);
      if (res.data.status === "success") {
        navigate("/check");
      } else {
        // Handle other cases if needed
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.response.data.message);
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <>
      {/* <NavBar /> */}
      <div className="login-container">
        <div className="login">
          <h1>Signup</h1>

          <form onSubmit={submit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <input
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder="Confirm Password"
            />

            <input type="submit" value="Submit" />
          </form>

          <br />
          <p>OR</p>
          <br />

          <Link to="/">Login Page</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
