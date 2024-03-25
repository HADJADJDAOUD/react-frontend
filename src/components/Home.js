import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
// import NavBar from "../utils/NavBar";

function Home() {
  const location = useLocation();

  const { user, setUser } = useAuth();

 
  return (
    <>
      <div className="homepage">
        <h1>Hello {user ? user.name : "Loading..."} and welcome to the home</h1>
      </div>
    </>
  );
}

export default Home;
