import React from "react";
import { BiLibrary } from "react-icons/bi";
import { BsArrowRepeat, BsFillPinAngleFill } from "react-icons/bs";
import { CgMiniPlayer } from "react-icons/cg";
import { CiClock2, CiHeart, CiSearch } from "react-icons/ci";
import {
  FaFacebook,
  FaHeart,
  FaList,
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
import { PiArrowCircleDownLight, PiListThin } from "react-icons/pi";
import { SlOptions } from "react-icons/sl";
import { TbMicrophone2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import Header from "../Header/Header";
import InfoTrack from "./InfoTrack";
import FuncTrack from "./FuncTrack";
import Lyric from "./Lyric";
import Footer from "../Footer/Footer";

export default function Track() {
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate("/search");
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToArtist = () => {
    navigate("/artist");
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };

  const goToPlaylist = () => {
    navigate("/playlist");
  };

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
          <div
            style={{
              height: 2200,
              widows: 1616,
              border: 1,
              borderRadius: 15,
              marginTop: 10,
              marginRight: 10,
              background: "linear-gradient(to bottom, #044B4B, #121212)",
            }}
          >
            <div
              style={{
                height: 360,
                widows: 1616,
                background: "linear-gradient(to bottom, #044B4B, #032626)",
              }}
            >
              <div class="row">
                <Header />
              </div>
              <InfoTrack />
            </div>

            <FuncTrack />
            <Lyric />
            <Footer />
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
              gap: "15px ",
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
