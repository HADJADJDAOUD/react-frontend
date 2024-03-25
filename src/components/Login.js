import React, {  useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import NavBar from "../utils/NavBar";
import { useAuth } from "../AuthContext";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios
        .post(
          "http://localhost:5000/api/users/login",
          {
            email,
            password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data.status);
          console.log(document.cookie);
          if (res.data.status === "success") {
            setUser(res.data.data);
            navigate("/home", { state: { id: email } });
          } else {
            // Handle other cases if needed
            alert("An error occurred. Please try again.");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      {/* <NavBar/> */}
      <div className="login">
        <h1>Login</h1>

        <form action="POST">
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <input type="submit" onClick={submit} />
        </form>

        <br />
        <p>OR</p>
        <br />

        <Link to="/signup">Signup Page</Link>
      </div>
    </>
  );
}

export default Login;
