import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://klickks-backend-8jgn.onrender.com/api/auth/session", { withCredentials: true })
      .then((res) => {
        if (res.data.loggedIn) {
          setUser(res.data.user);
        } else {
          navigate("/login");
        }
      });
  }, [navigate]);

  const handleLogout = async () => {
    await axios.post("https://klickks-backend-8jgn.onrender.com/api/auth/logout", {}, { withCredentials: true });
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      {user ? (
        <p>
          Welcome, <strong>{user.email}</strong>
        </p>
      ) : (
        <p>Loading...</p>
      )}
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
