import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaPlayCircle } from "react-icons/fa";
import { PiListThin } from "react-icons/pi";
import { SlOptions } from "react-icons/sl";

export default function Function() {
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
        <CiCirclePlus
          style={{
            height: 40,
            width: 40,
            color: "white",
            marginLeft: 35,
            cursor: "pointer",
          }}
        />
        <SlOptions
          style={{
            height: 30,
            width: 30,
            color: "white",
            marginLeft: 25,
            cursor: "pointer",
          }}
        />
      </span>

      <span style={{ color: "white", fontSize: 14, cursor: "pointer" }}>
        Rút gọn <PiListThin style={{ height: 20, width: 20 }} />
      </span>
    </div>
  );
}
