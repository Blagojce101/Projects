import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import PaymentFooter from "../PaymentFooter/PaymentFooter";
import costumeCss from "./style.module.css";
import { useRouter } from "next/router";
const PaymentForm = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const cardHolderInputRef = useRef<HTMLInputElement>(null);
  const cardNumberInputRef = useRef<HTMLInputElement>(null);
  const cardExpirationDateInputRef = useRef<HTMLInputElement>(null);
  const cardSecurityInputRef = useRef<HTMLInputElement>(null);

const router = useRouter()

const handleClick = () => {
    if (
        cardHolderInputRef.current?.value !== "" &&
        cardNumberInputRef.current?.value !== "" &&
        cardExpirationDateInputRef.current?.value !== "" &&
        cardSecurityInputRef.current?.value !== ""
      ) {
          router.push(`/payments/paymentsInformation/paymentSuccessfully`)
      }
}

  const handleDisabledBtn = () => {
    if (
      cardHolderInputRef.current?.value !== "" &&
      cardNumberInputRef.current?.value !== "" &&
      cardExpirationDateInputRef.current?.value !== "" &&
      cardSecurityInputRef.current?.value !== ""
    ) {
        setIsDisabled(false);
    }
  };

  useEffect(() => {
    handleDisabledBtn();

    const inputRefs = [
      cardHolderInputRef,
      cardNumberInputRef,
      cardExpirationDateInputRef,
      cardSecurityInputRef,
    ];

    inputRefs.map((inputRef) => {
      if (inputRef.current) {
        inputRef.current.addEventListener("input", handleDisabledBtn);
      }
    });

    return () => {
      inputRefs.map((inputRef) => {
        if (inputRef.current) {
          inputRef.current.removeEventListener("input", handleDisabledBtn);
        }
      });
    };
  }, []);

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleDisabledBtn();
        
      }}
      action=""
      className="d-flex flex-column pt-2"
      style={{ color: `#3c1913` }}
    >
      <label htmlFor="">Card Holder</label>
      <input
        type="text"
        className="mb-3 py-2 pl-2"
        style={{
          background: `#f5f3f1`,
          border: `1px solid #3c1913`,
          color: `#000`
        }}
        placeholder="Card holder name here..."
        ref={cardHolderInputRef}
        
      />
      <label htmlFor="">Card Number</label>
      <input
        type="number"
        className={`mb-3 py-2 pl-2 ${costumeCss.inputNoSpinButton,costumeCss.inputNumber}`}
        style={{
          background: `#f5f3f1`,
          border: `1px solid #3c1913`,
          color: `#000`
        }}
        placeholder="0000 0000 0000 0000"
        ref={cardNumberInputRef}
        minLength={16}
        maxLength={16}
      />
      <div className="row d-flex justify-content-between pb-4">
        <div className="col-6">
          <label htmlFor="">Expiration Date</label>
          <input
            ref={cardExpirationDateInputRef}
            type="text"
            className={`${costumeCss.inputNoSpinButton,costumeCss.inputNumber} mb-3 py-2 pl-2`}
            style={{
              background: `#f5f3f1`,
              border: `1px solid #3c1913`,
              width: `100%`,
              color: `#000`
            }}
            placeholder="MM/YY"
            minLength={5}
            maxLength={5}
          />
        </div>
        <div className="col-6">
          <label htmlFor="">Security Code</label>
          <input
            ref={cardSecurityInputRef}
            type="number"
            className={`${costumeCss.inputNoSpinButton,costumeCss.inputNumber} mb-3 py-2 pl-2`}
            style={{
              background: `#f5f3f1`,
              border: `1px solid #3c1913`,
              width: `100%`,
              color: `#000`
            }}
            placeholder="000"
            minLength={3}
            maxLength={3}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 pb-2">
          <button
            type="submit"
            onClick={()=> {
                handleClick()
            }}
            className={`d-block w-100 btn ${
              isDisabled ? `${costumeCss.disabled}` : `${costumeCss.unable}`
            }`}
            style={{
              borderRadius: "16px 0px 16px 0px",
              color: "linen",
              opacity: 1,
            }}
          >
            Pay Now
          </button>
        </div>
        <div className="col-12">
          <Link
            href={`/payments`}
            className="d-block w-100 btn"
            style={{
              borderRadius: `16px 0px 16px 0px`,
              background: `#FBFAF8
`,
              color: `#3c1913`,
              border: `2px solid`,
            }}
          >
            Cancel
          </Link>
        </div>
      </div>
      <div className="row" style={{ paddingTop: `150px` }}>
        <PaymentFooter />
      </div>
    </form>
  );
};

export default PaymentForm;
