// GoogleRegist.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoogleRegist.css";

const GoogleRegist = () => {
  const navigate = useNavigate();

  const redirectToLoading = (name, email) => {
    navigate(
      `/loading-daftar-google?name=${encodeURIComponent(
        name
      )}&email=${encodeURIComponent(email)}`
    );
  };

  return (
    <div className="google-regist-container">
      <div className="google-regist-card">
        <div className="google-regist-header">
          <svg className="google-regist-google-logo" viewBox="0 0 24 24">
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
          <button
            className="google-regist-close-button"
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

        <h1 className="google-regist-title">
          Pilih akun untuk masuk ke Warga siaga
        </h1>

        <ul className="google-regist-account-list">
          <li
            className="google-regist-account-item"
            onClick={() =>
              redirectToLoading("Ming Ridoboni", "mingrivestri@gmail.com")
            }
          >
            <div className="google-regist-avatar">M</div>
            <div className="google-regist-account-info">
              <div className="google-regist-account-name">Ming Ridoboni</div>
              <div className="google-regist-account-email">
                mingrivestri@gmail.com
              </div>
              <div className="google-regist-account-type">
                Daftar dengan Google
              </div>
            </div>
          </li>
          <li
            className="google-regist-account-item"
            onClick={() =>
              redirectToLoading("Jinyoung Pek", "parkonmyeight@gmail.com")
            }
          >
            <div className="google-regist-avatar">J</div>
            <div className="google-regist-account-info">
              <div className="google-regist-account-name">Jinyoung Pek</div>
              <div className="google-regist-account-email">
                parkonmyeight@gmail.com
              </div>
              <div className="google-regist-account-type">
                Daftar dengan Google
              </div>
            </div>
          </li>
          <li
            className="google-regist-account-item"
            onClick={() =>
              redirectToLoading("Irene Joohyun", "irenebaezingd@gmail.com")
            }
          >
            <div className="google-regist-avatar">I</div>
            <div className="google-regist-account-info">
              <div className="google-regist-account-name">Irene Joohyun</div>
              <div className="google-regist-account-email">
                irenebaezingd@gmail.com
              </div>
              <div className="google-regist-account-type">
                Daftar dengan Google
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GoogleRegist;
