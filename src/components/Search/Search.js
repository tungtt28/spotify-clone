import React from "react";
import { BiLibrary } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { CgMiniPlayer } from "react-icons/cg";
import { CiHeart, CiSearch } from "react-icons/ci";
import {
  FaFacebook,
  FaPlayCircle,
  FaPlus,
  FaRandom,
  FaTwitter,
} from "react-icons/fa";
import { GrLinkNext, GrNext, GrPrevious } from "react-icons/gr";
import { HiMiniSpeakerWave, HiOutlineQueueList } from "react-icons/hi2";
import { IoIosNotificationsOutline, IoLogoInstagram } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { LuMonitorSpeaker, LuPlaySquare } from "react-icons/lu";
import { MdFullscreen, MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { PiArrowCircleDownLight } from "react-icons/pi";
import { TbMicrophone2 } from "react-icons/tb";

export default function Search() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100%",
        width: "100%",
        padding: 0,
        margin: 0,
        overflow: "hidden", // Ẩn thanh cuộn
        position: "relative",
      }}
    >
      <div class="row">
        <div class="col-sm-2" style={{ background: "#121212" }}>
          <div style={{ position: "fixed" }}>
            <div
              style={{
                height: 120,
                width: 304,
                background: "black",
              }}
            >
              <div
                style={{
                  height: 112,
                  width: 290,
                  background: "#121212",
                  border: 1,
                  borderRadius: 15,
                  marginLeft: 5,
                }}
              >
                <div
                  class="col-sm-12"
                  style={{ height: 40, width: 273, marginLeft: 20 }}
                >
                  <div style={{ padding: 8, cursor: "pointer" }}>
                    <IoHome
                      style={{
                        height: 30,
                        width: 30,
                        color: "lightgray",
                        marginTop: 10,
                      }}
                    />
                    <span
                      style={{
                        color: "lightgray",
                        fontWeight: 500,
                        marginLeft: 20,
                        position: "relative",
                        top: 10,
                      }}
                    >
                      Trang Chủ
                    </span>
                  </div>
                </div>
                <div
                  class="col-sm-12"
                  style={{ height: 40, width: 273, marginLeft: 20 }}
                >
                  <div style={{ padding: 8, marginTop: 10, cursor: "pointer" }}>
                    <CiSearch
                      style={{
                        height: 30,
                        width: 30,
                        color: "lightgray",
                        marginTop: 8,
                      }}
                    />
                    <span
                      style={{
                        color: "lightgray",
                        fontWeight: 500,
                        marginLeft: 20,
                        position: "relative",
                        top: 7,
                      }}
                    >
                      Tìm kiếm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: 940,
                width: 304,
                background: "black",
              }}
            >
              <div
                style={{
                  height: 920,
                  width: 290,
                  background: "#121212",
                  border: 1,
                  borderRadius: 15,
                  marginLeft: 5,
                }}
              >
                <div class="row" style={{ marginLeft: 10 }}>
                  <div class="col-sm-12">
                    <div
                      style={{
                        padding: 8,
                        marginTop: 5,
                        height: 56,
                        cursor: "pointer",
                      }}
                    >
                      <BiLibrary
                        style={{ height: 28, width: 28, color: "lightgray" }}
                      />
                      <span
                        style={{
                          color: "gray",
                          fontWeight: "bolder",
                          marginLeft: 7,
                          position: "relative",
                          top: 5,
                        }}
                      >
                        Thư viện
                      </span>
                      <span
                        style={{
                          marginLeft: 197,
                          position: "relative",
                          bottom: 25,
                          cursor: "pointer",
                        }}
                      >
                        <FaPlus style={{ fontWeight: "500", color: "gray" }} />
                      </span>
                      <span
                        style={{
                          marginLeft: 225,
                          position: "relative",
                          bottom: 49,
                          cursor: "pointer",
                        }}
                      >
                        <GrLinkNext
                          style={{ fontWeight: "700", color: "lightgray" }}
                        />
                      </span>
                    </div>
                    <div
                      style={{ height: 476, position: "relative", right: 10 }}
                    >
                      <div
                        style={{
                          height: 155,
                          width: 278,
                          border: "2px",
                          background: "#242424",
                          borderRadius: "10px",
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
                              style={{ marginLeft: 10, cursor: "pointer" }}
                            >
                              Tạo danh sách phát
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          height: 175,
                          width: 278,
                          border: "2px",
                          background: "#242424",
                          borderRadius: "10px",
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
                            Chúng tôi sẽ cập nhật cho bạn thông tin về các tập
                            mới
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
                              style={{ marginLeft: 10, cursor: "pointer" }}
                            >
                              Duyệt xem podcast
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-10" style={{ background: "#121212" }}>
          <div class="row" style={{ height: 1611, width: 1606 }}>
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
                  <div class="col-sm-4"></div>
                  <div
                    class="col-sm-6"
                    style={{
                      height: 33,
                      width: 165,
                      border: 1,
                      borderRadius: 15,
                      background: "#080808",
                      color: "white",
                      fontWeight: 700,
                      fontSize: 14,
                      display: "flex",
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 5,
                      position: "relative",
                      right: 7,
                      cursor: "pointer",
                    }}
                  >
                    <div>
                      <PiArrowCircleDownLight
                        style={{ height: 23, width: 23 }}
                      />
                      <span>Cài đặt Ứng dụng</span>
                    </div>
                  </div>
                  <div class="col-sm-1">
                    <span
                      style={{
                        height: 30,
                        width: 30,
                        border: 1,
                        borderRadius: "50%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "black",
                        position: "relative",
                        right: 12,
                        cursor: "pointer",
                      }}
                    >
                      <IoIosNotificationsOutline
                        style={{ color: "white", height: 23, width: 23 }}
                      />
                    </span>
                  </div>
                  <div class="col-sm-1">
                    <span
                      style={{
                        height: 30,
                        width: 30,
                        border: 1,
                        borderRadius: "50%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        right: 11,
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/409083243_2162940817392337_7739851178532311169_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH2j29LSktLRo4othJT2NvyuBxgaekW4Ra4HGBp6RbhFrgPgRC3WZkOSJ8e4AOv6u31uZRlhDJJN4hktJ94hHXd&_nc_ohc=x7tqibsweG4AX9X3I-S&_nc_ht=scontent.fhan19-1.fna&oh=00_AfCOSM0dkKcJvjQwJJqIyGn9GIfrVaZ-nKdCOGEcmc3acw&oe=65EAF006"
                        alt=""
                        style={{
                          height: 28,
                          width: 28,
                          border: 1,
                          borderRadius: "50%",
                          marginLeft: 10,
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row-sm-12"
              style={{ height: 1611, width: 1606, marginTop: 30 }}
            >
              <div>
                <h2
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "white",
                    height: 50,
                  }}
                >
                  Duyệt tìm tất cả
                </h2>
              </div>
              <div class="row" style={{ gap: "24px 24px" }}>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    height: 193,
                    cursor: "pointer",
                    width: 193,
                    border: 1,
                    borderRadius: 8,
                    background: "#DC148C",
                    overflow: "hidden",
                    marginLeft: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      padding: "10px",
                      color: "white",
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Nhạc
                  </span>
                  <img
                    style={{
                      boxShadow: "0 2px 4px 0",
                      color: "white",
                      width: 113,
                      height: 113,
                      transform: "rotate(25deg)",
                      position: "relative",
                      left: 90,
                      top: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                class="row"
                style={{ marginTop: 50, width: 1616, height: 363 }}
              >
                <div class="col-sm-2">
                  <div class="row">
                    <span
                      style={{ color: "white", fontWeight: 700, height: 22 }}
                    >
                      Công ty
                    </span>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: 500,
                        height: 30,
                        marginTop: 10,
                        cursor: "pointer",
                      }}
                    >
                      Giới thiệu
                    </span>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: 500,
                        height: 30,
                        cursor: "pointer",
                      }}
                    >
                      Việc làm
                    </span>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: 500,
                        height: 30,
                        cursor: "pointer",
                      }}
                    >
                      For the record
                    </span>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="row">
                    <span
                      style={{ color: "white", fontWeight: 700, height: 22 }}
                    >
                      Cộng đồng
                    </span>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: 500,
                        height: 30,
                        marginTop: 10,
                        cursor: "pointer",
                      }}
                    >
                      Dành cho các nghệ sĩ
                    </span>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: 500,
                        height: 30,
                        cursor: "pointer",
                      }}
                    >
                      Nhà phát triển
                    </span>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: 500,
                        height: 30,
                        cursor: "pointer",
                      }}
                    >
                      Quảng cáo
                    </span>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: 500,
                        height: 30,
                        cursor: "pointer",
                      }}
                    >
                      Nhà đầu tư
                    </span>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: 500,
                        height: 30,
                        cursor: "pointer",
                      }}
                    >
                      Nhà cung cấp
                    </span>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="row">
                    <span
                      style={{ color: "white", fontWeight: 700, height: 22 }}
                    >
                      Liên kết hữu ích
                    </span>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: 500,
                        height: 30,
                        marginTop: 10,
                        cursor: "pointer",
                      }}
                    >
                      Hỗ trợ
                    </span>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: 500,
                        height: 30,
                        cursor: "pointer",
                      }}
                    >
                      Ứng dụng di động miễn phí
                    </span>
                  </div>
                </div>
                <div class="col-sm-4"></div>
                <div class="col-sm-2">
                  <div
                    class="row"
                    style={{
                      display: "flex",
                      justifyContent: "center",

                      gap: 15,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        border: 1,
                        borderRadius: "50%",
                        color: "white",
                        background: "#292929",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span>
                        <IoLogoInstagram
                          style={{
                            width: 25,
                            height: 25,
                          }}
                        />
                      </span>
                    </div>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        border: 1,
                        borderRadius: "50%",
                        color: "white",
                        background: "#292929",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span>
                        <FaTwitter
                          style={{
                            width: 22,
                            height: 22,
                          }}
                        />
                      </span>
                    </div>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        border: 1,
                        borderRadius: "50%",
                        color: "white",
                        background: "#292929",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span>
                        <FaFacebook
                          style={{
                            width: 22,
                            height: 22,
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <hr style={{ color: "white", marginTop: 20 }} />
                <div
                  style={{
                    height: 46,
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{ fontSize: 14, color: "gray", cursor: "pointer" }}
                  >
                    Pháp lý
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "gray",
                      marginLeft: 5,
                      cursor: "pointer",
                    }}
                  >
                    Trung tâm an toàn và quyền riêng tư
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "gray",
                      marginLeft: 5,
                      cursor: "pointer",
                    }}
                  >
                    Chính sách quyền riêng tư
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "gray",
                      marginLeft: 5,
                      cursor: "pointer",
                    }}
                  >
                    Cookie
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "gray",
                      marginLeft: 5,
                      cursor: "pointer",
                    }}
                  >
                    Giới thiệu Quảng cáo
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "gray",
                      marginLeft: 5,
                      cursor: "pointer",
                    }}
                  >
                    Hỗ trợ tiếp cận
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "gray",
                      marginLeft: 650,
                    }}
                  >
                    © 2024 Spotify AB
                  </span>
                </div>
                <div style={{ height: 450 }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row"
        style={{
          height: 76,
          width: 1910,
          position: "fixed",
          bottom: 0,
          background: "black",
        }}
      >
        <div
          class="col-sm-3"
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrNJ9B34oS833zBkq5_jsmZDU9utAjZ94U33Rj_JSvYHbYXMfB"
            alt=""
            style={{
              height: 56,
              width: 76,
              marginLeft: 15,
              border: 1,
              borderRadius: 5,
              cursor: "pointer",
            }}
          />
          <div class="row">
            <span
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "bolder",
                cursor: "pointer",
              }}
            >
              Đánh đổi
            </span>
            <span
              style={{
                color: "gray",
                fontSize: 12,
                fontWeight: "bolder",
                cursor: "pointer",
              }}
            >
              Obito
            </span>
          </div>
          <span>
            <CiHeart
              style={{
                height: 23,
                width: 23,
                color: "white",
                cursor: "pointer",
              }}
            />
          </span>
        </div>
        <div class="col-sm-6">
          <div
            class="row"
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              marginTop: 10,
            }}
          >
            <div>
              <FaRandom
                style={{
                  height: 18,
                  width: 18,
                  marginRight: 20,
                  color: "gray",
                  cursor: "pointer",
                }}
              />
              <MdSkipPrevious
                style={{
                  height: 30,
                  width: 30,
                  marginRight: 20,
                  color: "gray",
                  cursor: "pointer",
                }}
              />
              <FaPlayCircle
                style={{
                  height: 33,
                  width: 33,
                  marginRight: 20,
                  cursor: "pointer",
                }}
              />
              <MdSkipNext
                style={{
                  height: 30,
                  width: 30,
                  marginRight: 20,
                  color: "gray",
                  cursor: "pointer",
                }}
              />
              <BsArrowRepeat
                style={{
                  height: 20,
                  width: 20,
                  marginRight: 20,
                  color: "gray",
                  cursor: "pointer",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                marginTop: 5,
              }}
            >
              <span style={{ fontSize: 13, color: "#a7a7a7" }}>0:00</span>
              <input
                type="range"
                style={{
                  margin: "0 10px",
                  height: "4px",
                  width: 626,
                  cursor: "pointer",
                }}
              />
              <span style={{ fontSize: 13, color: "#a7a7a7" }}>5:00</span>
            </div>
          </div>
        </div>

        <div
          class="col-sm-3"
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <div
            class="row-sm-12"
            style={{
              color: "gray",
              display: "flex",
              gap: "10px ",
            }}
          >
            <LuPlaySquare
              style={{ height: 23, width: 23, cursor: "pointer" }}
            />
            <TbMicrophone2
              style={{ height: 23, width: 23, cursor: "pointer" }}
            />
            <HiOutlineQueueList
              style={{ height: 23, width: 23, cursor: "pointer" }}
            />
            <LuMonitorSpeaker
              style={{ height: 23, width: 23, cursor: "pointer" }}
            />
            <HiMiniSpeakerWave
              style={{ height: 23, width: 23, cursor: "pointer" }}
            />
            <input
              type="range"
              style={{
                margin: "10px 10px",
                height: "4px",
                width: 100,
                cursor: "pointer",
              }}
            />
            <CgMiniPlayer
              style={{ height: 23, width: 23, cursor: "pointer" }}
            />
            <MdFullscreen
              style={{ height: 23, width: 23, cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
