// ForgotPassword.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import keyIcon from "../../assets/img/Key_icon.png";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    if (!email) {
      alert("Silakan isi alamat email");
      return;
    }

    navigate("/check-email");
  };

  return (
    <div className="fp-container">
      <div className="fp-card">
        <div className="fp-icon-container">
          <img src={keyIcon} alt="Key Icon" className="fp-icon" />
        </div>
        <h1 className="fp-title">Lupa Password?</h1>
        <p className="fp-subtitle">Jangan khawatir, kami akan membantumu</p>

        <form onSubmit={handleSubmit} className="fp-form">
          <div className="fp-form-group">
            <label htmlFor="email" className="fp-label">
              Alamat Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="contoh@email.com"
              className="fp-input"
            />
          </div>

          <button type="submit" className="fp-submit-button">
            Reset Password
          </button>
        </form>

        <a href="/login" className="fp-back-link">
          ← Kembali ke Login
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;
