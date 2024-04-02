import React from "react";
import { BiLibrary } from "react-icons/bi";
import { BsFillPinAngleFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaList, FaPlus } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function SBAddFavorites() {
  const navigate = useNavigate();
  const goToSearch = () => {
    navigate("/search");
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };
  return (
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
              <div style={{ padding: 8 }}>
                <IoHome
                  style={{
                    height: 30,
                    width: 30,
                    color: "lightgray",
                    marginTop: 10,
                    cursor: "pointer",
                  }}
                  onClick={goToHome}
                />
                <span
                  style={{
                    color: "lightgray",
                    fontWeight: 500,
                    marginLeft: 20,
                    position: "relative",
                    top: 10,
                    cursor: "pointer",
                  }}
                  onClick={goToHome}
                >
                  Trang Chủ
                </span>
              </div>
            </div>
            <div
              class="col-sm-12"
              style={{ height: 40, width: 273, marginLeft: 20 }}
            >
              <div style={{ padding: 8, marginTop: 10 }}>
                <CiSearch
                  style={{
                    height: 30,
                    width: 30,
                    color: "lightgray",
                    marginTop: 8,
                    cursor: "pointer",
                  }}
                  onClick={goToSearch}
                />
                <span
                  style={{
                    color: "lightgray",
                    fontWeight: 500,
                    marginLeft: 20,
                    position: "relative",
                    top: 7,
                    cursor: "pointer",
                  }}
                  onClick={goToSearch}
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
                      marginLeft: 190,
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
                <div style={{ height: 48 }}>
                  <div
                    style={{
                      height: 32,
                      width: 69,
                      borderRadius: 25,
                      border: 1,
                      background: "#232323",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,

                        color: "white",
                      }}
                    >
                      Playlist
                    </span>
                  </div>
                </div>

                <div style={{ height: 633, width: 270 }}>
                  <div
                    style={{
                      height: 34,
                      color: "lightgray",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <CiSearch
                      style={{ height: 23, width: 23, cursor: "pointer" }}
                    />
                    <span
                      style={{
                        position: "relative",
                        right: 20,
                        fontSize: 14,
                        cursor: "pointer",
                      }}
                    >
                      Gần đây{" "}
                      <FaList style={{ marginBottom: 3, marginLeft: 3 }} />
                    </span>
                  </div>
                  <div
                    style={{
                      height: 64,
                      width: 260,
                      border: 1,
                      borderRadius: 5,
                      background: "#232323",
                      display: "flex",

                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBktaUPyiczaccrGNNXViepFV6FTSVllXPg&usqp=CAU"
                      alt=""
                      style={{
                        height: 45,
                        width: 45,
                        border: 1,
                        borderRadius: 5,
                        marginLeft: 10,
                      }}
                    />
                    <div
                      class="row"
                      style={{ width: 200, cursor: "pointer" }}
                      onClick={goToFavorites}
                    >
                      <span
                        style={{
                          color: "white",

                          fontWeight: 700,
                          marginLeft: 10,
                        }}
                      >
                        Bài hát đã thích
                      </span>
                      <span
                        style={{
                          color: "#a7a7a7",

                          marginLeft: 10,
                          fontSize: 13,
                        }}
                      >
                        <BsFillPinAngleFill
                          style={{ color: "#1ED760", marginBottom: 5 }}
                        />{" "}
                        Danh sách phát • <span>1 bài hát</span>
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
  );
}
