import React, { useEffect, useState } from "react";
import HeaderSreachAuth from "./HeaderSreachAuth";
import HeaderSearch from "./HeaderSearch";
import Modal from "../Modal/Modal.js";
import { useSelector } from "react-redux";
import Sidebar from "../SideBar/Sidebar.js";
import Footer from "../Footer/Footer.js";
import AudioPlay from "../AudioPlay/AudioPlay.js";
import { fetchAlCategory } from "../../service/userService.js";

export default function Search() {
  const [openModal, setOpenModal] = useState(false);

  const user = useSelector((state) => state.data.user.user);
  console.log(user);
  const [listCategory, setListCategory] = useState([]);
  useEffect(() => {
    //call api
    getCategory();
  }, []);

  const getCategory = async () => {
    let res = await fetchAlCategory();
    if (res && res.data) {
      setListCategory(res.data);
    }
  };

  console.log(listCategory);
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
        <Sidebar />
        <div class="col-sm-10" style={{ background: "#121212" }}>
          <div class="row" style={{ height: 1611, width: 1606 }}>
            {user ? <HeaderSreachAuth /> : <HeaderSearch />}
            <div
              class="row-sm-12"
              style={{ height: 1611, width: 1606, marginTop: 30 }}
            >
              <div>
                <h2
                  style={{
                    fontSize: 23,
                    fontWeight: 700,
                    color: "white",
                    height: 40,
                  }}
                >
                  Duyệt tìm tất cả
                </h2>
              </div>
              <div class="row" style={{ gap: "25px 12px" }}>
                {listCategory &&
                  listCategory.length > 0 &&
                  listCategory.map((item) => {
                    return (
                      <div
                        style={{
                          height: 175,
                          cursor: "pointer",
                          width: 175,
                          border: 1,
                          borderRadius: 8,
                          background: "#DC148C",
                          overflow: "hidden",
                          marginLeft: 10,
                          display: "inline-block", // Đặt display thành inline-block
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 22,
                            fontWeight: 700,
                            padding: "5px",
                            color: "white",
                            position: "relative",
                            top: 3,

                            width: "100%", // Thay đổi width thành "100%"
                            height: 80,
                            display: "block", // Đặt display thành block
                          }}
                        >
                          {item.name}
                        </span>
                        <img
                          style={{
                            boxShadow: "0 2px 4px 0",
                            color: "white",
                            width: 95, // Đặt lại width thành 113
                            height: 95, // Đặt lại height thành 113
                            transform: "rotate(27deg)",
                            position: "absolute",
                            left: 92,
                            top: 85,
                          }}
                          src="https://upload.wikimedia.org/wikipedia/vi/8/81/Ros%C3%A9_-_R.png"
                          alt=""
                        />
                      </div>
                    );
                  })}
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </div>
      <AudioPlay />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
