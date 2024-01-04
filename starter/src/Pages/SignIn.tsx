import React, { useRef } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="container pb-5">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-12 p-5 d-flex justify-content-center bg-white">
                <h5 className="text-uppercase">најави се</h5>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 bg-white d-flex justify-content-start align-items-start flex-column">
                <form
                  className=" my-2"
                  onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    console.log("submitted");
                  }}>
                  <label htmlFor="email">Е-маил адреса</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    className="w-100 rounded p-2 mb-1"
                    placeholder="someone@email.com"
                  />

                  <label htmlFor="password">Лозинка</label>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    className="w-100 rounded p-2 mb-1"
                    placeholder="************"
                  />

                  <div className="d-flex justify-content-between align-items-center flex-row">
                    <div>
                      <input type="checkbox" id="checkbox" className="mr-2" />
                      <label className="m-0" htmlFor="checkbox">
                        Запомни ме
                      </label>
                    </div>
                    <div className="ml-auto">
                      <p id="forgotPass" className="m-0 text-muted">
                        заборавена лозинка ?
                      </p>
                    </div>
                  </div>

                  <div className="row bg-white">
                    <div className="col-12 line-with-text my-2 p-3">
                      <div className="line rounded"></div>
                      <div className="text text-muted">или преку</div>
                      <div className="line rounded"></div>
                    </div>
                  </div>

                  <div className="row bg-white">
                    <div className="col-12 d-flex justify-content-center align-items-center flex-column my-2">
                      <div className="d-flex justify-content-around">
                        <div className="box mr-5">
                          <a href="" className="text-dark">
                            <i className="fa-brands fa-facebook fa-2x"></i>
                          </a>
                        </div>
                        <div className="box mr-5">
                          <a href="" className="text-dark">
                            <i className="fa-brands fa-google-plus fa-2x"></i>
                          </a>
                        </div>
                        <div className="box">
                          <a href="" className="text-dark">
                            <i className="fa-brands fa-apple fa-2x"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row bg-white">
                    <div className="col-12 text-center my-3">
                      <button
                        type="submit"
                        className="text-white btn round p-3"
                        style={{ backgroundColor: "#79B937", width: "300px" }}>
                        Најави се
                      </button>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 pb-5 d-flex justify-content-around alugn-items-center">
                      <h6 className="mt-1">Немаш профил ?</h6>

                      <Link to={"/signup"}>
                        <p className="m-0 text-green">Ретистрирај се!</p>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
