import React, { useRef, useState } from "react";
import { FaPlayCircle, FaRandom } from "react-icons/fa";

import { CiHeart } from "react-icons/ci";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { LuPlaySquare } from "react-icons/lu";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { LuMonitorSpeaker } from "react-icons/lu";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { CgMiniPlayer } from "react-icons/cg";
import { MdFullscreen } from "react-icons/md";
import audios from "../audio";

export default function AudioPlay() {
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };
  return (
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
            {audios[audioIndex].title}
          </span>
          <span
            style={{
              color: "gray",
              fontSize: 12,
              fontWeight: "bolder",
              cursor: "pointer",
            }}
          >
            {audios[audioIndex].artist}
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
              onClick={() => setAudioIndex((audioIndex - 1) % audios.length)}
            />
            <FaPlayCircle
              style={{
                height: 33,
                width: 33,
                marginRight: 20,
                cursor: "pointer",
              }}
              onClick={handlePausePlayClick}
            />
            <MdSkipNext
              style={{
                height: 30,
                width: 30,
                marginRight: 20,
                color: "gray",
                cursor: "pointer",
              }}
              onClick={() => setAudioIndex((audioIndex + 1) % audios.length)}
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
          <LuPlaySquare style={{ height: 23, width: 23, cursor: "pointer" }} />
          <TbMicrophone2 style={{ height: 23, width: 23, cursor: "pointer" }} />
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
          <CgMiniPlayer style={{ height: 23, width: 23, cursor: "pointer" }} />
          <MdFullscreen style={{ height: 23, width: 23, cursor: "pointer" }} />
          <audio
            ref={audioRef}
            src={audios[audioIndex].src}
            onLoadedData={handleLoadedData}
            onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
            onEnded={() => setPlay(false)}
          />
        </div>
      </div>
    </div>
  );
}
