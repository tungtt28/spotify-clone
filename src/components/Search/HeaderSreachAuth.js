import React from "react";
import { CiSearch } from "react-icons/ci";
import { GrNext, GrPrevious } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiArrowCircleDownLight } from "react-icons/pi";

export default function HeaderSreachAuth() {
  return (
    <div
      class="row-sm-12"
      style={{
        height: 64,
        width: 1606,
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        class="col-sm-4"
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          class="row"
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 15,
              border: "1px solid black",
              color: "white",
              background: "#131313",
              marginLeft: 25,

              cursor: "pointer",
            }}
          >
            <GrPrevious
              style={{
                width: 16,
                height: 16,
                position: "relative",
                right: 5,
              }}
            />
          </div>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 15,
              border: "1px solid black",
              color: "white",
              background: "#131313",
              marginLeft: 5,

              cursor: "pointer",
            }}
          >
            <GrNext
              style={{
                width: 16,
                height: 16,
                position: "relative",
                right: 5,
              }}
            />
          </div>
        </div>
        <div style={{ marginLeft: 20, position: "relative" }}>
          <input
            type="text"
            style={{
              background: "#242424",
              width: 364,
              height: 48,
              border: 2,
              borderRadius: 25,
              color: "white",
              paddingLeft: 40,
              fontSize: 14,
            }}
            placeholder="Bạn muốn phát nội dung gì?"
          />
          <CiSearch
            style={{
              color: "white",
              height: 25,
              width: 25,
              position: "absolute",
              left: 5,
              top: 12,
            }}
          />
        </div>
      </div>
      <div class="col-sm-5"></div>
      <div
        class="col-sm-3"
        style={{ position: "relative", right: 10, marginTop: 7 }}
      >
        <div class="row">
          <div class="col-sm-4"></div>
          <div
            class="col-sm-6"
            style={{
              height: 33,
              width: 165,
              border: 1,
              borderRadius: 15,
              background: "#080808",
              color: "white",
              fontWeight: 700,
              fontSize: 14,
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 5,
              position: "relative",
              right: 7,
              cursor: "pointer",
            }}
          >
            <div>
              <PiArrowCircleDownLight style={{ height: 23, width: 23 }} />
              <span>Cài đặt Ứng dụng</span>
            </div>
          </div>
          <div class="col-sm-1">
            <span
              style={{
                height: 30,
                width: 30,
                border: 1,
                borderRadius: "50%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                background: "black",
                position: "relative",
                right: 12,
                cursor: "pointer",
              }}
            >
              <IoIosNotificationsOutline
                style={{ color: "white", height: 23, width: 23 }}
              />
            </span>
          </div>
          <div class="col-sm-1">
            <span
              style={{
                height: 30,
                width: 30,
                border: 1,
                borderRadius: "50%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                right: 11,
                cursor: "pointer",
              }}
            >
              <img
                src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/409083243_2162940817392337_7739851178532311169_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH2j29LSktLRo4othJT2NvyuBxgaekW4Ra4HGBp6RbhFrgPgRC3WZkOSJ8e4AOv6u31uZRlhDJJN4hktJ94hHXd&_nc_ohc=x7tqibsweG4AX9X3I-S&_nc_ht=scontent.fhan19-1.fna&oh=00_AfCOSM0dkKcJvjQwJJqIyGn9GIfrVaZ-nKdCOGEcmc3acw&oe=65EAF006"
                alt=""
                style={{
                  height: 28,
                  width: 28,
                  border: 1,
                  borderRadius: "50%",
                  marginLeft: 10,
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
