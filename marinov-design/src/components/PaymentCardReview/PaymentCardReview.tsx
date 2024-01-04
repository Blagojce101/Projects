import { IProductProps } from "@/types/ProjectTypes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PaymentCardReview: React.FC = () => {
  const router = useRouter();
  const [discount, isDiscountShown] = useState<boolean>(false);

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

  const removeItems = () => {
    localStorage.clear();
    setParsedObject([]);
    router.reload();
  };

  return (
    <React.Fragment>
      <div
        className="col-11 mr-auto ml-auto d-flex justify-content-between p-0 pb-1"
        style={{ borderBottom: `#3c1913 1px solid` }}
      >
        <p style={{ color: `#3c1913` }} className="m-0">
          Product
        </p>
        <p style={{ color: `#3c1913` }} className="m-0">
          Price
        </p>
      </div>
      {parsedObject.map((prod) => {
        return (
          <div className="col-12">
            <div
              className="d-flex py-3"
              style={{ borderBottom: `#3c1913 1px solid` }}
            >
              <img
                src={`${prod.images[0]}`}
                className="w-100 d-block img"
                alt=""
              />

              <div className="col-8 d-flex flex-column">
                <p style={{ color: `#3c1913` }}>{prod.name}</p>
                <button
                  onClick={() => {
                    removeItems();
                  }}
                  style={{
                    textDecoration: `underline`,
                    color: `#9b4923`,
                    background: `none`,
                    border: `none`,
                    padding: `0`,
                    width: `fit-content`,
                  }}
                >
                  Remove
                </button>
              </div>
              <p style={{ color: `#3c1913` }}>${prod.price}</p>
            </div>

            <div className="d-flex justify-content-between px-0 flex-column">
              <div className="d-flex justify-content-between pt-3 mb-1">
                <p className="m-0" style={{ color: `#3c1913` }}>
                  Subtotal
                </p>
                <p className="m-0" style={{ color: `#3c1913` }}>
                  ${prod.price}
                </p>
              </div>
              <div
                className="d-flex justify-content-between pb-3"
                style={{ borderBottom: `#3c1913 1px solid` }}
              >
                <p className="m-0" style={{ color: `#3c1913` }}>
                  Shipping
                </p>
                <p className="m-0" style={{ color: `#3c1913` }}>
                  $10
                </p>
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ paddingBottom: `56px` }}
              >
                <p
                  className="m-0"
                  style={{ fontSize: `16px`, color: `#3c1913` }}
                >
                  {router.pathname === `/cartPage`
                    ? `Subtotal`
                    : router.pathname === `/payments`
                    ? `TOTAL`
                    : null}
                </p>
                <p
                  className="m-0"
                  style={{ fontSize: `32px`, color: `#3c1913` }}
                >
                  ${+prod.price + 10}
                </p>
              </div>
            </div>

            {router.pathname === `/payments` && (
              <div
                className="d-flex align-items-center justify-content-between px-0"
                onClick={() => {
                  isDiscountShown(!discount);
                }}
              >
                <img src="/images/Payments/Group 62.png" alt="" />
                <p className="m-0">I have a Discount Code / Gift Card</p>
                <img
                  src="/images/Payments/down.png"
                  alt=""
                  style={{
                    transform: `${discount ? "rotate(180deg)" : "none"}`,
                  }}
                />
              </div>
            )}

            {router.pathname === `/payments` && discount && (
              <div className="d-flex align-items-center justify-content-center py-3">
                <input
                  type="text"
                  className="p-2"
                  style={{
                    border: `0.8px solid #3c1913`,
                    color: `#3c1913`,
                    background: `#f5f3f1`,
                  }}
                  placeholder="Enter your code here..."
                />
                <button
                  className="ml-3 p-2 btn"
                  style={{
                    borderRadius: `16px 0px 16px 0px`,
                    border: `0.8px solid #3c1913`,
                    color: `#3c1913`,
                  }}
                >
                  Apply
                </button>
              </div>
            )}

            <div className="px-0">
              {router.pathname === `/cartPage` ? (
                <Link
                href={`/payments`}
                className="w-100 btn"
                style={{
                  borderRadius: `16px 0px 16px 0px`,
                  color: `#FBFAF8`,
                  background: `#3c1913`,
                }}
              >
                Checkout
              </Link>
              ) : null}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default PaymentCardReview;
