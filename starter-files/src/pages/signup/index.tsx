import Wrapper from "@/Components/Wrapper";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <>
      <Wrapper>
        <div className="col-12 my-4">
          <Link href={"/signup/create-profile"}>
            <button className="log-in-btns mb-3">
              Регистрирај се со емаил адреса
            </button>
          </Link>
          <p className="mb-3 text-center">или</p>
          <button className="log-in-btns mb-3">
            <i className="fa-brands fa-google mr-2"></i>
            Најави се преку Google
          </button>
          <button className="log-in-btns">
            <i className="fa-brands fa-facebook mr-2"></i>Најави се преку
            Facebook
          </button>
          <div className="d-flex justify-content-center mt-3">
            <p className="no-profile mr-1">Веќе имаш профил?</p>
            <Link href={"/login"}>
              <p className="forgot-pass">Логирај се</p>
            </Link>
          </div>
        </div>

        <div className="col-12 text-center">
          <small className="mt-5 mb-0">
            Сите права задржани @ Игралиште Скопје
          </small>
        </div>
      </Wrapper>
    </>
  );
};

export default SignUp;
