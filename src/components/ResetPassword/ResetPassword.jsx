// ResetPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateForm = (e) => {
    e.preventDefault();
    const { newPassword, confirmPassword } = passwordData;

    if (!newPassword || !confirmPassword) {
      alert("Silakan isi kedua field password");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Password tidak cocok");
      return;
    }

    navigate("/berhasil-reset-password");
  };

  return (
    <div className="rp-container">
      <div className="rp-card">
        <div className="rp-icon-container">
          <svg
            className="rp-lock-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0110 0v4"></path>
          </svg>
        </div>

        <h1 className="rp-title">Buat Password Baru</h1>
        <p className="rp-subtitle">
          Password barumu harus berbeda dengan passwordmu sebelumnya.
        </p>

        <form onSubmit={validateForm} className="rp-form">
          <div className="rp-form-group">
            <label htmlFor="newPassword" className="rp-label">
              Password Baru
            </label>
            <div className="rp-input-group">
              <input
                type={showPassword.newPassword ? "text" : "password"}
                id="newPassword"
                className="rp-input"
                placeholder="Masukkan passwordmu"
                value={passwordData.newPassword}
                onChange={handleChange}
              />
              <svg
                className="rp-toggle-password"
                onClick={() => togglePassword("newPassword")}
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
          </div>

          <div className="rp-form-group">
            <label htmlFor="confirmPassword" className="rp-label">
              Konfirmasi Password
            </label>
            <div className="rp-input-group">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="rp-input"
                placeholder="Masukkan passwordmu"
                value={passwordData.confirmPassword}
                onChange={handleChange}
              />
              <svg
                className="rp-toggle-password"
                onClick={() => togglePassword("confirmPassword")}
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
          </div>

          <button type="submit" className="rp-submit-button">
            Ubah Password
          </button>
        </form>

        <a href="/login" className="rp-back-link">
          ← Kembali ke Login
        </a>
      </div>
    </div>
  );
};

export default ResetPassword;
