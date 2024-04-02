import React from "react";
import { useTranslation } from "react-i18next";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function HeaderRegister() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };
  return (
    <div class="row-sm-12" style={{ height: 74, background: "#121212" }}>
      <div class="row">
        <div class="col-sm-3" style={{ height: 74 }}>
          <div class="row">
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 15,
                border: "1px solid black",
                color: "gray",
                background: "black",
                marginLeft: 25,
                marginTop: 25,
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
                color: "gray",
                background: "black",
                marginLeft: 5,
                marginTop: 25,
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
        <div class="col-sm-3"></div>
        <div class="col-sm-3">
          <div class="row">
            <div
              class="col-sm-4"
              style={{
                height: 74,
                display: "flex",
                color: "gray",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="hover-effect">Premium</span>
            </div>
            <div
              class="col-sm-4"
              style={{
                height: 74,
                display: "flex",
                color: "gray",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="hover-effect">{t("register.support")}</span>
            </div>
            <div
              class="col-sm-4"
              style={{
                height: 74,
                display: "flex",
                color: "gray",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="hover-effect">{t("register.download")}</span>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="row">
            <div
              class="col-sm-1"
              style={{
                color: "gray",

                display: "flex",

                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 25, marginBottom: 10 }}>|</span>
            </div>
            <div
              class="col-sm-5"
              style={{
                height: 74,
                display: "flex",
                color: "gray",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={goToSignUp}
            >
              <span
                className="hover-effect" // Add the class to apply the hover effect
              >
                {t("register.signup")}
              </span>
            </div>
            <div
              class="col-sm-6"
              style={{
                height: 74,
                display: "flex",
                color: "gray",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 17, fontWeight: 700 }}>
                <div
                  onClick={goToLogin}
                  className="hover-effect"
                  style={{
                    width: 150,
                    height: 47,
                    borderRadius: 25,
                    border: "1px solid white",
                    color: "black",
                    background: "white",
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 50,
                  }}
                >
                  {t("register.login")}
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
