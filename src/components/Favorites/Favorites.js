import React from "react";
import SBAddFavorites from "../SideBar/SBAddFavorites";
import Header from "../Header/Header";
import InfoFavorites from "./InfoFavorites";
import FunctionF from "./FunctionF";
import Footer from "../Footer/Footer";
import AudioPlay from "../AudioPlay/AudioPlay";
import SongFavorites from "./SongFavorites";

export default function Favorites() {
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
          style={{ background: "linear-gradient(to bottom, #523BA0, #121212" }}
        >
          <div
            style={{
              height: 1000,
              width: 1616,
              border: 1,
              borderRadius: 15,
              marginTop: 10,
              marginRight: 10,
              background: "linear-gradient(to bottom, #523BA0, #121212)",
            }}
          >
            <div
              style={{
                height: 360,
                width: 1616,
                background: "linear-gradient(to bottom, #533CA1, #291D50)",
                position: "relative",
                right: 11,
              }}
            >
              <div class="row">
                <Header />
              </div>
              <InfoFavorites />
            </div>
            <FunctionF />
            <SongFavorites />

            <Footer />
          </div>
        </div>
      </div>
      <AudioPlay />
    </div>
  );
}
