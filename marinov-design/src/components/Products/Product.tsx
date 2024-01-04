import React from "react";
import style from "./style.module.css";
import { IProductProps } from "@/types/ProjectTypes";

const Product = ({ images, price, name, click }: IProductProps) => {
  return (
    <div onClick={click} className={style.Product}>
      <img src={images[0]} alt="product-img" />
      <div className={style.infoSection}>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Product;
