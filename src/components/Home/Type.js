import React from "react";

export default function Type() {
  return (
    <div style={{ height: 56 }}>
      <div
        style={{
          height: 40,
          width: 217,
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: 32,
            width: 63,
            marginLeft: 5,
            borderRadius: 25,
            background: "#2E2E2E",
            color: "white",
            fontSize: 14,
            lineHeight: "32px",
            cursor: "pointer",
          }}
        >
          Tất cả
        </div>
        <div
          style={{
            height: 32,
            width: 63,
            marginLeft: 10,
            borderRadius: 25,
            background: "#2E2E2E",
            color: "white",
            fontSize: 14,
            lineHeight: "32px",
            cursor: "pointer",
          }}
        >
          Nhạc
        </div>
        <div
          style={{
            height: 32,
            width: 83,
            marginLeft: 10,
            borderRadius: 25,
            background: "#2E2E2E",
            color: "white",
            fontSize: 14,
            lineHeight: "32px",
            cursor: "pointer",
          }}
        >
          Podcasts
        </div>
      </div>
    </div>
  );
}
