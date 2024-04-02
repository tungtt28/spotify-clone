import React, { useEffect, useState } from "react";
import { BiLibrary } from "react-icons/bi";
import { BsArrowRepeat, BsFillPinAngleFill } from "react-icons/bs";
import { CgMiniPlayer } from "react-icons/cg";
import { CiHeart, CiSearch } from "react-icons/ci";
import {
  FaFacebook,
  FaList,
  FaPlayCircle,
  FaPlus,
  FaRandom,
  FaTwitter,
} from "react-icons/fa";
import { GrLinkNext, GrNext, GrPrevious } from "react-icons/gr";
import { HiMiniSpeakerWave, HiOutlineQueueList } from "react-icons/hi2";
import {
  IoIosCheckmarkCircle,
  IoIosNotificationsOutline,
  IoLogoInstagram,
} from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { LuMonitorSpeaker, LuPlaySquare } from "react-icons/lu";
import { MdFullscreen, MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { PiArrowCircleDownLight, PiListThin } from "react-icons/pi";
import { SlOptions } from "react-icons/sl";
import { TbMicrophone2 } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAnArtist } from "../../service/userService";
import { Ms } from "../Modal/modalShowInfoArtist";
import Sidebar from "../SideBar/Sidebar";
import Header from "../Header/Header";
import InfoArtist from "./InfoArtist";
import AudioPlay from "../AudioPlay/AudioPlay";
import Footer from "../Footer/Footer";
import DesArtist from "./DesArtist";
import FuncArtist from "./FuncArtist";
import SongArtist from "./SongArtist";
import ChooseArtist from "./ChooseArtist";

export default function Artist() {
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate("/search");
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToPlaylist = () => {
    navigate("/playlist");
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };

  const GoToTrack = (id) => {
    navigate(`/track/${id}`);
  };

  const onClickGoToTrack = () => {
    if (AnArtist && AnArtist.song && AnArtist.song.length > 0) {
      const songIds = AnArtist.song.map((song) => song._id); // Lấy _id của tất cả các bài hát
      // Xử lý songIds theo nhu cầu của bạn
      GoToTrack(songIds);
    } else {
      console.error("No songs available for this artist.");
      // Xử lý trường hợp không có bài hát nếu cần
    }
  };

  const [AnArtist, setAnArtist] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    //call api
    getAnArtist();
  }, []);
  const getAnArtist = async () => {
    let res = await fetchAnArtist(`${id}`);
    if (res && res.data) {
      setAnArtist(res.data);
    }
  };

  const [openModal, setOpenModal] = useState(false);
  console.log(AnArtist);
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
              height: 1700,
              widows: 1616,
              border: 1,
              borderRadius: 15,
              marginTop: 10,
              marginRight: 10,
              background: "linear-gradient(to bottom, #523BA0, #121212)",
            }}
          >
            <div
              style={{
                height: 340,
                widows: 1616,
                background: "linear-gradient(to bottom, #555555, #2B2B2B)",
              }}
            >
              <Header />
              <InfoArtist />
            </div>
            <div
              style={{
                background: "linear-gradient(to bottom, #222222, #121212)",
              }}
            >
              <FuncArtist />

              <div style={{ height: 383, width: 1550, marginLeft: 15 }}>
                <div class="row">
                  <SongArtist />
                  <ChooseArtist />
                </div>
              </div>
              <DesArtist />
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <AudioPlay />
      <Ms open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
