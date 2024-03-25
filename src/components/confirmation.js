// ConfirmationPage.js
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import NavBar from "../utils/NavBar";
function ConfirmationPage() {
  const { token } = useParams();

  useEffect(() => {
    confirmRegistration(token);
  }, [token]);

  const confirmRegistration = async (token) => {
    try {
      await axios.get(`http://localhost:5000/api/confirm/${token}`);
      // Redirect user to success page or profile page
      // history.push('/success');
    } catch (error) {
      console.error("Error confirming registration:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <>
      {/* <NavBar/> */}
      <h2>Confirmation Page</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1>welcom to your page suuuuuuuuuuuuuuui</h1>
        <p>you are verified please login now </p>
        <Link to="/">
          <button>click me</button>
        </Link>
      </div>
    </>
  );
}

export default ConfirmationPage;
