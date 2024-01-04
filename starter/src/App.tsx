import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import HeaderUp from "./Components/HeaderUp";
import HeaderDown from "./Components/HeaderDown";
import SignIn from "./Pages/SignIn";
import SecondPage from "./Pages/SecondPage";
import UserProfilePage from "./Components/UserProfilePage";
import ErrorPage from "./Pages/404";
import ReportForm from "./Pages/ReportForm";
import ReportsPage from "./Pages/ReportsPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderUp />
        <HeaderDown />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/secondpage" element={<SecondPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/reportform" element={<ReportForm />} />
          <Route path="/reportspage" element={<ReportsPage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
