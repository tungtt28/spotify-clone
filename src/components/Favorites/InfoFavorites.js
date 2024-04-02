import React from "react";

export default function InfoFavorites() {
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBktaUPyiczaccrGNNXViepFV6FTSVllXPg&usqp=CAU"
          alt=""
          style={{ border: 1, borderRadius: 5, cursor: "pointer" }}
        />
      </div>
      <div class="col-sm-10">
        <div class="row" style={{ color: "white", marginTop: 70 }}>
          <span style={{ height: 20, fontSize: 14 }}>Playlist</span>
          <h1 style={{ fontSize: 80, fontWeight: 900 }}>Bài hát đã thích</h1>

          <span>
            <img
              src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/409083243_2162940817392337_7739851178532311169_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH2j29LSktLRo4othJT2NvyuBxgaekW4Ra4HGBp6RbhFrgPgRC3WZkOSJ8e4AOv6u31uZRlhDJJN4hktJ94hHXd&_nc_ohc=x7tqibsweG4AX9X3I-S&_nc_ht=scontent.fhan19-1.fna&oh=00_AfCOSM0dkKcJvjQwJJqIyGn9GIfrVaZ-nKdCOGEcmc3acw&oe=65EAF006"
              alt=""
              style={{
                height: 28,
                width: 28,
                border: 1,
                borderRadius: "50%",
                marginRight: 5,
              }}
            />
            <span style={{ cursor: "pointer" }}>Trần Thanh Tùng</span> •{" "}
            <span>1 bài hát</span>
          </span>
        </div>
      </div>
    </div>
  );
}
