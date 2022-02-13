import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Categories from "./components/Categories/categories";
import YourPolls from "./components/yourPolls/YourPolls";
import PollHistory from "./components/pollHistory/PollHistory";
import UserGrapahics from "./components/userGrapahics/UserGrapahics";
import Reports from "./components/reports/Reports";
import About from "./components/about/About";
import Card from "./components/card/Card";

function App() {
  const [isLoggedIn, setLogInStatus] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />}>
            <Route path="categories" element={<Categories />} />
            <Route path="your-polls" element={<YourPolls />} />
            <Route path="poll-history" element={<PollHistory />} />
            <Route path="user-graphics" element={<UserGrapahics />} />
            <Route path="reports" element={<Reports />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/home" element={<Navigate replace to="/" />} />
          <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
