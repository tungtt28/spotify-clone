import React, { useState } from "react";

export default function DesArtist() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      style={{
        width: 1428,
        height: 444,
        marginLeft: 15,
      }}
    >
      <h2
        style={{
          width: 806,
          height: 33,
          fontSize: 24,
          fontWeight: 700,
          color: "white",
        }}
      >
        Giới thiệu
      </h2>
      <div
        style={{
          width: 814,
          height: 408,
          background: "#282828",
          borderRadius: 10,
          cursor: "pointer",
        }}
        onClick={() => setOpenModal(true)}
      >
        <div
          style={{
            width: 675,
            height: 406,
          }}
        >
          <div
            style={{
              width: 206,
              height: 206,
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMq3pybPrpnAHN0GgdBgNt4qLyuvE199C1Q&usqp=CAU"
              alt=""
              style={{
                border: 1,
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow: "#000000 0px 4px 60px 0px",
                width: 205,
                height: 205,
                marginTop: 40,
                marginLeft: 40,
              }}
            />
          </div>
          <div
            style={{
              width: 598,
              height: 22,
              marginTop: 64,
              marginLeft: 40,
              color: "white",
              fontWeight: 700,
            }}
          >
            1.343.031 người nghe mỗi tháng
          </div>
          <div
            style={{
              width: 595,
              height: 66,
              marginTop: 10,
              marginLeft: 40,
              color: "white",
            }}
          >
            Low G is a rapper, songwriter and dancer. His real name is Nguyen
            Hoang Long. He was born in 1997 in Hanoi, Vietnam. First, he was a
            talented dancer from Last Fire Crew, a very popular dance crew in
            the Vietnamese hip-hop community....
          </div>
        </div>
      </div>
    </div>
  );
}
