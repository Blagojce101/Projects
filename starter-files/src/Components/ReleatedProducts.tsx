import { ProductType } from "@/interfaces/interfaces";
import React, { useState } from "react";
import Product from "./Product";

interface Props {
  products: ProductType[];
}

const ReleatedProducts: React.FC<Props> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(products.length / 6);
  const start = (currentPage - 1) * 6;
  const end = start + 6;

  const paginationProductsForDisplaying = products.slice(start, end);

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="container">
        <div className="row mx-auto">
          <div className="col-12">
            <p className="m-0 mt-2 mb-3 releated-page-font">Други парчиња:</p>
          </div>
          {paginationProductsForDisplaying.map((product, idx) => {
            return <Product key={`${product.id}-${idx}`} product={product} />;
          })}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="mr-2 border-0 bg-transparent"
            onClick={() => setCurrentPage(currentPage - 1)}>
            <i className="fa-solid fa-chevron-left text-dark"></i>
          </button>
          {Array.from({ length: totalPages }, (undefined, index) => (
            <span className="m-0 p-0" key={`${index}-${new Date().getTime()}`}>
              <a
                className={`${
                  currentPage === index + 1 ? "active-pagination-button" : ""
                } pagination-button releated-page-font mr-2`}
                onClick={() => handlePage(index + 1)}>
                {index + 1}
              </a>
            </span>
          ))}
          <button
            className="border-0 bg-transparent"
            onClick={() => setCurrentPage(currentPage + 1)}>
            <i className="fa-solid fa-chevron-right text-dark"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReleatedProducts;
