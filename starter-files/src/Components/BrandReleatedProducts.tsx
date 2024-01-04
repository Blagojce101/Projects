import { ProductType } from "@/interfaces/interfaces";
import React from "react";
import Product from "./Product";

interface Props {
  products: ProductType[];
}

const BrandReleatedProducts: React.FC<Props> = ({ products }) => {
  return (
    <>
      <div className="container mb-4">
        <div className="row mx-auto">
          <div className="col-12 mb-3">
            <p className="m-0 brand-page-font" style={{ fontSize: "20px" }}>
              Парчиња од брендот:
            </p>
          </div>
          {products.map((product, idx) => {
            return <Product key={`${product.id}-${idx}`} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BrandReleatedProducts;
