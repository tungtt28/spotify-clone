import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAPlaylist } from "../../service/userService";
import { FaSpotify } from "react-icons/fa";

export default function InfoPlaylist() {
  const navigate = useNavigate();
  const [APlaylists, setAPlaylists] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    //call api
    getAPlaylists();
  }, []);

  const getAPlaylists = async () => {
    let res = await fetchAPlaylist(`${id}`);
    if (res && res.data) {
      setAPlaylists(res.data);
    }
  };

  console.log(APlaylists.artist);
  const goToArtist = (artistId) => {
    navigate(`/artist/${artistId}`);
  };

  return (
    <div
      class="row"
      style={{
        marginTop: 30,
        marginLeft: 15,
      }}
    >
      <div class="col-sm-2">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSM5oFLOld5BeWwp_KhMYuGi1hFR2qn_promDaJFMhfs_pQfzcz"
          alt=""
          style={{ border: 1, borderRadius: 5, cursor: "pointer" }}
        />
      </div>
      <div class="col-sm-10">
        <div class="row" style={{ color: "white", marginTop: 50 }}>
          <span style={{ height: 20, fontSize: 14 }}>Playlist</span>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            {APlaylists.name}
          </h1>
          <span style={{ color: "lightgray" }}>
            RPT MCK Với Wxrdie, Obito, Ngơ và nhiều hơn nữa
          </span>

          <span>
            <FaSpotify
              style={{
                height: 20,
                width: 20,
                color: "#1ED760",
              }}
            />{" "}
            <span style={{ cursor: "pointer" }}>Spotify</span> • 50 bài hát,{" "}
            <span style={{ color: "lightgray" }}> khoảng 2 giờ 30 phút</span>
          </span>
        </div>
      </div>
    </div>
  );
}
