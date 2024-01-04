import { ProductType } from "@/interfaces/interfaces";
import Link from "next/link";
import React from "react";

interface Props {
  product: ProductType;
}

const FavouriteProduct: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-6 border-0">
        <Link href={`/products/product-detail/${product.id}`}>
          <div
            className="card border-0 bg-transparent w-100"
            style={{ width: "18rem" }}>
            <img src={product.img} alt={product.img} />
            <div className="card-body p-0 pt-2">
              <h5 className="card-font">{product.title}</h5>
              <p className="price-font">{product.price} ден.</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default FavouriteProduct;
