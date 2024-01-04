import PaymentForm from "@/components/PaymentInformation/PaymentForm";
import PaymentInformation from "@/components/PaymentInformation/PaymentInformation";
import { NextPage } from "next";
import React from "react";
const PaymentInfo: NextPage = () => {
  

  return (
    <div className={`container-fluid backgroundPayments`}>
      <div className="row">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <img
            src="/images/Payments/logo_scroll.png"
            className="block"
            style={{ width: `62.49px` }}
            alt=""
          />
          <img
            src="/images/Payments/logo_stay.png"
            className="block"
            style={{ width: `143.8px`, marginTop: `-15px` }}
            alt=""
          />
          <img
            src="/images/Payments/iwwa_lock.png"
            className="block"
            style={{ width: `25px` }}
            alt=""
          />
          <p style={{ fontSize: `14px`, color: `#3c1913` }}>Secure Payment</p>
        </div>
      </div>
      <div className="row">
       <PaymentInformation/>
      </div>
      <div className="row pt-5">
        <div className="col-12">
          <h2>Card Details</h2>
        <PaymentForm/>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
