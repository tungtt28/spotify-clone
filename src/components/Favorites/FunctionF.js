import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { PiListThin } from "react-icons/pi";

export default function FunctionF() {
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
      <span>
        <FaPlayCircle
          style={{
            height: 60,
            width: 60,
            color: "#1ED760",
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
