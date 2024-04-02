import React from "react";

export default function ChooseArtist() {
  return (
    <div style={{ width: 744, height: 383 }}>
      <div style={{ width: 598, height: 142 }}>
        <h2
          style={{
            width: 806,
            height: 33,
            fontSize: 24,
            fontWeight: 700,
            color: "white",
          }}
        >
          Lựa chọn của nghệ sĩ
        </h2>
        <div class="row" style={{ width: 387, height: 88 }}>
          <span class="col-4" style={{ width: 110 }}>
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6GH2E59lTfX2w3O8dwuPof034LtfSI193efe18mErwdRLawhL"
              alt=""
              style={{
                width: 88,
                height: 88,
                borderRadius: 15,
                cursor: "pointer",
              }}
            />
          </span>

          <span class="col-8">
            <span class="row">
              <span
                style={{
                  border: 1,
                  borderRadius: 25,
                  background: "white",
                  width: 150,
                  cursor: "pointer",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMq3pybPrpnAHN0GgdBgNt4qLyuvE199C1Q&usqp=CAU"
                  alt=""
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: "50%",
                    position: "relative",
                    right: 8,
                    bottom: 1,
                  }}
                />
                <span>new trackk</span>
              </span>
              <span
                style={{
                  color: "white",
                  fontWeight: 700,
                  marginTop: 10,
                  cursor: "pointer",
                }}
              >
                pho real
              </span>
              <span style={{ color: "gray", fontSize: 13 }}>Đĩa đơn</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
