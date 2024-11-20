// CheckEmail.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./CheckEmail.css";

const CheckEmail = () => {
  const openEmail = () => {
    window.open("mailto:");
  };

  return (
    <div className="ce-container">
      <div className="ce-card">
        <div className="ce-icon-container">
          <svg
            className="ce-email-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <h1 className="ce-title">
          Periksa email
          <br />
          mu
        </h1>
        <p className="ce-subtitle">Tautan reset kata sandi telah dikirim ke</p>
        <p className="ce-email-display">miinguyeah@gmail.com</p>
        <button className="ce-email-button" onClick={openEmail}>
          Buka email
        </button>
        <p className="ce-resend-text">Belum dapat email? Kirimkan ulang</p>
        <Link to="/login" className="ce-back-link">
          ← Kembali ke Login
        </Link>
      </div>
    </div>
  );
};

export default CheckEmail;
