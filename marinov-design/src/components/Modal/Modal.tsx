import React from "react";
import style from "./style.module.css";
import Link from "next/link";

interface Props {
  title: string;
  onClick: () => void;
}

const Modal: React.FC<Props> = ({ title, onClick }) => {
  return (
    <>
      <div className={style.customModal}>
        <div className="content text-center m-3 d-flex justify-content-center align-items-center flex-wrap">
          <div className="w-100 text-right" onClick={onClick}>
            <img src="/images/FAQPAGE/X.svg" alt="" className="mr-2" />
          </div>
          <div className={`${style.font} my-4`}>
            <p className="m-0" style={{ fontWeight: "bold" }}>
              {title}
            </p>
            <p>has been added to the cart.</p>
            <img src="/images/FAQPAGE/buterfly.svg" alt="" />
          </div>

          <div className="d-flex justify-content-center align-items-center flex-column w-100">
            <Link href={"/cartPage"}>
              <button className={`${style.addToCartBtn}`}>Go to cart</button>
            </Link>
            <Link href={"/"}>
              <button
                className={`${style.continueFont} my-3 text-capitalize border-0 w-100`}>
                continue shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
