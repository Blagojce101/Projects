import { ProductType } from "@/interfaces/interfaces";
import { LS_PRODUCTS } from "@/pages/products";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SwitchSection: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const { pathname } = useRouter();

  useEffect(() => {
    if (localStorage.getItem(LS_PRODUCTS)) {
      const productsFromLS = JSON.parse(localStorage.getItem(LS_PRODUCTS)!);
      setProducts(productsFromLS);
    }
  }, []);

  const favouriteProducts = products.filter(
    (product) => product.isFavourite === true
  );
  const numberOfFavourites = favouriteProducts.length;

  const cartProducts = products.filter((product) => product.addToCart === true);
  const numberOfCartProducts = cartProducts.length;

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row d-flex">
          <div className="col-6 d-flex justify-content-center">
            <Link href={"/cart"}>
              <div
                className={`${
                  pathname === "/cart" ? "switch-font-active" : ""
                } d-flex justify-content-center text-dark switch-text-font`}>
                <img
                  src="/cart.png"
                  alt="/cart.png"
                  className="mr-1"
                  style={{ width: "20px", height: "20px" }}
                />
                <p className="m-0 mr-2">Кошничка</p>
                <span>{`(${numberOfCartProducts})`}</span>
              </div>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Link href={"/favourites"}>
              <div
                className={`${
                  pathname === "/favourites" ? "switch-font-active" : ""
                } d-flex justify-content-center text-dark switch-text-font`}>
                <i className="fa-regular fa-heart mr-1 mt-1"></i>
                <p className="m-0 mr-2">Омилени</p>
                <span>{`(${numberOfFavourites})`}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="line mt-2" />
      </div>
    </>
  );
};

export default SwitchSection;
