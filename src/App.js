// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import LoginType from "./components/LoginType/LoginType";
import LoginUser from "./components/LoginUser/LoginUser";
import LoginAdmin from "./components/LoginAdmin/LoginAdmin";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Register from "./components/Register/Register";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ResetBerhasil from "./components/ResetBerhasil/ResetBerhasil";
import CheckEmail from "./components/CheckEmail/CheckEmail";
import GoogleRegist from "./components/GoogleRegist/GoogleRegist";
import LoadingRegistGoogle from "./components/LoadingRegistGoogle/LoadingRegistGoogle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginType />} />
        <Route path="/login-user" element={<LoginUser />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/lupa-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/berhasil-reset-password" element={<ResetBerhasil />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/daftar-dengan-google" element={<GoogleRegist />} />
        <Route
          path="/loading-daftar-google"
          element={<LoadingRegistGoogle />}
        />
      </Routes>
    </Router>
  );
}

export default App;
