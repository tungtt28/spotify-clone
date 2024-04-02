import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { PiListThin } from "react-icons/pi";
import { SlOptions } from "react-icons/sl";

export default function FuncArtist() {
  return (
    <div
      style={{
        height: 104,
        width: 1550,
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <div
        class="row"
        style={{
          width: 400,
          display: "flex",

          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div class="col-sm-4">
          <FaPlayCircle
            style={{
              height: 60,
              width: 60,
              color: "#1ED760",
              marginLeft: 25,
              cursor: "pointer",
            }}
          />
        </div>
        <div
          class="col-sm-4"
          style={{
            height: 30,
            width: 90,
            border: "1px solid gray",
            borderRadius: 25,
            color: "white",
            display: "flex",

            textAlign: "center",
            alignItems: "center",
            marginLeft: 20,
            cursor: "pointer",
          }}
        >
          <span> Theo dõi</span>
        </div>

        <div class="col-sm-4">
          <SlOptions
            style={{
              height: 25,
              width: 25,
              color: "white",

              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <span style={{ color: "white", fontSize: 14, cursor: "pointer" }}>
        Rút gọn <PiListThin style={{ height: 20, width: 20 }} />
      </span>
    </div>
  );
}
