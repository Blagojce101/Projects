import Modal from "@/Components/Modal";
import Wrapper from "@/Components/Wrapper";
import { UserContext } from "@/Context/userContext";
import { useRouter } from "next/router";
import React, { useContext, useRef, useState } from "react";

const CreateProfile = () => {
  const { handleCreateUser } = useContext(UserContext);

  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [isProfileCreated, setIsProfeileCreated] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowErrorModal(false);
  };

  const handleIsProfileCreated = () => {
    setIsProfeileCreated(false);
    router.push("/");
  };

  const router = useRouter();

  const cleanAllRefs = () => {
    nameRef.current && (nameRef.current.value = "");
    lastnameRef.current && (lastnameRef.current.value = "");
    emailRef.current && (emailRef.current.value = "");
    passwordRef.current && (passwordRef.current.value = "");
    confirmPasswordRef.current && (confirmPasswordRef.current.value = "");
  };

  return (
    <>
      <Wrapper>
        <div className="col-12">
          <form
            className="log-in-form"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();

              const newPassword = passwordRef.current?.value || "";
              const newConfirmPassword =
                confirmPasswordRef.current?.value || "";

              if (newPassword.length !== newConfirmPassword.length) {
                setShowErrorModal(true);
                return;
              } else {
                setIsProfeileCreated(true);
                handleCreateUser(
                  nameRef.current?.value!,
                  lastnameRef.current?.value!,
                  emailRef.current?.value!,
                  passwordRef.current?.value!,
                  confirmPasswordRef.current?.value!
                );
                cleanAllRefs();
              }
            }}>
            <label htmlFor="name">Име</label>
            <input type="text" id="name" placeholder="Ивана" ref={nameRef} />

            <label htmlFor="surname">Презиме</label>
            <input
              type="text"
              id="surname"
              placeholder="Голабоска"
              ref={lastnameRef}
            />

            <label htmlFor="email">Емаил адреса</label>
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

            <label htmlFor="confirm-password">Повтори лозинка</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="************"
              ref={confirmPasswordRef}
            />

            <div className="d-flex jusrify-content-start my-3">
              <img
                src="/check-mark.png"
                alt=""
                className="mr-1"
                style={{ width: "20px", height: "20px" }}
              />
              <p style={{ fontSize: "13.6px" }}>
                Испраќај ми известувања за нови зделки и промоции.
              </p>
            </div>

            <button type="submit" className="register-btn">
              Регистрирај се
            </button>
          </form>
        </div>
        <div className="col-12 my-5">
          <small>
            Со вашата регистрација, се согласувате со{" "}
            <u>Правилата и Условите</u> за кориснички сајтови.
          </small>
        </div>
        {showErrorModal === true ? (
          <Modal
            content={
              " Лозинките не се исти. Ве молиме проверете ги лозинките повторно"
            }
            onClick={handleShowModal}
          />
        ) : null}
        {isProfileCreated === true ? (
          <Modal
            content={"Профилот е успешно креиран, Ве молиме најавете."}
            onClick={handleIsProfileCreated}
          />
        ) : null}
      </Wrapper>
    </>
  );
};

export default CreateProfile;
