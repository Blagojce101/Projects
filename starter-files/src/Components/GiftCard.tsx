import { GiftCardType } from "@/interfaces/interfaces";
import React from "react";

interface Props {
  card: GiftCardType;
  handleAddCardToCard: (id: string) => void;
}

const GiftCard: React.FC<Props> = ({ card, handleAddCardToCard }) => {
  return (
    <>
      <div className="col-12 d-flex justify-content-center mb-2">
        <div
          className="gift-card d-flex justify-content-center align-items-center"
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            event.preventDefault();
            handleAddCardToCard(card.id);
          }}>
          <p className="m-0 gift-card-font2">{card.title}</p>
        </div>
      </div>
    </>
  );
};

export default GiftCard;
