import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function SendMail() {
  const navigate = useNavigate();

  const goToLogin = () => {
    removeEmailFromLocalStorage();
    navigate("/login");
  };

  const removeEmailFromLocalStorage = () => {
    localStorage.removeItem("email");
  };

  const backToResetPassword = () => {
    navigate("/resetpassword");
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
            <div style={{ padding: 10 }}>
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

                  color: "white",
                }}
              >
                Đã gửi email
              </h1>
              <p
                style={{
                  color: "white",
                  fontWeight: 500,
                  width: 324,
                  height: 82,
                }}
              >
                Chúng tôi đã gửi email cho bạn. Hãy làm theo hướng dẫn để lấy
                lại quyền truy cập vào tài khoản của bạn.
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
                onClick={goToLogin}
              >
                <span
                  style={{
                    color: "black",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Quay lại phần đăng nhập
                </span>
              </div>

              <div
                style={{
                  width: 324,
                  height: 61,
                  border: "1px solid gray",
                  borderRadius: 25,
                  background: "#121212",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
                onClick={backToResetPassword}
              >
                <span
                  style={{
                    color: "white",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Chỉnh sửa email/tên người dùng
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
