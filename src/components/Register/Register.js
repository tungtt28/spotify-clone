import React from "react";
import { FaSpotify } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login"); // Replace "/login" with the actual path to your login page
  };

  const goToSignUp = () => {
    navigate("/signup"); // Replace "/login" with the actual path to your login page
  };
  return (
    <div
      class="row"
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
      <style>
        {`
          .hover-effect {
            font-size: 17px; /* Set the default font size */
            font-weight: 700;
            cursor: pointer;
            transition: font-size 0.2s, color 0.2s; /* Add transition for smooth effect */
          }
          .hover-effect:hover {
            font-size: 18px; /* Increase font size on hover */
            color: white; /* Change color on hover */
            font-weight: 700; /* Increase font weight on hover */
          }
          .hover-letter {
            color:white;
          }
          .hover-letter:hover {
            cursor: pointer;
            text-decoration: underline;
          }

          .hover-btnRegister {
            font-size: 14px;
            cursor: pointer;
            transition: font-size 0.2s, color 0.2s;
          }

          .hover-btnRegister:hover {
            font-size: 15px;
            color: black; /* Optionally change color on hover */
          }


        `}
      </style>
      <div class="col-sm-3">
        <div class="row">
          <div
            class="row-sm-6"
            style={{
              height: 180,
              borderRadius: "15px",
              backgroundColor: "#121212",
              border: "2px solid #000500",
              width: 500,
            }}
          >
            <div class="row" style={{ marginTop: 20, marginLeft: 10 }}>
              <div class="col-sm-12">
                <div style={{ padding: 10 }}>
                  <FaSpotify
                    style={{ height: 30, width: 30, color: "white" }}
                  />
                  <span
                    style={{ color: "white", fontWeight: 600, marginLeft: 2 }}
                  >
                    Spotify
                  </span>
                </div>
              </div>

              <div class="col-sm-12">
                <div style={{ padding: 8 }}>
                  <IoHome style={{ height: 30, width: 30, color: "white" }} />
                  <span
                    style={{
                      color: "white",
                      fontWeight: 600,
                      marginLeft: 15,
                      position: "relative",
                      top: 4,
                    }}
                  >
                    Trang Chủ
                  </span>
                </div>
              </div>
              <div class="col-sm-12">
                <div style={{ padding: 8 }}>
                  <CiSearch style={{ height: 30, width: 30, color: "gray" }} />
                  <span
                    style={{
                      color: "gray",
                      fontWeight: "bolder",
                      marginLeft: 15,
                      position: "relative",
                      top: 4,
                    }}
                  >
                    Tìm kiếm
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row-sm-6"
            style={{
              height: 772,
              borderRadius: "10px",
              backgroundColor: "#121212",
              border: "2px solid 	  #000500",
              width: 490,
            }}
          >
            <div class="row" style={{ marginLeft: 10 }}>
              <div class="col-sm-12">
                <div style={{ padding: 8 }}>
                  <BiLibrary
                    style={{ height: 30, width: 30, color: "white" }}
                  />
                  <span
                    style={{
                      color: "gray",
                      fontWeight: "bolder",
                      marginLeft: 5,
                      position: "relative",
                      top: 4,
                    }}
                  >
                    Thư viện
                  </span>
                  <span style={{ marginLeft: 280 }}>
                    <FaPlus style={{ fontWeight: "700", color: "gray" }} />
                  </span>
                </div>
                <div style={{ height: 476 }}>
                  <div
                    style={{
                      height: 130,
                      width: 415,
                      border: "2px",
                      background: "#242424",
                      borderRadius: "15px",
                      marginTop: 15,
                      padding: 5,
                    }}
                  >
                    <div style={{ color: "white" }}>
                      <div
                        style={{
                          fontWeight: 600,
                          marginLeft: 10,
                          padding: 5,
                          marginTop: 5,
                        }}
                      >
                        Tạo danh sách phát đầu tiên của bạn
                      </div>
                      <div
                        style={{
                          fontWeight: 600,
                          marginLeft: 10,
                          padding: 3,
                          fontSize: 14,
                        }}
                      >
                        Rất dễ! Chúng tôi sẽ giúp bạn
                      </div>
                      <div
                        style={{
                          fontWeight: "bolder",
                          marginLeft: 10,
                          padding: 5,
                          height: 35,
                          width: 165,
                          border: "1px solid #b3b3b3",
                          background: "white",
                          borderRadius: "25px",
                          fontSize: 14,
                          color: "black",
                          marginTop: 10,
                        }}
                      >
                        <span
                          className="hover-btnRegister"
                          style={{ marginLeft: 10 }}
                        >
                          Tạo danh sách phát
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      height: 130,
                      width: 415,
                      border: "2px",
                      background: "#242424",
                      borderRadius: "15px",
                      marginTop: 25,
                      padding: 5,
                    }}
                  >
                    <div style={{ color: "white" }}>
                      <div
                        style={{
                          fontWeight: 600,
                          marginLeft: 10,
                          padding: 5,
                          marginTop: 5,
                        }}
                      >
                        Hãy cùng tìm và theo dõi một số podcast
                      </div>
                      <div
                        style={{
                          fontWeight: 600,
                          marginLeft: 10,
                          padding: 3,
                          fontSize: 14,
                        }}
                      >
                        Chúng tôi sẽ cập nhật cho bạn thông tin về các tập mới
                      </div>
                      <div
                        style={{
                          fontWeight: "bolder",
                          marginLeft: 10,
                          padding: 5,
                          height: 35,
                          width: 165,
                          border: "1px solid #b3b3b3",
                          background: "white",
                          borderRadius: "25px",
                          fontSize: 14,
                          color: "black",
                          marginTop: 10,
                        }}
                      >
                        <span
                          className="hover-btnRegister"
                          style={{ marginLeft: 10 }}
                        >
                          Duyệt xem podcast
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: 150,
                    color: "white",
                    fontWeight: 600,
                    marginTop: 20,
                  }}
                >
                  <span style={{ color: "gray", fontSize: 13 }}>Cookie</span>
                  <div
                    style={{
                      height: 32,
                      borderRadius: "15px",
                      backgroundColor: "#0a130d",
                      border: "1px solid gray",
                      width: 120,
                      marginTop: 30,
                    }}
                  >
                    <GrLanguage style={{ marginLeft: 10 }} />
                    <span
                      style={{ marginLeft: 2, position: "relative", top: 2 }}
                    >
                      Tiếng Việt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-9 " style={{ background: "#121212" }}>
        <div class="row-sm-12" style={{ height: 74, background: "#121212" }}>
          <div class="row">
            <div class="col-sm-3" style={{ height: 74 }}>
              <div class="row">
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 15,
                    border: "1px solid black",
                    color: "gray",
                    background: "black",
                    marginLeft: 25,
                    marginTop: 25,
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
                    color: "gray",
                    background: "black",
                    marginLeft: 5,
                    marginTop: 25,
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
            </div>
            <div class="col-sm-3"></div>
            <div class="col-sm-3">
              <div class="row">
                <div
                  class="col-sm-4"
                  style={{
                    height: 74,
                    display: "flex",
                    color: "gray",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="hover-effect">Premium</span>
                </div>
                <div
                  class="col-sm-4"
                  style={{
                    height: 74,
                    display: "flex",
                    color: "gray",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="hover-effect">Hỗ trợ</span>
                </div>
                <div
                  class="col-sm-4"
                  style={{
                    height: 74,
                    display: "flex",
                    color: "gray",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="hover-effect">Tải xuống</span>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="row">
                <div
                  class="col-sm-1"
                  style={{
                    color: "gray",

                    display: "flex",

                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: 25, marginBottom: 10 }}>|</span>
                </div>
                <div
                  class="col-sm-5"
                  style={{
                    height: 74,
                    display: "flex",
                    color: "gray",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={goToSignUp}
                >
                  <span
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
        </div>
        <div
          class="row"
          style={{
            height: 392,
            width: "100%",
            background: "linear-gradient(to bottom, #1F1F1F, #121212)",
          }}
        >
          <div class="row" style={{ height: 40 }}>
            <div
              class="col-sm-11"
              style={{
                color: "white",
                fontSize: 23,
                fontWeight: 700,
                height: 40,
              }}
            >
              <span className="hover-letter" style={{ marginLeft: 15 }}>
                Danh sách phát trên Spotify
              </span>
            </div>
            <div
              class="col-sm-1"
              style={{
                color: "gray",
                fontSize: 16,
                fontWeight: 700,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <span className="hover-letter" style={{ color: "gray" }}>
                Hiện tất cả
              </span>
            </div>
          </div>
          <div
            class="row"
            style={{
              width: 183,
              height: 266,
              background: "#181818",
              border: "1px",
              marginLeft: 25,
              marginBottom: 83,
              borderRadius: 10,
            }}
          >
            <img
              src="https://cdn.dribbble.com/users/406097/screenshots/16700960/media/eb025f63696f45511650b4b97189e28f.jpg?resize=450x338&vertical=center"
              alt=""
              style={{
                height: "60%",
                width: "90%",
                borderRadius: 5,
                marginTop: 15,
                marginBottom: 83,
                padding: 0,
                marginLeft: 8,
              }}
            />

            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "white",
                padding: 0,
                marginLeft: 6,
              }}
            >
              lofi beats
            </span>
            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "gray",
                padding: 0,
                fontSize: 14,
                fontWeight: 500,
                marginLeft: 6,
              }}
            >
              chill beats, lofi vibes, new tracks every...
            </span>
          </div>
          <div
            class="row"
            style={{
              width: 183,
              height: 266,
              background: "#181818",
              border: "1px",
              marginLeft: 25,
              marginBottom: 83,
              borderRadius: 10,
            }}
          >
            <img
              src="https://cdn.dribbble.com/users/406097/screenshots/16700960/media/eb025f63696f45511650b4b97189e28f.jpg?resize=450x338&vertical=center"
              alt=""
              style={{
                height: "60%",
                width: "90%",
                borderRadius: 5,
                marginTop: 15,
                marginBottom: 83,
                padding: 0,
                marginLeft: 8,
              }}
            />

            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "white",
                padding: 0,
                marginLeft: 6,
              }}
            >
              lofi beats
            </span>
            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "gray",
                padding: 0,
                fontSize: 14,
                fontWeight: 500,
                marginLeft: 6,
              }}
            >
              chill beats, lofi vibes, new tracks every...
            </span>
          </div>
          <div
            class="row"
            style={{
              width: 183,
              height: 266,
              background: "#181818",
              border: "1px",
              marginLeft: 25,
              marginBottom: 83,
              borderRadius: 10,
            }}
          >
            <img
              src="https://cdn.dribbble.com/users/406097/screenshots/16700960/media/eb025f63696f45511650b4b97189e28f.jpg?resize=450x338&vertical=center"
              alt=""
              style={{
                height: "60%",
                width: "90%",
                borderRadius: 5,
                marginTop: 15,
                marginBottom: 83,
                padding: 0,
                marginLeft: 8,
              }}
            />

            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "white",
                padding: 0,
                marginLeft: 6,
              }}
            >
              lofi beats
            </span>
            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "gray",
                padding: 0,
                fontSize: 14,
                fontWeight: 500,
                marginLeft: 6,
              }}
            >
              chill beats, lofi vibes, new tracks every...
            </span>
          </div>
          <div
            class="row"
            style={{
              width: 183,
              height: 266,
              background: "#181818",
              border: "1px",
              marginLeft: 25,
              marginBottom: 83,
              borderRadius: 10,
            }}
          >
            <img
              src="https://cdn.dribbble.com/users/406097/screenshots/16700960/media/eb025f63696f45511650b4b97189e28f.jpg?resize=450x338&vertical=center"
              alt=""
              style={{
                height: "60%",
                width: "90%",
                borderRadius: 5,
                marginTop: 15,
                marginBottom: 83,
                padding: 0,
                marginLeft: 8,
              }}
            />

            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "white",
                padding: 0,
                marginLeft: 6,
              }}
            >
              lofi beats
            </span>
            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "gray",
                padding: 0,
                fontSize: 14,
                fontWeight: 500,
                marginLeft: 6,
              }}
            >
              chill beats, lofi vibes, new tracks every...
            </span>
          </div>
          <div
            class="row"
            style={{
              width: 183,
              height: 266,
              background: "#181818",
              border: "1px",
              marginLeft: 25,
              marginBottom: 83,
              borderRadius: 10,
            }}
          >
            <img
              src="https://cdn.dribbble.com/users/406097/screenshots/16700960/media/eb025f63696f45511650b4b97189e28f.jpg?resize=450x338&vertical=center"
              alt=""
              style={{
                height: "60%",
                width: "90%",
                borderRadius: 5,
                marginTop: 15,
                marginBottom: 83,
                padding: 0,
                marginLeft: 8,
              }}
            />

            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "white",
                padding: 0,
                marginLeft: 6,
              }}
            >
              lofi beats
            </span>
            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "gray",
                padding: 0,
                fontSize: 14,
                fontWeight: 500,
                marginLeft: 6,
              }}
            >
              chill beats, lofi vibes, new tracks every...
            </span>
          </div>
          <div
            class="row"
            style={{
              width: 183,
              height: 266,
              background: "#181818",
              border: "1px",
              marginLeft: 25,
              marginBottom: 83,
              borderRadius: 10,
            }}
          >
            <img
              src="https://cdn.dribbble.com/users/406097/screenshots/16700960/media/eb025f63696f45511650b4b97189e28f.jpg?resize=450x338&vertical=center"
              alt=""
              style={{
                height: "60%",
                width: "90%",
                borderRadius: 5,
                marginTop: 15,
                marginBottom: 83,
                padding: 0,
                marginLeft: 8,
              }}
            />

            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "white",
                padding: 0,
                marginLeft: 6,
              }}
            >
              lofi beats
            </span>
            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "gray",
                padding: 0,
                fontSize: 14,
                fontWeight: 500,
                marginLeft: 6,
              }}
            >
              chill beats, lofi vibes, new tracks every...
            </span>
          </div>
          <div
            class="row"
            style={{
              width: 183,
              height: 266,
              background: "#181818",
              border: "1px",
              marginLeft: 25,
              marginBottom: 83,
              borderRadius: 10,
            }}
          >
            <img
              src="https://cdn.dribbble.com/users/406097/screenshots/16700960/media/eb025f63696f45511650b4b97189e28f.jpg?resize=450x338&vertical=center"
              alt=""
              style={{
                height: "60%",
                width: "90%",
                borderRadius: 5,
                marginTop: 15,
                marginBottom: 83,
                padding: 0,
                marginLeft: 8,
              }}
            />

            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "white",
                padding: 0,
                marginLeft: 6,
              }}
            >
              lofi beats
            </span>
            <span
              style={{
                position: "relative",
                bottom: 70,
                color: "gray",
                padding: 0,
                fontSize: 14,
                fontWeight: 500,
                marginLeft: 6,
              }}
            >
              chill beats, lofi vibes, new tracks every...
            </span>
          </div>
        </div>
      </div>
      <div
        class="col"
        style={{
          color: "white",
          height: 66,
          width: "100%",
          background: "linear-gradient(to right, #ae2896, #509af4)",
          position: "absolute",
          bottom: 10,
        }}
      >
        <div
          style={{ padding: 5, fontSize: 14, fontWeight: 700, marginTop: 2 }}
        >
          Xem trước Spotify
        </div>
        <div style={{ marginLeft: 3, fontWeight: 500 }}>
          Đăng ký để xem không giới hạn các bài hát và postcast với quảng cáo
          không thường xuyên. Không cần thẻ tín dụng.
        </div>
        <div
          style={{
            position: "relative",
            bottom: 45,
            left: 1700,
            color: "black",
            height: 45,
            width: 180,
            borderRadius: 25,
            border: 1,
            background: "white",
            fontSize: 16,
            fontWeight: "bolder",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span> Đăng ký miễn phí</span>
        </div>
      </div>
    </div>
  );
}
