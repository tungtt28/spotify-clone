import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useParams } from "react-router-dom";
import { fetchAnArtist } from "../../service/userService";

export default function InfoArtist() {
  const [AnArtist, setAnArtist] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    //call api
    getAnArtist();
  }, []);
  const getAnArtist = async () => {
    let res = await fetchAnArtist(`${id}`);
    if (res && res.data) {
      setAnArtist(res.data);
    }
  };

  console.log(AnArtist);
  return (
    <div
      class="row"
      style={{
        marginTop: 30,
        marginLeft: 15,
      }}
    >
      <div class="col-sm-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMq3pybPrpnAHN0GgdBgNt4qLyuvE199C1Q&usqp=CAU"
          alt=""
          style={{
            border: 1,
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "#000000 0px 4px 60px 0px",
            width: 232,
            height: 232,
          }}
        />
      </div>
      <div class="col-sm-10">
        <div class="row" style={{ color: "white", marginTop: 50 }}>
          <span>
            <IoIosCheckmarkCircle
              style={{
                height: 30,
                width: 30,
                color: "green",
                marginRight: 5,
              }}
            />
            <span style={{ fontSize: 15 }}>Nghệ sĩ được xác minh</span>
          </span>
          <h1
            style={{
              fontSize: 85,
              fontWeight: "bold",
              height: 92,
              lineHeight: "92px", // Đặt line-height bằng giá trị height của thẻ
              margin: 0, // Xóa margin mặc định của thẻ h1
            }}
          >
            {AnArtist.name}
          </h1>

          <span style={{ marginTop: 5, marginLeft: 5 }}>
            1.343.031 người nghe hàng tháng
          </span>
        </div>
      </div>
    </div>
  );
}
