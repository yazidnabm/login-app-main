// src/components/LoginType/LoginType.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginType.css";
import logoContainer from "../../assets/img/Logo Container.png";
import bgLogin from "../../assets/img/bg_login.jpg";

const LoginType = () => {
  const navigate = useNavigate();

  const handleLogin = (type) => {
    if (type === "pengguna") {
      navigate("/login-user");
    } else {
      navigate("/login-admin");
    }
  };

  return (
    <div
      className="login-type-container"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="login-type-card">
        <div className="login-type-logo">
          <img src={logoContainer} alt="Warga Siaga Logo" />
        </div>
        <h1 className="login-type-title">Masuk Sebagai</h1>
        <button
          onClick={() => handleLogin("pengguna")}
          className="login-type-button login-type-button-primary"
        >
          Pengguna
        </button>
        <button
          onClick={() => handleLogin("admin")}
          className="login-type-button login-type-button-secondary"
        >
          Admin
        </button>
      </div>
    </div>
  );
};

export default LoginType;
