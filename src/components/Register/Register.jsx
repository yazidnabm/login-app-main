// Register.jsx
import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    address: "",
    terms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="reg-container">
      <div className="reg-card">
        <div className="reg-header">
          <h1>Daftar Akun</h1>
          <button
            className="reg-close-button"
            onClick={() => (window.location.href = "/login")}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="reg-form">
          <div className="reg-form-group">
            <label>Nama Lengkap</label>
            <input
              type="text"
              name="fullName"
              placeholder="Masukkan Nama Lengkap Anda"
              value={formData.fullName}
              onChange={handleInputChange}
              className="reg-input"
            />
          </div>

          <div className="reg-form-group">
            <label>Alamat Email</label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan Alamat Email Anda"
              value={formData.email}
              onChange={handleInputChange}
              className="reg-input"
            />
          </div>

          <div className="reg-form-group">
            <label>Password</label>
            <div className="reg-input-group">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Masukkan Password Anda"
                value={formData.password}
                onChange={handleInputChange}
                className="reg-input"
              />
              <svg
                className="reg-toggle-password"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
          </div>

          <div className="reg-form-group">
            <label>Usia</label>
            <input
              type="text"
              name="age"
              placeholder="Masukkan Usia Anda"
              value={formData.age}
              onChange={handleInputChange}
              className="reg-input"
            />
          </div>

          <div className="reg-form-group">
            <label>Alamat</label>
            <input
              type="text"
              name="address"
              placeholder="Masukkan Alamat Anda"
              value={formData.address}
              onChange={handleInputChange}
              className="reg-input"
            />
          </div>

          <div className="reg-checkbox-wrapper">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              required
              className="reg-checkbox"
            />
            <div className="reg-info-text">
              Saya menyetujui S&K yang berlaku
            </div>
          </div>

          <button type="submit" className="reg-submit-button">
            Daftar
          </button>

          <a href="/daftar-dengan-google" className="reg-google-button">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Masuk dengan Google
          </a>

          <div className="reg-footer-text">
            Sudah punya akun? <a href="/login">Masuk</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
