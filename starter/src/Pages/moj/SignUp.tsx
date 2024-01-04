import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="container  pb-4">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-12 p-5 d-flex justify-content-center bg-white">
                <h5 className="text-uppercase">креирај профил</h5>
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
                  <label htmlFor="name">Внеси име и презиме</label>
                  <input
                    type="name"
                    id="name"
                    className="w-100 rounded p-2 mb-1"
                    placeholder="someone"
                  />

                  <label htmlFor="email">Внеси е-маил адреса</label>
                  <input
                    type="email"
                    id="email"
                    className="w-100 rounded p-2 mb-1"
                    placeholder="someone@email.com"
                  />

                  <label htmlFor="number">
                    Внеси телефонски број &nbsp; &nbsp; (*опционално)
                  </label>
                  <input
                    type="number"
                    id="number"
                    className="w-100 rounded p-2 mb-1"
                    placeholder="+389000000000"
                  />

                  <label htmlFor="password">Лозинка</label>
                  <input
                    type="password"
                    id="password"
                    className="w-100 rounded p-2 mb-1"
                    placeholder="************"
                  />

                  <label htmlFor="confirmPassword">Потврди лозинка</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-100 rounded p-2 mb-1"
                    placeholder="************"
                  />

                  <div className="row">
                    <div className="col-12 d-flex justify-content-start align-items-start flex-column mt-2">
                      <div className="mb-3">
                        <input type="checkbox" id="checkbox" className="mr-2" />
                        <label className="m-0" htmlFor="checkbox">
                          Запомни ме
                        </label>
                      </div>

                      <div className="d-flex justify-content-start align-items-start flex-row">
                        <input
                          type="checkbox"
                          id="checkboxConfirm"
                          className="mr-2 mt-2"
                        />
                        <div>
                          <label className="m-0" htmlFor="checkboxConfirm">
                            Се согласувам со условите за користење на
                            апликацијата.
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row bg-white">
                    <div className="col-12 line-with-text my-1 p-3">
                      <div className="line rounded"></div>
                      <div className="text text-muted">или преку</div>
                      <div className="line rounded"></div>
                    </div>
                  </div>

                  <div className="row bg-white">
                    <div className="col-12 d-flex justify-content-center align-items-center flex-column my-1">
                      <div className="d-flex justify-content-around pt-3">
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
                    <div className="col-12 mb-4 pb-5 d-flex justify-content-around alugn-items-center">
                      <h6 className="mt-1">Имаш профил ?</h6>

                      <Link to={"/signin"}>
                        <p className="m-0 text-green">Најави се!</p>
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

export default SignUp;
