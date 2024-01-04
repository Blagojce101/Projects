import { ProductType } from "@/interfaces/interfaces";
import React, { useState } from "react";
import Product from "./Product";

interface Props {
  onClick: () => void;
}

const SearchSection: React.FC<Props> = ({ onClick }) => {
  const [searchProducts, setSearchProducts] = useState<string>("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSearchProducts = () => {
    fetch(`http://localhost:5001/products?q=${searchProducts}`)
      .then((res) => res.json())
      .then((data: ProductType[]) => {
        setProducts(data);
      });
  };

  const totalPages = Math.ceil(products.length / 6);
  const start = (currentPage - 1) * 6;
  const end = start + 6;

  const paginationProductsForDisplaying = products.slice(start, end);

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="container search-section pt-4 pb-5">
        <div className="row mx-auto">
          <div className="col-12 d-flex justify-content-between align-items-center mt-2 mb-4">
            <i className="fa-solid fa-chevron-left" onClick={onClick}></i>
            <input
              type="text"
              value={searchProducts}
              placeholder="Пребарувај..."
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                setSearchProducts(event.target.value);
                handleSearchProducts();
              }}
            />
            {searchProducts.length < 1 ? (
              <img
                src="/search-logo.png"
                alt=""
                className="image-xMark-position"
                style={{ width: "30px" }}
              />
            ) : (
              <i
                className="fa-solid fa-xmark image-xMark-position mr-2"
                onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
                  event.preventDefault();
                  setSearchProducts("");
                }}></i>
            )}
          </div>

          {paginationProductsForDisplaying.map((product, idx) => {
            return <Product key={`${product.id}-${idx}`} product={product} />;
          })}
        </div>
        {paginationProductsForDisplaying.length > 0 && (
          <div className="d-flex justify-content-center align-items-center pb-5 mb-5">
            <button
              className="mr-2 border-0 bg-transparent"
              onClick={() => setCurrentPage(currentPage - 1)}>
              <i className="fa-solid fa-chevron-left text-dark"></i>
            </button>
            {Array.from({ length: totalPages }, (undefined, index) => (
              <span
                className="m-0 p-0"
                key={`${index}-${new Date().getTime()}`}>
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
        )}
      </div>
    </>
  );
};

export default SearchSection;
