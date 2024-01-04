import GiftCard from "@/Components/GiftCard";
import { GiftCardType } from "@/interfaces/interfaces";
import { GetStaticProps, NextPage } from "next";
import React, { useEffect, useState } from "react";

interface Props {
  giftCardData: GiftCardType[];
}

export const LS_GIFT_CARDS = "giftCards";

const GiftCardPage: NextPage<Props> = ({ giftCardData }) => {
  const [giftCards, setGiftCards] = useState<GiftCardType[]>([]);

  useEffect(() => {
    if (localStorage.getItem(LS_GIFT_CARDS)) {
      const giftCardsFromLS = JSON.parse(localStorage.getItem(LS_GIFT_CARDS)!);
      setGiftCards(giftCardsFromLS);
    } else {
      fetch(`http://localhost:5001/gift_cards`)
        .then((res) => res.json())
        .then((data: GiftCardType[]) => {
          setGiftCards(data);
          localStorage.setItem(LS_GIFT_CARDS, JSON.stringify(data));
        });
    }
  }, []);

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

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12">
            <p>Gift картичка за подарок</p>
          </div>
          <div className="col-12 col-md-4 my-2">
            <img src="/gift-page/img1.png" alt="" style={{ width: "100%" }} />
            <div className="d-flex justify-content-between align-items-center gift-card-sticker1">
              <p className="m-0 ml-3 gift-card-font">Partygirl Gift card</p>
              <img src="/starGreen.png" alt="" className="mr-3" />
            </div>
          </div>
          <div className="col-12 col-md-4 my-2">
            <img src="/gift-page/img2.png" alt="" style={{ width: "100%" }} />
            <div className="d-flex justify-content-between align-items-center gift-card-sticker2">
              <img src="/starBlack.png" alt="" className="ml-3" />
              <p className="m-0 mr-3 gift-card-font">Vintage chick Gift card</p>
            </div>
          </div>
          <div className="col-12 col-md-4 my-2">
            <img src="/gift-page/img3.png" alt="" style={{ width: "100%" }} />
            <div className="d-flex justify-content-between align-items-center gift-card-sticker2">
              <p className="m-0 ml-3 gift-card-font">Wavy baby Gift card</p>
              <img src="/starBlack.png" alt="" className="mr-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 d-flex justify-content-center my-4">
            <p className="m-0 gift-card-font" style={{ fontSize: "23px" }}>
              Одбери цена на подарок картичка:
            </p>
          </div>
          {giftCardData.map((card, idx) => {
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
    </>
  );
};

export default GiftCardPage;

export const getStaticProps: GetStaticProps = async () => {
  const giftCardRes = await fetch(`http://localhost:5001/gift_cards`);
  const giftCardData: GiftCardType[] = await giftCardRes.json();

  return {
    props: { giftCardData },
  };
};
