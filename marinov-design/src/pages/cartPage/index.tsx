import LottieAnimation from "@/components/HomePage/LottieAnimation";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "../../../public/images/json-animations/loading_animation.json";
import PaymentCardReview from "@/components/PaymentCardReview/PaymentCardReview";

const index: NextPage = () => {
  const [parsedObject, setParsedObject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof localStorage !== "undefined") {
        const storedObjects = localStorage.getItem("productsInCart");
        const parsedData = storedObjects ? JSON.parse(storedObjects) : null;
        setParsedObject(parsedData);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-fluid pb-5" style={{ paddingTop: `80px` }}>
      <div className="row pb-3">
        <div className="col-8">
          <p style={{ fontSize: `48px`, color: `#3c1913` }}>Your Cart</p>
          <Link
            href={`/jewelry`}
            className="d-block w-75 btn"
            style={{
              borderRadius: `16px 0px 16px 0px`,
              background: `#FBFAF8`,
              color: `#3c1913`,
              border: `2px solid`,
            }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
      <div className="row ">
        {parsedObject ? (
          <PaymentCardReview />
        ) : (
          <div className="col-12 px-0 position-relative">
            <LottieAnimation animationData={LoadingAnimation} />
            <p
              className="w-75 d-block position-absolute"
              style={{
                color: `#3c1913`,
                fontSize: `48px`,
                top: `40%`,
                left: `5%`,
              }}
            >
              Your cart is empty
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
