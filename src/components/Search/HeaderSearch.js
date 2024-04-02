import React from "react";
import { CiSearch } from "react-icons/ci";
import { GrNext, GrPrevious } from "react-icons/gr";

import { useNavigate } from "react-router-dom";

export default function HeaderSearch() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };
  return (
    <div
      class="row-sm-12"
      style={{
        height: 64,
        width: 1606,
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        class="col-sm-4"
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          class="row"
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 15,
              border: "1px solid black",
              color: "white",
              background: "#131313",
              marginLeft: 25,

              cursor: "pointer",
            }}
          >
            <GrPrevious
              style={{
                width: 16,
                height: 16,
                position: "relative",
                right: 5,
              }}
            />
          </div>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 15,
              border: "1px solid black",
              color: "white",
              background: "#131313",
              marginLeft: 5,

              cursor: "pointer",
            }}
          >
            <GrNext
              style={{
                width: 16,
                height: 16,
                position: "relative",
                right: 5,
              }}
            />
          </div>
        </div>
        <div style={{ marginLeft: 20, position: "relative" }}>
          <input
            type="text"
            style={{
              background: "#242424",
              width: 364,
              height: 48,
              border: 2,
              borderRadius: 25,
              color: "white",
              paddingLeft: 40,
              fontSize: 14,
            }}
            placeholder="Bạn muốn phát nội dung gì?"
          />
          <CiSearch
            style={{
              color: "white",
              height: 25,
              width: 25,
              position: "absolute",
              left: 5,
              top: 12,
            }}
          />
        </div>
      </div>
      <div class="col-sm-5"></div>
      <div
        class="col-sm-3"
        style={{ position: "relative", right: 10, marginTop: 7 }}
      >
        <div class="row">
          <div class="col-sm-1"></div>
          <div
            class="col-sm-5"
            style={{
              height: 74,
              display: "flex",
              color: "lightgray",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={goToSignUp}
          >
            <span
              style={{ fontWeight: 500 }}
              className="hover-effect" // Add the class to apply the hover effect
            >
              Đăng ký
            </span>
          </div>
          <div
            class="col-sm-6"
            style={{
              height: 74,
              display: "flex",
              color: "gray",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 17, fontWeight: 700 }}>
              <div
                onClick={goToLogin}
                className="hover-effect"
                style={{
                  width: 150,
                  height: 47,
                  borderRadius: 25,
                  border: "1px solid white",
                  color: "black",
                  background: "white",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 50,
                }}
              >
                Đăng nhập
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
