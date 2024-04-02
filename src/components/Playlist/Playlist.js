import React from "react";
import Footer from "../Footer/Footer";
import SBAddFavorites from "../SideBar/SBAddFavorites";
import Header from "../Header/Header";
import InfoPlaylist from "./InfoPlaylist";
import AudioPlay from "../AudioPlay/AudioPlay";
import Function from "./Function";
import Song from "./Song";

export default function Playlist() {
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
        <SBAddFavorites />
        <div
          class="col-sm-10"
          style={{
            background: "linear-gradient(to bottom, #811414, #121212)",
            border: 1,
            borderRadius: 15,
          }}
        >
          <div
            style={{
              height: 1100,
              width: 1616,
              marginTop: 10,
              marginRight: 10,
            }}
          >
            <div
              style={{
                height: 360,
                width: 1616,
                position: "relative",
                right: 11,
                background: "linear-gradient(to bottom, #811414, #451313)",
              }}
            >
              <div class="row">
                <Header />
              </div>
              <InfoPlaylist />
            </div>
            <Function />
            <Song />
            <Footer />
          </div>
        </div>
      </div>
      <AudioPlay />
    </div>
  );
}
