import React, { useState } from "react";
import style from "./style.module.css";
import { ProductType } from "@/Interfaces/interfaces";

interface Props {
  products: ProductType[];
}

const SwiperReleatedProducts: React.FC<Props> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    const newIndex =
      currentIndex === 0 ? products.length - 3 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === products.length - 3 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="my-2"
            style={{
              display: "flex",
              transition: "transform 0.5s",
              transform: `translateX(-${currentIndex * 20}%)`,
            }}>
            {products.map((product) => (
              <div
                key={product.id}
                style={{ width: "100px", marginRight: "15px" }}>
                <img
                  src={product.images[currentIndex]}
                  alt={product.name}
                  style={{ width: "100%" }}
                />
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button className="text-dark border-0 ml-5" onClick={handlePrev}>
            Prev
          </button>
          <button className="text-dark border-0 mr-5" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default SwiperReleatedProducts;
