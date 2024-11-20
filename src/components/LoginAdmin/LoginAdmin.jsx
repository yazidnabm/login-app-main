// src/pages/LoginAdmin/LoginAdmin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginAdmin.css";

const LoginAdmin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-admin-container">
      <div className="login-admin-card">
        <div className="login-admin-header">
          <h1>Masuk Akun</h1>
          <button
            className="login-admin-close-button"
            onClick={() => navigate("/login")}
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

        <form onSubmit={handleLogin}>
          <div className="login-admin-form-group">
            <label>Alamat Email</label>
            <div className="login-admin-input-container">
              <input
                type="email"
                placeholder="Masukkan Alamat Email Anda"
                required
              />
            </div>
          </div>

          <div className="login-admin-form-group">
            <label>Password</label>
            <div className="login-admin-input-group">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Masukkan Password Anda"
                required
              />
              <svg
                className="login-admin-toggle-password"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                onClick={togglePassword}
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <div className="login-admin-forgot-password">
              <a href="/lupa-password">Lupa password?</a>
            </div>
          </div>

          <button type="submit" className="login-admin-button">
            Masuk
          </button>

          <div className="login-admin-divider">atau</div>

          <div className="login-admin-signup-text">
            Belum punya akun? <a href="/register">Daftar di sini</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
