import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlaylist } from "../../service/userService";

export default function Collection() {
  const navigate = useNavigate();
  const [listPlaylists, setListPlaylists] = useState([]);

  const goToPlaylist = (id) => {
    navigate(`/playlist/${id}`);
  };
  useEffect(() => {
    //call api
    getPlaylists();
  }, []);

  const getPlaylists = async () => {
    let res = await fetchAllPlaylist();
    if (res && res.data) {
      setListPlaylists(res.data);
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: 39,
          marginTop: 30,
        }}
      >
        <span
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "white",
            cursor: "pointer",
          }}
        >
          Tuyển tập hàng đầu cho bạn
        </span>
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "gray",
            cursor: "pointer",
          }}
        >
          Hiện tất cả
        </span>
      </div>
      <div class="row" style={{ gap: "15px" }}>
        {listPlaylists &&
          listPlaylists.length > 0 &&
          listPlaylists.slice(7, 14).map((item) => {
            return (
              <div
                key={item._id}
                style={{
                  height: 280,
                  width: 198,
                  background: "#181818",
                  marginLeft: 10,
                  marginTop: 6,
                  cursor: "pointer",
                  borderRadius: 10,
                }}
                onClick={() => goToPlaylist(item._id)}
              >
                <div
                  class="row"
                  style={{
                    height: 270,
                    width: 198,
                    marginTop: 15,
                  }}
                >
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSM5oFLOld5BeWwp_KhMYuGi1hFR2qn_promDaJFMhfs_pQfzcz"
                    alt=""
                    style={{
                      height: 170,
                      width: 198,
                    }}
                  />
                  <span
                    style={{
                      width: 150,
                      height: 26,
                      color: "white",
                      fontWeight: 700,
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    style={{
                      width: 170,
                      height: 26,
                      color: "lightgray",
                      fontSize: 14,
                      position: "relative",
                      bottom: 15,
                    }}
                  >
                    Với Wxrdie, Obito, Ngơ và nhiều hơn nữa
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
