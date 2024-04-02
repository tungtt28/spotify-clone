import React, { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAPlaylist } from "../../service/userService";

export default function Song() {
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

  const goToArtist = (artistId) => {
    navigate(`/artist/${artistId}`);
  };

  // Đảm bảo APlaylists đã được cập nhật trước khi gọi goToArtist
  const onClickGoToArtist = () => {
    if (APlaylists && APlaylists.artist && APlaylists.artist._id) {
      const artistId = APlaylists.artist._id;
      goToArtist(artistId);
    } else {
      console.error("Artist ID is not available.");
      // Xử lý trường hợp không có ID nghệ sĩ ở đây nếu cần
    }
  };
  const onClickGoToTrack = (id) => {
    navigate(`/track/${id}`);
  };

  console.log(APlaylists);
  console.log(APlaylists.artist);

  return (
    <div style={{ height: 187, widows: 1616 }}>
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
      {APlaylists.song &&
        APlaylists.song.length > 0 &&
        APlaylists.song.map((item, index) => {
          return (
            <div class="row" style={{ marginLeft: 15, color: "white" }}>
              <span class="col-sm-1">{index + 1}</span>
              <span
                class="col-sm-3"
                style={{ cursor: "pointer" }}
                onClick={() => onClickGoToTrack(item._id)}
              >
                {item.name}
              </span>
              <span
                class="col-sm-2"
                style={{ cursor: "pointer" }}
                onClick={onClickGoToArtist}
              >
                {APlaylists.artist && APlaylists.artist.name}
              </span>
              <span class="col-sm-3" style={{ cursor: "pointer" }}>
                {item.name}
              </span>
              <span class="col-sm-2">3 giờ trước</span>
              <span class="col-sm-1" style={{ position: "relative", right: 5 }}>
                2:41
              </span>
            </div>
          );
        })}
    </div>
  );
}
