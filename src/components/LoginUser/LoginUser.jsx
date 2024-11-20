// src/components/LoginUser/LoginUser.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginUser.css";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Silakan isi email dan password");
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-user-container">
      <div className="login-user-card">
        <div className="login-user-header">
          <h1>Masuk Akun</h1>
          <button
            className="login-user-close-button"
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
          <div className="login-user-form-group">
            <label>Alamat Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan Alamat Email Anda"
              required
            />
          </div>

          <div className="login-user-form-group">
            <label>Password</label>
            <div className="login-user-input-group">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Password Anda"
                required
              />
              <svg
                className="login-user-toggle-password"
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
            <div className="login-user-forgot-password">
              <Link to="/lupa-password">Lupa password?</Link>
            </div>
          </div>

          <button type="submit" className="login-user-button">
            Masuk
          </button>

          <div className="login-user-divider">atau</div>

          <Link to="/daftar-dengan-google" className="login-user-google-button">
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
          </Link>

          <div className="login-user-footer-text">
            Belum punya akun? <Link to="/register">Daftar di sini</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
