// src/components/SplashScreen/SplashScreen.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";
import logoContainer from "../../assets/img/Logo Container.png";
import bgLogin from "../../assets/img/bg_login.jpg";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="splash-screen-container"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="splash-screen-overlay">
        <img
          src={logoContainer}
          alt="Warga Siaga"
          className="splash-screen-logo"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
