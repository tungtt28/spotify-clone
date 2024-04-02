import React from "react";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Type from "./Type";
import Suggestion from "./Suggestion";
import PopularRadio from "./PopularRadio";
import Collection from "./Collection";
import AudioPlay from "../AudioPlay/AudioPlay";

export default function Home() {
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
        <Sidebar />
        <div
          class="col-sm-10"
          style={{ background: "linear-gradient(to bottom, #1B3A43, #121212)" }}
        >
          <div class="row">
            <Header />
            <div
              style={{
                height: 1300,
                width: 1600,
                position: "relative",
                right: 30,
                top: 10,
              }}
            >
              <dir class="row" style={{ height: 1300, width: 1600 }}>
                <div>
                  <Type />
                  <Suggestion />
                  <PopularRadio />
                  <Collection />

                  <Footer />
                </div>
              </dir>
            </div>
          </div>
        </div>
      </div>
      <AudioPlay />
    </div>
  );
}
