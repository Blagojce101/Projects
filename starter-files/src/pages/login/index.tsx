import Modal from "@/Components/Modal";
import Wrapper from "@/Components/Wrapper";
import { UserContext } from "@/Context/userContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useRef, useState } from "react";

const LogIn = () => {
  const { users, handleLogIn } = useContext(UserContext);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleOpenModal = () => {
    setOpenModal(false);
  };

  const cleanAllRefs = () => {
    emailRef.current && (emailRef.current.value = "");
    passwordRef.current && (passwordRef.current.value = "");
  };

  return (
    <>
      <Wrapper>
        <div className="col-12 mt-3">
          <form
            className="log-in-form"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();

              const currentUser = users.find((user) => {
                return emailRef.current?.value === user.email;
              });

              if (currentUser) {
                handleLogIn(emailRef.current?.value!);
                router.push("/");
              } else {
                setOpenModal(true);
                cleanAllRefs();
              }
            }}>
            <label htmlFor="email">Email адреса</label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              ref={emailRef}
            />

            <label htmlFor="password">Лозинка</label>
            <input
              type="password"
              id="password"
              placeholder="************"
              ref={passwordRef}
            />

            <p className="forgot-pass mb-3">Ја заборави лозинката?</p>

            <button type="submit" className="log-in-btn">
              Најави се
            </button>
          </form>
        </div>

        <div className="col-12">
          <p className="my-3 text-center">или</p>
          <button className="log-in-btns mb-3">
            <i className="fa-brands fa-google mr-2"></i>
            Најави се преку Google
          </button>
          <button className="log-in-btns">
            <i className="fa-brands fa-facebook mr-2"></i>Најави се преку
            Facebook
          </button>
          <div className="d-flex justify-content-center mt-3">
            <p className="no-profile mr-1">Немаш профил?</p>
            <Link href={"/signup"}>
              <p className="forgot-pass">Регистрирај се</p>
            </Link>
          </div>
        </div>

        <div className="col-12 mt-5 mb-4 text-center">
          <small className="mt-5 mb-0">
            Сите права задржани @ Игралиште Скопје
          </small>
        </div>
      </Wrapper>
      {openModal === true ? (
        <Modal
          content={
            "Внесовте невалидно корисничко име или лозинка. Обидетесе повторно или доколку немате профил регистрирај се."
          }
          onClick={handleOpenModal}
        />
      ) : null}
    </>
  );
};

export default LogIn;
