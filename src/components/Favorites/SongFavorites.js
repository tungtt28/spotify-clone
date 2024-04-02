import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SongFavorites() {
  const navigate = useNavigate();

  const goToArtist = () => {
    navigate("/artist");
  };

  const goToTrack = () => {
    navigate("/track");
  };

  return (
    <div style={{ height: 87, widows: 1616 }}>
      <div class="row" style={{ marginLeft: 15, color: "lightgray" }}>
        <span class="col-sm-1">#</span>
        <span class="col-sm-3">Tiêu đề</span>
        <span class="col-sm-2">Nghệ sĩ</span>
        <span class="col-sm-3">Album</span>
        <span class="col-sm-2">Ngày thêm</span>
        <span class="col-sm-1">
          <CiClock2 />
        </span>
      </div>

      <hr style={{ color: "gray", marginBottom: 10, marginTop: 5 }} />
      <div class="row" style={{ marginLeft: 15, color: "white" }}>
        <span class="col-sm-1">1</span>
        <span class="col-sm-3" onClick={goToTrack}>
          Simp Gái 808
        </span>
        <span class="col-sm-2" onClick={goToArtist}>
          Low G
        </span>
        <span class="col-sm-3">Simp Gái 808</span>
        <span class="col-sm-2">3 giờ trước</span>
        <span class="col-sm-1">
          <FaHeart
            style={{
              color: "#1ED760",
              position: "relative",
              right: 50,
            }}
          />{" "}
          <span
            style={{
              position: "relative",
              right: 27,
            }}
          >
            2:41
          </span>
        </span>
      </div>
    </div>
  );
}
