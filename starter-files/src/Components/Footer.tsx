import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();

  const displayNoneRoutes =
    router.pathname === "/login" ||
    router.pathname === "/signup" ||
    router.pathname === "/signup/create-profile" ||
    router.pathname === "/signup/create-profile/profile-info" ||
    router.pathname === "/profile" ||
    router.pathname === "/profile/change-password";

  return (
    <>
      {!displayNoneRoutes && (
        <>
          <footer>
            <div className="container d-flex justify-content-center align-items-center flex-wrap">
              <div className="row w-sm-100 w-100 my-3">
                <div className="col-lg-4 col-md-12 col-sm-12 mb-5 my-md-3 ">
                  <h5>Следи ги нашите новости!</h5>
                  <p className="text-muted">
                    Биди дел од нашиот newsletter и дознавај прва за промоции,
                    попусти и нови колекции.
                  </p>
                  <form className="">
                    <label htmlFor="text" className="w-100">
                      E-mail адреса:
                    </label>
                    <input
                      type="text"
                      id="text"
                      className="w-100 mb-3 p-2 round footer-input"
                    />
                    <button className="w-100 p-2 round footer-button">
                      Зачлени се!
                    </button>
                  </form>

                  <div
                    className="text-center mt-5"
                    style={{
                      border: "1px #232221 solid",
                      borderRadius: "20px",
                    }}></div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 ">
                  <Link href={"/about"} style={{ textDecoration: "none" }}>
                    <p className="text-dark">За нас</p>
                  </Link>
                  <Link href={"/contact"} style={{ textDecoration: "none" }}>
                    <p className="text-dark">Контакт</p>
                  </Link>

                  <p>
                    <a
                      href="https://maps.app.goo.gl/GEyVv18J49inGhGd8"
                      target="blank"
                      className="text-dark">
                      Локатор на продавницата
                    </a>
                  </p>

                  <Link href={"/FAQ"} style={{ textDecoration: "none" }}>
                    <p className="text-dark">Често поставувани прашања (FAQ)</p>
                  </Link>
                  <div className="d-flex">
                    <Link href={"/signup"} style={{ textDecoration: "none" }}>
                      <p className="text-dark">Регистрирај се &nbsp;/</p>
                    </Link>
                    <Link href={"/login"} style={{ textDecoration: "none" }}>
                      <p className="text-dark">&nbsp; Логирај се</p>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 ">
                  <h5 className="follow-us">Следи не на:</h5>

                  <a
                    href="https://www.instagram.com/igraliste.sk?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
                    target="blank"
                    style={{ textDecoration: "none", color: "black" }}>
                    <span className="d-flex justify-content-start align-items-center mb-2">
                      <img src="/insta.png" className="pr-3" alt="" />
                      <p className="m-0">igralishte.sk</p>
                    </span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@igraliste.sk?_t=8iTnjYGz35i&_r=1rr"
                    target="blank"
                    style={{ textDecoration: "none", color: "black" }}>
                    <span className="d-flex justify-content-start align-items-center">
                      <img src="/tikTok.png" className="pr-3" alt="" />
                      <p className="m-0">igralishte.sk</p>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row mb-3">
                <div className="col-12">
                  <span>
                    <small>Сите права задржани © 2023 igralishtesk.mk</small>
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Footer;
