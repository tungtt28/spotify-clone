import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaApple } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

export default function SignUp() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login"); // Replace "/login" with the actual path to your login page
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(() =>
          updateProfile(auth.currentUser, {
            displayName: username,
          }).then(() => {
            navigate("/");
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

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
              <div
                style={{
                  width: 324,
                  height: 132,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1
                  style={{
                    width: 324,
                    height: 132,
                    fontSize: 45,
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Đăng ký để bắt đầu nghe
                </h1>
              </div>
              <div
                style={{
                  width: 324,
                  height: 376,
                  marginTop: 20,
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  Địa chỉ email
                </span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
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
                <span
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  Username
                </span>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="email"
                  placeholder="Username"
                  value={username}
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
                />
                <span
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  Mật khẩu
                </span>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  value={password}
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
                ></input>
                <div style={{ marginTop: 8 }}>
                  <span
                    style={{
                      color: "#1ed760",
                      fontSize: 14,
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Dùng số điện thoại
                  </span>
                </div>

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
                    marginTop: 20,
                  }}
                  onClick={handleSignUp}
                >
                  <span
                    style={{
                      color: "black",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Tiếp theo
                  </span>
                </div>
                <div style={{ height: 298, width: 324 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: 324,
                      marginTop: 32,
                    }}
                  >
                    <hr
                      style={{
                        flex: 1,
                        border: "none",
                        borderBottom: "1px solid white",
                        margin: "0 12px",
                      }}
                    />
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: 14,
                        backgroundColor: "#121212",
                        padding: "0 10px",
                      }}
                    >
                      hoặc
                    </span>
                    <hr
                      style={{
                        flex: 1,
                        border: "none",
                        borderBottom: "1px solid white",
                        margin: "0 10px",
                      }}
                    />
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
                      top: 32,
                      fontWeight: "bolder",
                      padding: 5,
                    }}
                  >
                    <div
                      class="row-sm-12"
                      style={{
                        height: 48,
                        width: 324,
                        border: "1px solid gray",
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
                          onClick={handleClick}
                        >
                          Đăng ký bằng Google
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
                      top: 35,
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
                        border: "1px solid gray",
                        borderRadius: 25,
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
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
                          Đăng ký bằng Facebook
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
                      top: 38,
                      fontWeight: "bolder",
                      padding: 5,
                    }}
                  >
                    <div
                      class="row-sm-12"
                      style={{
                        height: 48,
                        width: 324,
                        border: "1px solid gray",
                        borderRadius: 25,
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
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
                          Đăng ký bằng Apple
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "1px",
                      width: 324,
                      backgroundColor: "#292929",
                      marginTop: 66,
                    }}
                  ></div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      marginTop: 28,
                      color: "white",
                    }}
                  >
                    <span style={{ color: "#a7a7a7", fontWeight: 500 }}>
                      Bạn đã có tài khoản?
                    </span>
                    <span
                      style={{
                        textDecoration: "underline",
                        marginLeft: 4,
                        fontWeight: 500,
                        cursor: "pointer",
                      }}
                      onClick={goToLogin}
                    >
                      Đăng nhập tại đây
                    </span>
                  </div>
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
    </div>
  );
}
