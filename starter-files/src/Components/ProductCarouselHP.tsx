import { ProductType } from "@/interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductCarouselHP = () => {
  const [carouselProducts, setCarouselProducts] = useState<ProductType[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5001/products`)
      .then((res) => res.json())
      .then((data: ProductType[]) => {
        setCarouselProducts(data);
      });

    return () => {
      setCarouselProducts([]);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide + 1 >= carouselProducts.length ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide - 1 < 0 ? carouselProducts.length - 1 : currentSlide - 1
    );
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <p>Trendy парчиња во моментов:</p>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-inner">
          {carouselProducts.map((product, idx) => (
            <div
              key={`${product.id}-${idx}`}
              className={`carousel-item ${
                idx === currentSlide ? "active" : ""
              }`}>
              <Link href={`/products/product-detail/${product.id}`}>
                <div className="product">
                  <img src={product.img} alt={product.img} />

                  <div className="card-body">
                    <h5 className="card-font">{product.title}</h5>
                    <p className="price-font">{product.price} ден.</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left text-dark fa-2x"></i>
        </button>
        <button className="carousel-control-next" onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right text-dark fa-2x"></i>
        </button>
      </div>
    </>
  );
};

export default ProductCarouselHP;
