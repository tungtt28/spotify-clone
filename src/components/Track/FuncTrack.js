import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaPlayCircle } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";

export default function FuncTrack() {
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
      <span style={{ gap: 5 }}>
        <FaPlayCircle
          style={{
            height: 60,
            width: 60,
            color: "#1ED760",
            marginLeft: 25,
            cursor: "pointer",
          }}
        />
        <CiHeart
          style={{
            height: 40,
            width: 40,
            color: "gray",
            marginLeft: 25,
            cursor: "pointer",
          }}
        />
        <SlOptions
          style={{
            height: 30,
            width: 30,
            color: "gray",
            marginLeft: 25,
            cursor: "pointer",
          }}
        />
      </span>
    </div>
  );
}
