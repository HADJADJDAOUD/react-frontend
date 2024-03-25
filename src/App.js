// import './App.css'
import Home from "./components/Home";
import Login from "./components/Login";
import { AuthProvider } from "./AuthContext";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ConfirmationPage from "./components/confirmation";
import ProfilePage from "./components/ProfilePage";
import CheckEmailPage from "./components/CheckEmailPage";
import Blogs from "./components/Blogs";
import NavBar1 from "./utils/NavBar1";
import SignUp from "./components/Signup";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar1 />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/confirmation-succes" element={<ConfirmationPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/check" element={<CheckEmailPage />} />
            <Route path="/blogs" element={<Blogs/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
