import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function PasswordReset() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // Replace "/login" with the actual path to your login page
  };

  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleResetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        localStorage.setItem("email", email);
        navigate("/sendmail");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100%",
        width: "100%",
        padding: 0,
        margin: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="row">
        <div
          class="row-sm-12"
          style={{ height: 96, width: "100%", background: "#121212" }}
        >
          <div
            class="col-sm-12"
            style={{
              width: 1903,
              height: 100,
              background: "#121212",
              display: "flex",
              textAlign: "center",

              alignItems: "center",
            }}
          >
            <div onClick={goToHome} style={{ padding: 10, cursor: "pointer" }}>
              <FaSpotify
                style={{
                  height: 35,
                  width: 35,
                  color: "white",
                  marginLeft: 40,
                }}
              />
              <span
                style={{
                  color: "white",
                  fontWeight: 700,
                  marginLeft: 5,
                  fontSize: 21,
                  position: "relative",
                  top: 4,
                }}
              >
                Spotify
              </span>
            </div>
          </div>
        </div>
        <div
          class="row-sm-12"
          style={{ height: 779, width: "100%", background: "#121212" }}
        >
          <div class="row">
            <div class="col-sm-5"></div>
            <div class="col-sm-2" style={{ width: 388, height: 779 }}>
              <h1
                style={{
                  width: 324,
                  height: 84,
                  fontSize: 32,
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                Đặt lại mật khẩu của bạn
              </h1>
              <p
                style={{
                  color: "white",
                  fontWeight: 500,
                  width: 324,
                  height: 104,
                }}
              >
                Nhập địa chỉ email hoặc tên người dùng của bạn, sau đó, chúng
                tôi sẽ gửi cho bạn một đường liên kết để lấy lại quyền truy cập
                vào tài khoản.
              </p>

              <div
                style={{
                  width: 324,
                  height: 104,
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  Địa chỉ email hoặc tên người dùng
                </span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    height: 48,
                    width: 324,
                    border: "1px solid gray",
                    borderRadius: 5,
                    background: "#121212",
                    marginTop: 5,
                    color: "white",
                    textIndent: 10,
                  }}
                  value={email}
                />
              </div>
              <p
                style={{
                  width: 324,
                  height: 32,
                  fontSize: 14,
                  color: "white",
                  textDecoration: "underline",
                }}
              >
                Bạn cần hỗ trợ?
              </p>

              <div
                style={{
                  width: 324,
                  height: 48,
                  border: 1,
                  borderRadius: 25,
                  background: "#1fdf64",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
                onClick={handleResetPassword}
              >
                <span
                  style={{
                    color: "black",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Gửi đường liên kết
                </span>
              </div>
            </div>
          </div>
          <div class="col-sm-5"></div>
        </div>
      </div>
      <div
        class="row-sm-12"
        style={{
          height: 78,
          width: "100%",
          background: "#121212",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          color: "#a7a7a7",
          position: "relative",
          bottom: 10,
        }}
      >
        <div class="row" style={{ fontSize: 12 }}>
          <div class="row-sm-12">
            This site is protected by reCAPTCHA and the Google
          </div>
          <div class="row-sm-12">
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              Privacy Policy{" "}
            </span>
            <>
              <span> and </span>
            </>{" "}
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              Terms of Service
            </span>{" "}
            apply.
          </div>
        </div>
      </div>
    </div>
  );
}
