import React from "react";
import { BiLibrary } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const goToSearch = () => {
    navigate("/search");
  };

  const goToHome = () => {
    navigate("/");
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
              <div style={{ padding: 8, cursor: "pointer" }} onClick={goToHome}>
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
              <div
                style={{ padding: 8, marginTop: 10, cursor: "pointer" }}
                onClick={goToSearch}
              >
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
                <div style={{ height: 476, position: "relative", right: 10 }}>
                  <div
                    style={{
                      height: 155,
                      width: 278,
                      border: "2px",
                      background: "#242424",
                      borderRadius: "15px",
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
  );
}
