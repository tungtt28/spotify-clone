import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaApple } from "react-icons/fa6";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup"); // Replace "/login" with the actual path to your login page
  };
  return (
    <div
      style={{
        width: "100%",
        padding: 0,
        margin: 0,
        overflow: "hidden",
        position: "relative",
      }}
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
              height: 37,
              width: 37,
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
      <div
        class="col-sm-12"
        style={{
          width: 1903,
          height: 1030,
          background: "linear-gradient(to bottom, #2A2A2A, #000000)",
        }}
      >
        <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <div
              style={{
                width: 724,
                height: 966,
                border: "2px",
                borderRadius: 10,
                marginTop: 30,
                background: "#121212",
              }}
            >
              <div
                class="col-sm-12"
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "relative",
                  top: 70,
                  fontWeight: "bolder",
                }}
              >
                <h1 style={{ fontSize: 45, fontWeight: 700 }}>
                  Đăng nhập vào Spotify
                </h1>
              </div>
              <div
                class="col-sm-12"
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "relative",
                  top: 110,
                  fontWeight: "bolder",
                  padding: 5,
                }}
              >
                <div
                  class="row-sm-12"
                  style={{
                    height: 48,
                    width: 324,
                    border: "2px solid gray",
                    borderRadius: 25,
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <div class="col-sm-3">
                    <FcGoogle
                      style={{
                        width: 25,
                        height: 25,
                      }}
                    />
                  </div>
                  <div class="col-sm-9">
                    <span
                      style={{
                        marginRight: 50,
                      }}
                    >
                      Tiếp tục bằng Google
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="col-sm-12"
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "relative",
                  top: 110,
                  fontWeight: "bolder",
                  padding: 5,
                  cursor: "pointer",
                }}
              >
                <div
                  class="row-sm-12"
                  style={{
                    height: 48,
                    width: 324,
                    border: "2px solid gray",
                    borderRadius: 25,
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div class="col-sm-3">
                    <SiFacebook
                      style={{
                        width: 25,
                        height: 25,
                        color: "blue",
                      }}
                    />
                  </div>
                  <div class="col-sm-9">
                    <span
                      style={{
                        marginRight: 50,
                      }}
                    >
                      Tiếp tục bằng Facebook
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="col-sm-12"
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "relative",
                  top: 110,
                  fontWeight: "bolder",
                  padding: 5,
                }}
              >
                <div
                  class="row-sm-12"
                  style={{
                    height: 48,
                    width: 324,
                    border: "2px solid gray",
                    borderRadius: 25,
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div class="col-sm-3">
                    <FaApple
                      style={{
                        width: 25,
                        height: 25,
                      }}
                    />
                  </div>
                  <div class="col-sm-9">
                    <span
                      style={{
                        marginRight: 50,
                      }}
                    >
                      Tiếp tục bằng Apple
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="col-sm-12"
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "relative",
                  top: 110,
                  fontWeight: "bolder",
                  padding: 5,
                  cursor: "pointer",
                }}
              >
                <div
                  class="row-sm-12"
                  style={{
                    height: 48,
                    width: 324,
                    border: "2px solid gray",
                    borderRadius: 25,
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <div class="col-sm-12">
                    <span>Tiếp tục bằng số điện thoại</span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  color: "gray",
                  borderStyle: "solid none none",
                  borderWidth: "1px 0px 0px",
                  gridArea: "auto",
                  margin: "150px 100px",
                }}
              />
              <div
                class="col-sm-12"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  position: "relative",
                  bottom: 125,
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: 14,
                  right: 70,
                }}
              >
                <div class="row">
                  <div class="col-sm-12" style={{ padding: 8 }}>
                    Email hoặc tên người dùng
                  </div>
                  <input
                    placeholder="Email hoặc tên người dùng"
                    class="col-sm-12"
                    style={{
                      height: 48,
                      width: 324,
                      borderRadius: 5,
                      border: "1px solid gray",
                      padding: 10,
                      backgroundColor: "#121212",
                      color: "white",
                      marginLeft: 285,
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  ></input>
                  <div
                    class="col-sm-12"
                    style={{
                      padding: 10,
                      position: "relative",
                      right: 60,
                      marginTop: 10,
                    }}
                  >
                    Mật khẩu
                  </div>
                  <input
                    placeholder="Mật khẩu"
                    class="col-sm-12"
                    style={{
                      height: 48,
                      width: 324,
                      borderRadius: 5,
                      border: "1px solid gray",
                      padding: 10,
                      backgroundColor: "#121212",
                      color: "white",
                      marginLeft: 285,
                      fontSize: 15,
                      fontWeight: "500",
                      position: "relative",
                    }}
                  ></input>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 8,
                    marginLeft: 420,
                    zIndex: 100,
                  }}
                >
                  <AiOutlineEyeInvisible
                    style={{
                      height: 30,
                      width: 30,
                      color: "gray",
                    }}
                  />
                </div>
              </div>
              <div class="row">
                <div
                  style={{
                    position: "relative",
                    bottom: 110,
                    left: 195,
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      height: 25, // Adjust height as needed
                      width: 60, // Adjust width as needed
                      marginTop: 5, // Adjust spacing as needed
                      marginLeft: 5, // Adjust spacing as needed
                      appearance: "none", // Hide default checkbox appearance
                      background: isChecked ? "#1ED760" : "gray", // Ensure background color matches parent background
                      border: "2px solid black", // Add border for visual clarity
                      borderRadius: 15, // Add border radius for rounded corners
                      position: "relative",
                    }}
                    checked={isChecked}
                    onChange={handleToggle}
                  />
                  <div
                    style={{
                      height: 19, // Adjust height as needed
                      width: 27, // Adjust width as needed
                      background: "black",
                      position: "absolute",
                      bottom: 9,
                      borderRadius: 15,
                      marginLeft: isChecked ? 33 : 9, // Thay đổi marginLeft tùy thuộc vào trạng thái của checkbox
                      transition: "margin-left 0.2s",
                      backgroundColor: "0.2s", // Thêm transition cho hiệu ứng mượt mà
                    }}
                  ></div>

                  <span
                    style={{
                      color: "white",
                      position: "relative",
                      bottom: 8,
                      left: 12,
                      fontSize: 14,
                    }}
                  >
                    Hãy nhớ tôi
                  </span>
                </div>
                <div
                  style={{
                    height: 50,
                    width: 337,
                    border: "2px",
                    borderRadius: 25,
                    background: "#1ED760",
                    color: "black",
                    fontWeight: "bolder",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 210,
                    position: "relative",
                    bottom: 80,
                    cursor: "pointer",
                  }}
                >
                  <span>Đăng nhập</span>
                </div>
                <span
                  style={{
                    color: "white",
                    textDecoration: "underline",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    bottom: 50,
                    cursor: "pointer",
                  }}
                >
                  Quên mật khẩu của bạn
                </span>
                <hr
                  style={{
                    color: "gray",
                    width: 524,
                    position: "relative",
                    bottom: 20,
                    left: 110,
                  }}
                />
                <span
                  style={{
                    color: "gray",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Bạn chưa có tài khoản?{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      marginLeft: 5,
                      color: "white",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                    onClick={goToSignUp}
                  >
                    Đăng ký Spotify{" "}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div class="col-sm-4"></div>
        </div>
      </div>
      <div
        class="col-sm-12"
        style={{
          width: 1903,
          height: 79,
          background: "#121212",
          color: "lightgray",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>
          Trang web này được bảo vệ bằng reCAPTCHA và tuân theo{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Chính sách quyền riêng tư
          </span>{" "}
          cũng như{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Điều khoản dịch vụ
          </span>{" "}
          của Google.
        </span>
      </div>
    </div>
  );
}
