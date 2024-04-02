import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function FormRe() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const goToSignUp = () => {
    navigate("/signup");
  };
  return (
    <div
      class="col"
      style={{
        color: "white",
        height: 66,
        width: "100%",
        background: "linear-gradient(to right, #ae2896, #509af4)",
        position: "absolute",
        bottom: 10,
      }}
    >
      <div
        style={{
          padding: 5,
          fontSize: 14,
          fontWeight: 700,
          marginTop: 2,
          cursor: "pointer",
        }}
      >
        {t("register.preview")}
      </div>
      <div style={{ marginLeft: 3, fontWeight: 500, cursor: "pointer" }}>
        {t("register.signup1")}
      </div>
      <div
        style={{
          position: "relative",
          bottom: 45,
          left: 1700,
          color: "black",
          height: 45,
          width: 180,
          borderRadius: 25,
          border: 1,
          background: "white",
          fontSize: 16,
          fontWeight: "bolder",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={goToSignUp}
      >
        <span> {t("register.signup2")}</span>
      </div>
    </div>
  );
}
