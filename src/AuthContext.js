import React, { createContext, useContext, useState ,useEffect} from "react";
import Cookies from "js-cookie";
import axios from "axios";
const AuthContext = createContext();
var i=0;
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = Cookies.get("jwt");
        if(!token){
          console.log('you aren"t loggin')
          return;
        }
        const res = await axios.get("http://localhost:5000/api/users/getMe", {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }, {
          withCredentials: true,
        });
        i++
        console.log('this is the value or i',i)
        setUser(res.data);
      } catch (error) {
        console.error("Error getting user:", error.response.data.message);
        // Handle error...
      }
    };

    getUser();
    console.log(`this is user${user}`)
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
