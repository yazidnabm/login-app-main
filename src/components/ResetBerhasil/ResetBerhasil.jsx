// ResetBerhasil.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ResetBerhasil.css";

const ResetBerhasil = () => {
  return (
    <div className="reset-berhasil-container">
      <div className="reset-berhasil-card">
        <div className="reset-berhasil-success-icon-container">
          <svg
            className="reset-berhasil-success-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </div>
        <h1 className="reset-berhasil-title">Password telah diubah</h1>
        <p className="reset-berhasil-message">
          Passwordmu telah berhasil diubah. Klik dibawah ini untuk login.
        </p>
        <Link to="/login" className="reset-berhasil-login-button">
          Login
        </Link>
      </div>
    </div>
  );
};

export default ResetBerhasil;
