import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlaylist } from "../../service/userService";

export default function Suggestion() {
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

  console.log(listPlaylists);
  return (
    <div class="row" style={{ gap: "15px 20px", marginLeft: 1 }}>
      {listPlaylists &&
        listPlaylists.length > 0 &&
        listPlaylists.slice(7, 15).map((item) => {
          return (
            <div
              className="col-sm-3"
              key={item._id} // Assuming each playlist item has a unique ID
              style={{
                height: 64,
                width: 371,
                border: 1,
                borderRadius: 5,
                background: "#27383E",
                cursor: "pointer",
              }}
              onClick={() => goToPlaylist(item._id)} // Pass playlistId as an argument
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTnJmMjI2UGMO49MFICgDp3XsI1-sxjHKRypZabs20g&s"
                alt=""
                style={{
                  height: 64,
                  width: 64,
                  border: 1,
                  borderRadius: 5,
                  position: "relative",
                  right: 10,
                }}
              />
              <span
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                {item.name}
              </span>
            </div>
          );
        })}
    </div>
  );
}
