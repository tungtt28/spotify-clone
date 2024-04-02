import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiLibrary } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaPlus, FaSpotify } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { locales } from "../../i18n/i18n.ts";
import Modal from "../Modal/Modal.js";

export default function SideBarRegister() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const currentLanguage = locales[i18n.language];

  const goToHome = () => {
    navigate("/");
  };

  const goToSearch = () => {
    navigate("/search");
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div class="col-sm-3">
      <div class="row">
        <div
          class="row-sm-6"
          style={{
            height: 180,
            borderRadius: "15px",
            backgroundColor: "#121212",
            border: "2px solid #000500",
            width: 500,
          }}
        >
          <div class="row" style={{ marginTop: 20, marginLeft: 10 }}>
            <div class="col-sm-12">
              <div style={{ padding: 10 }}>
                <FaSpotify
                  onClick={goToHome}
                  style={{
                    height: 30,
                    width: 30,
                    color: "white",
                    cursor: "pointer",
                  }}
                />
                <span
                  onClick={goToHome}
                  style={{
                    color: "white",
                    fontWeight: 600,
                    marginLeft: 2,
                    cursor: "pointer",
                  }}
                >
                  Spotify
                </span>
              </div>
            </div>

            <div class="col-sm-12">
              <div style={{ padding: 8 }}>
                <IoHome
                  onClick={goToHome}
                  style={{
                    height: 30,
                    width: 30,
                    color: "white",
                    cursor: "pointer",
                  }}
                />
                <span
                  onClick={goToHome}
                  style={{
                    color: "white",
                    fontWeight: 600,
                    marginLeft: 15,
                    position: "relative",
                    top: 4,
                    cursor: "pointer",
                  }}
                >
                  {t("register.home")}
                </span>
              </div>
            </div>
            <div class="col-sm-12">
              <div style={{ padding: 8 }}>
                <CiSearch
                  onClick={goToSearch}
                  style={{
                    height: 30,
                    width: 30,
                    color: "gray",
                    cursor: "pointer",
                  }}
                />
                <span
                  onClick={goToSearch}
                  style={{
                    color: "gray",
                    fontWeight: "bolder",
                    marginLeft: 15,
                    position: "relative",
                    top: 4,
                    cursor: "pointer",
                  }}
                >
                  {t("register.search")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row-sm-6"
          style={{
            height: 772,
            borderRadius: "10px",
            backgroundColor: "#121212",
            border: "2px solid 	  #000500",
            width: 490,
          }}
        >
          <div class="row" style={{ marginLeft: 10 }}>
            <div class="col-sm-12">
              <div style={{ padding: 8 }}>
                <BiLibrary
                  style={{
                    height: 30,
                    width: 30,
                    color: "white",
                    cursor: "pointer",
                  }}
                />
                <span
                  style={{
                    color: "gray",
                    fontWeight: "bolder",
                    marginLeft: 5,
                    position: "relative",
                    top: 4,
                    cursor: "pointer",
                  }}
                >
                  {t("register.library")}
                </span>
                <span style={{ marginLeft: 275, position: "fixed" }}>
                  <FaPlus style={{ fontWeight: "700", color: "gray" }} />
                </span>
              </div>
              <div style={{ height: 476 }}>
                <div
                  style={{
                    height: 130,
                    width: 415,
                    border: "2px",
                    background: "#242424",
                    borderRadius: "15px",
                    marginTop: 15,
                    padding: 5,
                  }}
                >
                  <div style={{ color: "white" }}>
                    <div
                      style={{
                        fontWeight: 600,
                        marginLeft: 10,
                        padding: 5,
                        marginTop: 5,
                      }}
                    >
                      {t("register.create")}
                    </div>
                    <div
                      style={{
                        fontWeight: 600,
                        marginLeft: 10,
                        padding: 3,
                        fontSize: 14,
                      }}
                    >
                      {t("register.create1")}
                    </div>
                    <div
                      style={{
                        fontWeight: "bolder",
                        marginLeft: 10,
                        padding: 5,
                        height: 35,
                        width: 165,
                        border: "1px solid #b3b3b3",
                        background: "white",
                        borderRadius: "25px",
                        fontSize: 14,
                        color: "black",
                        marginTop: 10,
                      }}
                    >
                      <span
                        className="hover-btnRegister"
                        style={{ marginLeft: 10 }}
                      >
                        {t("register.create2")}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: 130,
                    width: 415,
                    border: "2px",
                    background: "#242424",
                    borderRadius: "15px",
                    marginTop: 25,
                    padding: 5,
                  }}
                >
                  <div style={{ color: "white" }}>
                    <div
                      style={{
                        fontWeight: 600,
                        marginLeft: 10,
                        padding: 5,
                        marginTop: 5,
                      }}
                    >
                      {t("register.podcast")}
                    </div>
                    <div
                      style={{
                        fontWeight: 600,
                        marginLeft: 10,
                        padding: 3,
                        fontSize: 14,
                      }}
                    >
                      {t("register.podcast1")}
                    </div>
                    <div
                      style={{
                        fontWeight: "bolder",
                        marginLeft: 10,
                        padding: 5,
                        height: 35,
                        width: 165,
                        border: "1px solid #b3b3b3",
                        background: "white",
                        borderRadius: "25px",
                        fontSize: 14,
                        color: "black",
                        marginTop: 10,
                      }}
                    >
                      <span
                        className="hover-btnRegister"
                        style={{ marginLeft: 10 }}
                      >
                        {t("register.podcast2")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: 150,
                  color: "white",
                  fontWeight: 600,
                  marginTop: 20,
                }}
              >
                <span style={{ color: "gray", fontSize: 13 }}>Cookie</span>
                <div
                  style={{
                    height: 32,
                    borderRadius: "15px",
                    backgroundColor: "#0a130d",
                    border: "1px solid gray",
                    width: 120,
                    marginTop: 30,
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenModal(true)}
                >
                  <GrLanguage style={{ marginLeft: 10 }} />
                  <span style={{ marginLeft: 2, position: "relative", top: 2 }}>
                    {currentLanguage}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
