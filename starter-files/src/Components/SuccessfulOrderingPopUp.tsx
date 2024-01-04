import Link from "next/link";
import React from "react";

interface Props {
  value: boolean;
  closeSuccessPopUp: () => void;
}

const SuccessfulOrderingPopUp: React.FC<Props> = ({
  value,
  closeSuccessPopUp,
}) => {
  return (
    <>
      <div className={`${value === true ? "blur" : "d-none"}`}>
        <div className="container d-flex justify-content-center align-items-center flex-wrap successful-ordering p-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center flex-wrap">
              <div>
                <img src="/sparks.png" alt="" style={{ width: "80px" }} />
              </div>
              <div className="my-3">
                <p className="first-col-font m-0">Вашата нарачка е успешна!</p>
                <p className="first-col-font m-0" style={{ color: "#666560" }}>
                  Очекувајте потврда за вашата нарачка на вашата емаил адреса.
                  Keep on shining *
                </p>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                <Link href={"/products"}>
                  <button className="footer-button padding-cart-btn">
                    Продолжи
                  </button>
                </Link>
                <p
                  className="m-0 mb-2 cancel-order order-form-font"
                  style={{ color: "#232221" }}
                  onClick={(
                    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
                  ) => {
                    event.preventDefault();
                    closeSuccessPopUp();
                  }}>
                  Откажи
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessfulOrderingPopUp;
