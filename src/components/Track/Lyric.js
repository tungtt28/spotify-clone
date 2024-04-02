import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchASong } from "../../service/userService";

export default function Lyric() {
  const navigate = useNavigate();
  const goToArtist = () => {
    navigate("/artist");
  };
  const [song, setSong] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    //call api
    getSong();
  }, []);

  const getSong = async () => {
    let res = await fetchASong(`${id}`);
    if (res && res.data) {
      setSong(res.data);
    }
  };

  const artistName = song.artist ? song.artist.name : "Unknown";

  return (
    <div style={{ height: 1272, width: 1416 }}>
      <div class="row">
        <div style={{ height: 1272, width: 591, marginLeft: 25 }}>
          <h2 style={{ fontSize: 24, color: "white", fontWeight: 700 }}>
            Lời bài hát
          </h2>
          <div style={{ color: "#B7BABA", fontWeight: 500 }}>
            <p style={{ margin: 0, marginTop: 15 }}>
              Anh không tìm được ai nhìn như một cô thiên thần ngoài em
            </p>
            <p style={{ margin: 0 }}>
              Fuck luôn cả mấy cái nắm tay anh chỉ muốn được làm bạn của em
            </p>
            <p style={{ margin: 0 }}>
              Nhìn em đi dạo chơi với nó mà anh lại thấy trong lòng mình ghen
            </p>
            <p style={{ margin: 0 }}>
              Insta anh có tận nghìn like nhưng sao chỉ chờ đợi một người xem ah
            </p>
            <p style={{ margin: 0 }}>S cho sự si mê I cho sự im lặng</p>
            <p style={{ margin: 0 }}>
              M cho sự mê muội và P có nghĩa là phải lòng
            </p>
            <p style={{ margin: 0 }}>
              Nếu em là người yêu anh sẽ chiều đến mức em sinh hư
            </p>
            <p style={{ margin: 0 }}>
              Viết cho em nghìn lá thư khi ngồi trong phòng vệ sinh nữ
            </p>
            <p style={{ margin: 0 }}>Yeah ey viết cho em nghìn lá thư ah</p>
            <p style={{ margin: 0 }}>
              Anh chỉ muốn được là thằng kia khi em đang bận đi chơi cùng ai đó
            </p>
            <p style={{ margin: 0 }}>
              Nhìn em nuôi chó anh cũng muốn được cùng em đến nuôi nó
            </p>
            <p style={{ margin: 0 }}>
              Thấy em share nhạc anh cũng muốn ngồi cạnh em để nghe theo
            </p>
            <p style={{ margin: 0 }}>
              Nhạc em nghe như l nhưng vì mê em mà anh lại mê nó
            </p>
            <p style={{ margin: 0 }}>
              Fuck luôn mông với vú bọn nó twerk thì anh cũng đéo xem
            </p>
            <p style={{ margin: 0 }}>
              Anh gặp em lần đầu và thứ đầu tiên anh thấy là mắt em
            </p>
            <p style={{ margin: 0 }}>
              Anh cố nhìn xuống vú nhưng không hiểu sao cứ nhìn lên mắt em
            </p>
            <p style={{ margin: 0 }}>Anh chỉ nhìn thấy mắt em mắt mắt mắt em</p>
            <p style={{ margin: 0 }}>
              Anh không tìm được ai nhìn như một cô thiên thần ngoài em
            </p>
            <p style={{ margin: 0 }}>
              Fuck luôn cả mấy cái nắm tay anh chỉ muốn được làm bạn của em
            </p>
            <p style={{ margin: 0 }}>
              Nhìn em đi dạo chơi với nó mà anh lại thấy trong lòng mình ghen
            </p>
            <p style={{ margin: 0 }}>
              Insta anh có tận nghìn like nhưng sao chỉ chờ đợi một người xem ah
            </p>
            <p style={{ margin: 0 }}>S cho sự si mê I cho sự im lặng</p>
            <p style={{ margin: 0 }}>
              M cho sự mê muội và P có nghĩa là phải lòng
            </p>
            <p style={{ margin: 0 }}>
              Nếu em là người yêu anh sẽ chiều đến mức em sinh hư
            </p>
            <p style={{ margin: 0 }}>
              Viết cho em nghìn lá thư khi ngồi trong phòng vệ sinh nữ
            </p>
            <p style={{ margin: 0 }}>
              Nhìn ra ngoài cửa sổ cả thành phố đang sáng cùng nhau
            </p>
            <p style={{ margin: 0 }}>
              Anh nhìn hàng trăm toà nhà để đoán xem em đang đứng ở đâu
            </p>
            <p style={{ margin: 0 }}>
              Chắc chắc em đang ngồi ăn gà và em mải xem show Kpop
            </p>
            <p style={{ margin: 0 }}>Em ấy mải xem show Kpop</p>
            <p style={{ margin: 0 }}>
              Nhưng em xinh thì xinh thật em chọn con hươu làm linh vật
            </p>
            <p style={{ margin: 0 }}>
              Em thích ăn trứng muối phô mai và đi Nhật trong ngày sinh nhật
            </p>
            <p style={{ margin: 0 }}>
              Em sơn móng tay hình gấu trúc thích ăn mọi thứ với hạt tiêu
            </p>
            <p style={{ margin: 0 }}>
              Lúc nào cũng đến trường đúng lúc nhìn em cười ngại phát là yêu
            </p>
            <p style={{ margin: 0 }}>
              Okay đi ra ngoài sân và anh ngắm những vì sao
            </p>
            <p style={{ margin: 0 }}>
              Anh tưởng tượng em cũng ngồi gần đây và ngắm những vì sao
            </p>
            <p style={{ margin: 0 }}>
              Xong anh sẽ ra bắt chuyện trong lúc mình đang ngắm cùng nhau
            </p>
            <p style={{ margin: 0 }}>
              Và em sẽ nhận ra suốt bao lâu nay mình nói chuyện hợp nhau
            </p>
            <p style={{ margin: 0 }}>Nhưng thực ra ngoài đời em còn chả để ý</p>
            <p style={{ margin: 0 }}>
              Anh làm mấy bài kiểm tra được mười mà em vẫn còn chả để ý
            </p>
            <p style={{ margin: 0 }}>
              Anh nhảy hip hop ngày hôm qua ở trên trường vào sáng ngày khai
              giảng
            </p>
            <p style={{ margin: 0 }}>
              Nhưng em mải buôn với trai nên em chẳng để ý
            </p>
            <p style={{ margin: 0 }}>
              Còn anh để ý là anh không tìm được ai nhìn như một cô thiên thần
              ngoài em
            </p>
            <p style={{ margin: 0 }}>
              Fuck luôn cả mấy cái nắm tay anh chỉ muốn được làm bạn của em
            </p>
            <p style={{ margin: 0 }}>
              Nhìn em đi dạo chơi với nó mà anh lại thấy trong lòng mình ghen
            </p>
            <p style={{ margin: 0 }}>
              Insta anh có tận nghìn like nhưng sao chỉ chờ đợi một người xem ah
            </p>
            <p style={{ margin: 0 }}>S cho sự si mê I cho sự im lặng</p>
            <p style={{ margin: 0 }}>
              M cho sự mê muội và P có nghĩa là phải lòng
            </p>
            <p style={{ margin: 0 }}>
              Nếu em là người yêu anh sẽ chiều đến mức em sinh hư
            </p>
            <p style={{ margin: 0 }}>
              Viết cho em nghìn lá thư khi ngồi trong phòng vệ sinh nữ
            </p>
            <p style={{ margin: 0 }}>Yeah ey viết cho em nghìn lá thư ah</p>
          </div>
        </div>
        <div
          style={{
            height: 1272,
            width: 820,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            onClick={goToArtist}
            style={{ width: 391, height: 96, cursor: "pointer" }}
          >
            <div class="row">
              <img
                style={{
                  height: 80,
                  width: 100,
                  borderRadius: "50%",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMq3pybPrpnAHN0GgdBgNt4qLyuvE199C1Q&usqp=CAU"
                alt=""
              />

              <span
                class="row"
                style={{
                  width: 200,
                  height: 24,
                  color: "white",
                  fontWeight: 700,
                  marginTop: 15,
                }}
              >
                <span>Nghệ sĩ</span>
                <span>{artistName}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
