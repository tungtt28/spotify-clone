import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiArrowCircleDownLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
    localStorage.removeItem("email");
    navigate("/register");
  };
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
        <div class="row">
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 15,
              border: "1px solid black",
              color: "white",
              background: "#131313",
              marginLeft: 35,
              marginTop: 20,
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
              marginTop: 20,
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
      </div>
      <div class="col-sm-5">
        <div
          style={{
            height: 33,
            width: 165,
            border: 1,
            borderRadius: 15,
            background: "white",
            color: "black",
            fontWeight: 700,
            fontSize: 14,
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            right: 7,
            cursor: "pointer",
          }}
          onClick={handelLogout}
        >
          <span>Đăng xuất</span>
        </div>
      </div>
      <div
        class="col-sm-3"
        style={{ position: "relative", right: 10, marginTop: 7 }}
      >
        <div class="row">
          <div
            class="col-sm-5"
            style={{
              height: 33,
              width: 165,
              border: 1,
              borderRadius: 15,
              background: "white",
              color: "black",
              fontWeight: 700,
              fontSize: 14,
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              right: 7,
              cursor: "pointer",
            }}
          >
            <span>Khám phá Premium</span>
          </div>
          <div
            class="col-sm-5"
            style={{
              height: 33,
              width: 165,
              border: 1,
              borderRadius: 15,
              background: "#0F0F0F",
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
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
