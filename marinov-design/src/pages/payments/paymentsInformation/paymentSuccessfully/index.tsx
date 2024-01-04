import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "../../../../../public/images/json-animations/loading_animation.json";

import dynamic from "next/dynamic";
import Link from "next/link";
import { IProductProps } from "@/types/ProjectTypes";
const LottieAnimation = dynamic(
  () => import("../../../../components/HomePage/LottieAnimation"),
  {
    ssr: false,
  }
);

const PaymentSuccessfully: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [parsedObject, setParsedObject] = useState<IProductProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof localStorage !== "undefined") {
        const storedObjects = localStorage.getItem("productsInCart");
        const parsedData = storedObjects ? JSON.parse(storedObjects) : [];
        setParsedObject(parsedData);
      }
    };

    fetchData();
  }, []);

  const handlePaymentProcess = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  const calculateTotalPrice = () => {
    return parsedObject.reduce((total, product) => {
      // Convert product.price to a number if it's not already
      const productPrice = typeof product.price === 'number' ? product.price : parseFloat(product.price);
      // Return the sum as a number
      return total + productPrice + 10;
    }, 0);
  };
  useEffect(() => {
    handlePaymentProcess();
  }, []);

  return (
    <div className="backgroundPayments">
      {loading ? (
        <div className="container-fluid">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center position-relative">
              <LottieAnimation animationData={LoadingAnimation} />
              <p
                className="position-absolute"
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(-50%,-50%)`,
                }}
              >
                Processing Payment...
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid " style={{ height: `100vh` }}>
          <div className="row py-5">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <img src="/images/Payments/lucide_check-circle.png" alt="" />
              <h2 style={{ color: `#316d61` }}>Payment Successfully</h2>
              <p className="py-4" style={{ color: `#316d61` }}>
                Amount Paid:
                <span
                  className="font-weight-bold"
                  style={{ fontWeight: `700` }}
                >
                  ${calculateTotalPrice()} {/* Display total price here */}
                </span>
                {/* {parsedObject.map((prod) => {
                  return (
                    <span
                    key={prod.id}
                      className="font-weight-bold"
                      style={{ fontWeight: `700` }}
                    >
                      ${prod.price + 10}
                    </span>
                  );
                })}{" "} */}
              </p>
              <p
                className="font-weight-bold"
                style={{ fontSize: `16px`, color: `#3c1913` }}
              >
                Thank you for your order!
              </p>
              <p
                className="text-center"
                style={{ fontSize: `14px`, color: `#3c1913` }}
              >
                Your payment was processed successfully. <br /> A confirmation
                email has been sent to <br /> your email address.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center position-relative">
              <img
                src="/images/Payments/Group 51.png"
                className="position-absolute"
                style={{ top: `20px` }}
              />
              <img
                src="/images/Payments/Group 66.png"
                className="position-absolute"
                style={{ top: `0`, right: `130px` }}
              />
              <Link
                href={`/`}
                className="d-flex align-items-center position-absolute"
                style={{ top: `140px`, left: `30px` }}
              >
                <img src="/images/Payments/left.png" alt="" />
                <p
                  className="m-0"
                  style={{
                    textDecoration: `underline`,
                    color: `#9b4923`,
                    fontSize: `14px`,
                  }}
                >
                  Return to <br /> Home Page
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccessfully;
