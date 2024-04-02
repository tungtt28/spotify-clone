import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  return (
    <div class="row" style={{ marginTop: 50, width: 1616, height: 363 }}>
      <div class="col-sm-2">
        <div class="row">
          <span
            style={{
              color: "white",
              fontWeight: 700,
              height: 22,
            }}
          >
            Công ty
          </span>
          <span
            style={{
              color: "gray",
              fontWeight: 500,
              height: 30,
              marginTop: 10,
              cursor: "pointer",
            }}
          >
            Giới thiệu
          </span>
          <span
            style={{
              color: "gray",
              fontWeight: 500,
              height: 30,
              cursor: "pointer",
            }}
          >
            Việc làm
          </span>
          <span
            style={{
              color: "gray",
              fontWeight: 500,
              height: 30,
              cursor: "pointer",
            }}
          >
            For the record
          </span>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="row">
          <span
            style={{
              color: "white",
              fontWeight: 700,
              height: 22,
            }}
          >
            Cộng đồng
          </span>
          <span
            style={{
              color: "gray",
              fontWeight: 500,
              height: 30,
              marginTop: 10,
              cursor: "pointer",
            }}
          >
            Dành cho các nghệ sĩ
          </span>
          <span
            style={{
              color: "gray",
              fontWeight: 500,
              height: 30,
              cursor: "pointer",
            }}
          >
            Nhà phát triển
          </span>
          <span
            style={{
              color: "gray",
              fontWeight: 500,
              height: 30,
              cursor: "pointer",
            }}
          >
            Quảng cáo
          </span>
          <span
            style={{
              color: "gray",
              fontWeight: 500,
              height: 30,
              cursor: "pointer",
            }}
          >
            Nhà đầu tư
          </span>
          <span
            style={{
              color: "gray",
              fontWeight: 500,
              height: 30,
              cursor: "pointer",
            }}
          >
            Nhà cung cấp
          </span>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="row">
          <span
            style={{
              color: "white",
              fontWeight: 700,
              height: 22,
            }}
          >
            Liên kết hữu ích
          </span>
          <span
            style={{
              color: "gray",
              fontWeight: 500,
              height: 30,
              marginTop: 10,
              cursor: "pointer",
            }}
          >
            Hỗ trợ
          </span>
          <span
            style={{
              color: "gray",
              fontWeight: 500,
              height: 30,
              cursor: "pointer",
            }}
          >
            Ứng dụng di động miễn phí
          </span>
        </div>
      </div>
      <div class="col-sm-4"></div>
      <div class="col-sm-2">
        <div
          class="row"
          style={{
            display: "flex",
            justifyContent: "center",

            gap: 15,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              border: 1,
              borderRadius: "50%",
              color: "white",
              background: "#292929",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span>
              <IoLogoInstagram
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </span>
          </div>
          <div
            style={{
              width: 40,
              height: 40,
              border: 1,
              borderRadius: "50%",
              color: "white",
              background: "#292929",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span>
              <FaTwitter
                style={{
                  width: 22,
                  height: 22,
                }}
              />
            </span>
          </div>
          <div
            style={{
              width: 40,
              height: 40,
              border: 1,
              borderRadius: "50%",
              color: "white",
              background: "#292929",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span>
              <FaFacebook
                style={{
                  width: 22,
                  height: 22,
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <hr style={{ color: "white", marginTop: 20 }} />
      <div
        style={{
          height: 46,
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            fontSize: 14,
            color: "gray",
            cursor: "pointer",
          }}
        >
          Pháp lý
        </span>
        <span
          style={{
            fontSize: 14,
            color: "gray",
            marginLeft: 5,
            cursor: "pointer",
          }}
        >
          Trung tâm an toàn và quyền riêng tư
        </span>
        <span
          style={{
            fontSize: 14,
            color: "gray",
            marginLeft: 5,
            cursor: "pointer",
          }}
        >
          Chính sách quyền riêng tư
        </span>
        <span
          style={{
            fontSize: 14,
            color: "gray",
            marginLeft: 5,
            cursor: "pointer",
          }}
        >
          Cookie
        </span>
        <span
          style={{
            fontSize: 14,
            color: "gray",
            marginLeft: 5,
            cursor: "pointer",
          }}
        >
          Giới thiệu Quảng cáo
        </span>
        <span
          style={{
            fontSize: 14,
            color: "gray",
            marginLeft: 5,
            cursor: "pointer",
          }}
        >
          Hỗ trợ tiếp cận
        </span>
        <span
          style={{
            fontSize: 14,
            color: "gray",
            marginLeft: 650,
          }}
        >
          © 2024 Spotify AB
        </span>
      </div>
      <div style={{ height: 450 }}></div>
    </div>
  );
}
