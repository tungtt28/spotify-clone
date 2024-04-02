import React from "react";
import "./modal.css";
import { useTranslation } from "react-i18next";

const Modal = ({ open, onClose }) => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: "vi" | "en") => {
    i18n.changeLanguage(lng);
  };
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
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
            <p className="closeBtn" onClick={onClose}>
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
                onClick={() => changeLanguage("en")}
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
                onClick={() => changeLanguage("vi")}
              >
                <span>Tiếng Việt</span>
                <span style={{ color: "gray" }}>Vietnamese</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
