import {
  CollapseType,
  GiftCardType,
  ProductType,
} from "@/interfaces/interfaces";
import React, { useEffect, useState } from "react";
import { LS_PRODUCTS } from "../products";
import FavouriteProduct from "@/Components/FavouriteProduct";
import SwitchSection from "@/Components/SwitchSection";
import { GetStaticProps, NextPage } from "next";
import CollapseSection from "@/Components/CollapseSection";
import OrderFormPopUp from "@/Components/OrderFormPopUp";
import { LS_GIFT_CARDS } from "../giftpage";
import ReleatedProducts from "@/Components/ReleatedProducts";
import GiftCard from "@/Components/GiftCard";

interface Props {
  collapseData: CollapseType;
  productData: ProductType[];
}

const LS_PRODUCTS_IN_CART = "productsInCart";
const LS_CARDS_IN_CART = "cardsInCart";
const SHIPPING_COST = 150;

const Cart: NextPage<Props> = ({ collapseData, productData }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [productsInCart, setProductsInCart] = useState<ProductType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>();
  const [toggleOrderForm, setToggleOrderForm] = useState<boolean>(false);
  const [giftCards, setGiftCards] = useState<GiftCardType[]>([]);
  const [cardsInCart, setCardsInCart] = useState<GiftCardType[]>([]);

  useEffect(() => {
    const productsFromLS = JSON.parse(localStorage.getItem(LS_PRODUCTS)!);
    setProducts(productsFromLS);

    const addProductsInCart = productsFromLS.filter((product: ProductType) => {
      return product.addToCart === true;
    });

    localStorage.setItem(
      LS_PRODUCTS_IN_CART,
      JSON.stringify(addProductsInCart)
    );
    setProductsInCart(addProductsInCart);

    return () => {
      localStorage.removeItem(LS_PRODUCTS_IN_CART);
    };
  }, []);

  useEffect(() => {
    const cardsFromLS = JSON.parse(localStorage.getItem(LS_GIFT_CARDS)!);
    setGiftCards(cardsFromLS);

    const addCardsInCart = cardsFromLS.filter((card: GiftCardType) => {
      return card.addToCart === true;
    });

    localStorage.setItem(LS_CARDS_IN_CART, JSON.stringify(addCardsInCart));
    setCardsInCart(addCardsInCart);

    return () => {
      localStorage.removeItem(LS_CARDS_IN_CART);
    };
  }, []);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const productsTotal = productsInCart.reduce(
        (accumulator, currentProduct) =>
          accumulator + parseFloat(currentProduct.price),
        0
      );

      const cardsTotal = cardsInCart.reduce(
        (accumulator, currentProduct) =>
          accumulator + parseFloat(currentProduct.title.toString()),
        0
      );

      const total = productsTotal + SHIPPING_COST + cardsTotal;
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [productsInCart, cardsInCart]);

  const handleToggleForm = () => {
    setToggleOrderForm(true);
  };

  const closePopUp = () => {
    setToggleOrderForm(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const resetCart = () => {
    const updatedProducts = products.map((product) => ({
      ...product,
      addToCart: false,
    }));

    localStorage.setItem(LS_PRODUCTS, JSON.stringify(updatedProducts));

    setProducts([]);
    setProductsInCart([]);
  };

  const areArraysEmpty = productsInCart.length > 0 && cardsInCart.length > 0;

  const handleAddCardToCard = (id: string) => {
    const updatedGiftCards = giftCards.map((card) => {
      if (card.id === id) {
        const updatedCard = {
          ...card,
          addToCart: !card.addToCart,
        };
        return updatedCard;
      }
      return card;
    });

    setGiftCards(updatedGiftCards);
    localStorage.setItem(LS_GIFT_CARDS, JSON.stringify(updatedGiftCards));
  };

  const arrayLength = productsInCart.length > 0 || cardsInCart.length > 0;

  return (
    <>
      <div className="container">
        <div className="row d-flex mx-auto">
          <SwitchSection />
          {productsInCart.length < 1 ? (
            <div className="col-12 text-center">
              <h4 className="my-5">Нема производи во кошничка.</h4>
            </div>
          ) : (
            productsInCart.map((product, idx) => {
              return (
                <FavouriteProduct
                  key={`${product.id}-${idx}`}
                  product={product}
                />
              );
            })
          )}
          {cardsInCart.map((card, idx) => {
            return (
              <GiftCard
                key={`${card.id}-${idx}`}
                card={card}
                handleAddCardToCard={handleAddCardToCard}
              />
            );
          })}
        </div>
      </div>
      {arrayLength && (
        <>
          <div className="container d-flex justify-content-center my-4">
            <div className="row">
              {productsInCart.map((product, idx) => {
                return (
                  <div
                    key={idx}
                    className="col-12 d-flex justify-content-between">
                    <p className="calculation-font">{product.title}</p>
                    <p className="calculation-font">{product.price} ден.</p>
                  </div>
                );
              })}
              {cardsInCart.map((card, idx) => {
                return (
                  <div
                    key={idx}
                    className="col-12 d-flex justify-content-between">
                    <p className="calculation-font">Gift Card</p>

                    <p className="calculation-font">{card.title} ден.</p>
                  </div>
                );
              })}
              <div className="col-12 d-flex justify-content-between">
                <p className="calculation-font" style={{ color: "#8A8328" }}>
                  + достава до адреса
                </p>
                <p className="calculation-font" style={{ color: "#8A8328" }}>
                  {SHIPPING_COST} ден.
                </p>
              </div>
              <div className="line"></div>
              <div className="col-12 d-flex justify-content-between my-3">
                <p
                  className="m-0 calculation-font"
                  style={{ fontSize: "23px", color: "black" }}>
                  Вкупно:
                </p>
                <p
                  className="m-0 calculation-font"
                  style={{ fontSize: "23px", color: "black" }}>
                  {totalPrice} ден.
                </p>
              </div>
              <div className="line"></div>
            </div>
          </div>
          <div className="container d-flex justify-content-center align-items-center my-4">
            <div className="row">
              <div className="col-12">
                <button
                  className="footer-button padding-cart-btn mr-4 calculation-font"
                  style={{ color: "black" }}
                  onClick={(
                    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    event.preventDefault();
                    handleToggleForm();

                    scrollToTop();
                  }}>
                  Продолжи
                </button>
                <button className="bg-transparent trash-btn">
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <CollapseSection text={collapseData.text} />
      <OrderFormPopUp
        value={toggleOrderForm}
        closePopUp={closePopUp}
        resetCart={resetCart}
        scrollToTop={scrollToTop}
      />
      <ReleatedProducts products={productData} />
    </>
  );
};

export default Cart;

export const getStaticProps: GetStaticProps = async () => {
  const collapseRes = await fetch(`http://localhost:5001/collapse_text`);
  const collapseData: CollapseType = await collapseRes.json();

  const productsRes = await fetch(`http://localhost:5001/products`);
  const productData: ProductType[] = await productsRes.json();

  return {
    props: { collapseData, productData },
  };
};
