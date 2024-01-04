import React, { useContext, useRef, useState } from "react";
import SuccessfulOrderingPopUp from "./SuccessfulOrderingPopUp";
import { UserContext } from "@/Context/userContext";

interface Props {
  value: boolean;
  closePopUp: () => void;
  resetCart: () => void;
  scrollToTop: () => void;
}

const OrderFormPopUp: React.FC<Props> = ({
  value,
  closePopUp,
  resetCart,
  scrollToTop,
}) => {
  const [toggleSuccessPopUp, setToggleSuccessPopUp] = useState<boolean>(false);
  const { currentLoggedInUser } = useContext(UserContext);

  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const adressRef = useRef<HTMLInputElement>(null);
  const contactNumberRef = useRef<HTMLInputElement>(null);

  const handleOpenSuccessPopUp = () => {
    setToggleSuccessPopUp(!toggleSuccessPopUp);
  };

  const handleCloseSuccessPopUp = () => {
    setToggleSuccessPopUp(false);
  };

  const handleAddUserProps = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      if (currentLoggedInUser) {
        nameRef.current && (nameRef.current.value = currentLoggedInUser.name);

        lastnameRef.current &&
          (lastnameRef.current.value = currentLoggedInUser.lastname);

        emailRef.current &&
          (emailRef.current.value = currentLoggedInUser.email);

        adressRef.current &&
          (adressRef.current.value = currentLoggedInUser.adress);

        contactNumberRef.current &&
          (contactNumberRef.current.value = currentLoggedInUser.contactNumber);
      }
    } else {
      nameRef.current && (nameRef.current.value = "");
      lastnameRef.current && (lastnameRef.current.value = "");
      emailRef.current && (emailRef.current.value = "");
      adressRef.current && (adressRef.current.value = "");
      contactNumberRef.current && (contactNumberRef.current.value = "");
    }
  };

  return (
    <>
      <div
        className={`${
          value === true
            ? "order-form-container container d-flex justify-content-center bg-white"
            : "d-none"
        } `}
        style={{ paddingBottom: "350px", paddingTop: "25px" }}>
        <div className="row">
          <div
            className="col-12 d-flex justify-content-end "
            onClick={closePopUp}>
            <img
              src="/plus.png"
              alt=""
              className="rotate-plus"
              style={{ width: "30px" }}
            />
          </div>

          <div className="col-12 d-flex justify-content-center align-items-center flex-wrap">
            <div>
              <img src="/sparks.png" alt="" style={{ width: "80px" }} />
            </div>
            <div>
              <p className="first-col-font">
                Ве молиме внесете ги потребните информации
              </p>
            </div>
          </div>

          <div className="col-12 d-flex justify-content-start align-items-center">
            <input
              type="checkbox"
              id="profileData"
              className="mr-3"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();

                handleAddUserProps(event);
              }}
            />
            <label
              htmlFor="profileData"
              className="order-form-font"
              style={{ color: "#666560", fontSize: 16 }}>
              вметни ги информациите од мојот профил
            </label>
          </div>

          <div className="col-12 d-flex justify-content-start flex-wrap my-3">
            <form>
              <label htmlFor="name" className="order-label order-form-font">
                Име
                <span className="text-danger ">*</span>
              </label>
              <input
                type="name"
                id="name"
                className="order-input order-form-font"
                ref={nameRef}
              />

              <label htmlFor="surname" className="order-label order-form-font">
                Презиме
                <span className="text-danger ">*</span>
              </label>
              <input
                type="surname"
                id="surname"
                className="order-input order-form-font"
                ref={lastnameRef}
              />

              <label htmlFor="adress" className="order-label order-form-font">
                Адреса на живеење
                <span className="text-danger ">*</span>
              </label>
              <input
                type="text"
                id="adress"
                className="order-input order-form-font"
                ref={adressRef}
              />

              <label htmlFor="phoneN0" className="order-label order-form-font">
                Телефонски број
                <span className="text-danger ">*</span>
              </label>
              <input
                type="number"
                id="phoneN0"
                className="order-input order-form-font"
                ref={contactNumberRef}
              />

              <label htmlFor="email" className="order-label order-form-font">
                Емаил адреса
                <span className="text-danger ">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="order-input order-form-font"
                ref={emailRef}
              />
            </form>
          </div>

          <div className="col-12 d-flex justify-content-between align-items-start">
            <input type="checkbox" id="info" className="mt-2 mr-3" />
            <label
              htmlFor="info"
              className="order-form-font"
              style={{ color: "#666560", fontSize: 16 }}>
              Сакам да добивам новости за идни попусти, нови колекции и промоции
              на мојата емаил адреса.
            </label>
          </div>

          <div className="col-12 d-flex justify-content-around align-items-center my-2">
            <button
              className="footer-button padding-cart-btn confirm-order-btn"
              onClick={(
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => {
                event.preventDefault();
                resetCart();
                handleOpenSuccessPopUp();
                scrollToTop();
              }}>
              Нарачај
            </button>
            <p
              className="m-0 mb-2 cancel-order order-form-font"
              style={{ color: "#232221" }}
              onClick={closePopUp}>
              Откажи
            </p>
          </div>
        </div>
      </div>
      <SuccessfulOrderingPopUp
        value={toggleSuccessPopUp}
        closeSuccessPopUp={handleCloseSuccessPopUp}
      />
    </>
  );
};

export default OrderFormPopUp;
