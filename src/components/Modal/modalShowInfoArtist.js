export const Ms = (props) => {
  console.log(props.open);
  return (
    <>
      {props.open && (
        <div onClick={props.onClose} className="overlay">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="modalContainer"
          >
            <div className="top">
              <div className="header">
                <h1 className="header-name">Chọn một ngôn ngữ</h1>
                <p>
                  Lựa chọn này sẽ cập nhật những nội dung bạn đọc trên
                  open.spotify.com.
                </p>
                <p className="closeBtn" onClick={props.onClose}>
                  <p
                    style={{
                      borderRadius: "50%",
                      height: 32,
                      width: 32,
                      backgroundColor: "#0C0C0C",
                      display: "flex",
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "lightgray",
                    }}
                  >
                    X
                  </p>
                </p>
                <div className="bottom">
                  <div
                    style={{
                      height: 76,
                      width: 228,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      padding: 16,
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <span>English</span>
                    <span style={{ color: "gray" }}>English</span>
                  </div>
                  <div
                    style={{
                      height: 76,
                      width: 228,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      padding: 16,
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <span>Tiếng Việt</span>
                    <span style={{ color: "gray" }}>Vietnamese</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
