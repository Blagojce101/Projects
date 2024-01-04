import { ProductType } from "@/interfaces/interfaces";
import React, { useEffect, useState } from "react";
import { LS_PRODUCTS } from "../products";
import FavouriteProduct from "@/Components/FavouriteProduct";
import SwitchSection from "@/Components/SwitchSection";
import { GetStaticProps, NextPage } from "next";
import ReleatedProducts from "@/Components/ReleatedProducts";

interface Props {
  productData: ProductType[];
}

const Favourites: NextPage<Props> = ({ productData }) => {
  const [favouriteProducts, setfavouriteProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const productsFromLS = JSON.parse(localStorage.getItem(LS_PRODUCTS)!);

    const favouriteProducts = productsFromLS.filter((product: ProductType) => {
      return product.isFavourite === true;
    });

    setfavouriteProducts(favouriteProducts);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row d-flex mx-auto">
          <SwitchSection />
          {favouriteProducts.length < 1 ? (
            <div className="col-12 text-center">
              <h4 className="my-5">Нема омилени производи.</h4>
            </div>
          ) : (
            favouriteProducts.map((product, idx) => {
              return (
                <FavouriteProduct
                  key={`${product.id}-${idx}`}
                  product={product}
                />
              );
            })
          )}
        </div>
      </div>

      <ReleatedProducts products={productData} />
    </>
  );
};

export default Favourites;

export const getStaticProps: GetStaticProps = async () => {
  const productsRes = await fetch(`http://localhost:5001/products`);
  const productData: ProductType[] = await productsRes.json();

  return {
    props: { productData },
  };
};
