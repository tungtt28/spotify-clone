import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { fetchAllPlaylist } from "../../service/userService.js";

export default function ContentRegister() {
  const { t } = useTranslation();

  const [listPlaylists, setListPlaylists] = useState([]);

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
    <div
      class="row"
      style={{
        height: 392,
        width: "100%",
        background: "linear-gradient(to bottom, #1F1F1F, #121212)",
      }}
    >
      <div class="row" style={{ height: 40 }}>
        <div
          class="col-sm-11"
          style={{
            color: "white",
            fontSize: 23,
            fontWeight: 700,
            height: 40,
          }}
        >
          <span className="hover-letter" style={{ marginLeft: 15 }}>
            {t("register.list")}
          </span>
        </div>
        <div
          class="col-sm-1"
          style={{
            color: "gray",
            fontSize: 16,
            fontWeight: 700,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span className="hover-letter" style={{ color: "gray" }}>
            {t("register.all")}
          </span>
        </div>
      </div>
      {listPlaylists &&
        listPlaylists.length > 0 &&
        listPlaylists.slice(0, 7).map((item) => {
          return (
            <div
              class="row"
              style={{
                width: 183,
                height: 266,
                background: "#181818",
                border: "1px",
                marginLeft: 25,
                marginBottom: 83,
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <img
                src="https://cdn.dribbble.com/users/406097/screenshots/16700960/media/eb025f63696f45511650b4b97189e28f.jpg?resize=450x338&vertical=center"
                alt=""
                style={{
                  height: "60%",
                  width: "90%",
                  borderRadius: 5,
                  marginTop: 15,
                  marginBottom: 83,
                  padding: 0,
                  marginLeft: 8,
                }}
              />

              <span
                style={{
                  position: "relative",
                  bottom: 70,
                  color: "white",
                  padding: 0,
                  marginLeft: 6,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontWeight: 500,
                }}
              >
                {item.name}
              </span>
              <span
                style={{
                  position: "relative",
                  bottom: 70,
                  color: "gray",
                  padding: 0,
                  fontSize: 14,
                  fontWeight: 500,
                  marginLeft: 6,
                }}
              >
                chill beats, lofi vibes, new tracks every...
              </span>
            </div>
          );
        })}
    </div>
  );
}
