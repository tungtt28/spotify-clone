import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAnArtist } from "../../service/userService";

export default function SongArtist() {
  const navigate = useNavigate();
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
  return (
    <div style={{ width: 806, height: 383 }}>
      <h2
        style={{
          width: 806,
          height: 33,
          fontSize: 24,
          fontWeight: 700,
          color: "white",
        }}
      >
        Phổ biến
      </h2>
      {AnArtist.song &&
        AnArtist.song.length > 0 &&
        AnArtist.song.slice(0, 5).map((item, index) => {
          return (
            <div
              class="row"
              style={{
                height: 56,
                display: "flex",
                justifyContent: "center",

                alignItems: "center",
                color: "lightgray",
              }}
            >
              <span
                class="col-sm-1"
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    marginLeft: 40,
                  }}
                >
                  {index + 1}
                </span>
              </span>
              <span class="col-sm-6">
                <img
                  style={{ height: 45, width: 45 }}
                  src="https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F0164fdd34fb7bd7489666962ee39ef66.467x481x1.png"
                  alt=""
                />
                <span
                  style={{ marginLeft: 5, cursor: "pointer" }}
                  onClick={onClickGoToTrack}
                >
                  {item.name}
                </span>
              </span>
              <span class="col-sm-3">
                <span style={{ fontSize: 14 }}>12.641.154</span>
              </span>
              <span class="col-sm-2">
                <span style={{ marginLeft: 25, fontSize: 14 }}>2:41</span>
              </span>
            </div>
          );
        })}

      <div
        style={{
          height: 52,
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          color: "gray",
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        <span style={{ marginLeft: 15 }}>Xem thêm</span>
      </div>
    </div>
  );
}
