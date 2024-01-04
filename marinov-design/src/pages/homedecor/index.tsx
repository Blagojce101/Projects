import React, { useState } from "react";
import style from "../../components/Products/style.module.css";
import Filters from "@/components/Products/Filters";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { API_URL, IProductsPage } from "../jewelry";
import Product from "@/components/Products/Product";
import router from "next/router";

const HomeDecor: NextPage<IProductsPage> = ({
  productsData,
  resProductsFilter,
}) => {
  const [currentFilterImage, setCurrentFilterImage] = useState("");

  const handleFilterSelect = (filterValue: string) => {
    // console.log('searchInput',filterValue)
    // const imageUrl = getImageUrlForFilter(filterValue);
    // setCurrentFilterImage(imageUrl);
    router.push(
      filterValue === "All items"
        ? "/jewelry"
        : `/jewelry?category=${filterValue}`
    );
  };

  const openDetailProduct = (value: string) => {
    router.push(`homedecor/${value}`);
  };

  return (
    <>
      <div className={style.MainProductsPage}>
        <Filters
          images={currentFilterImage}
          onFilterSelect={handleFilterSelect}
        />
        <div className={style.ProductJewelryPage}>
          {productsData.map((productCard) => {
            const { click, ...rest } = productCard;
            return (
              <Product
                click={click || (() => openDetailProduct(productCard.id))}
                key={productCard.id}
                {...rest}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeDecor;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  try {
    let url = `${API_URL}/products_home_decor`;
    if (query.category) {
      url += `?category=${query.category}`;
    }
    if (query.search) {
      url += query.category ? `&` : `?`;
      url += `category=${query.search}`;
    }

    const res = await axios.get(url);
    return {
      props: {
        productsData: res.data,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        productsData: [],
      },
    };
  }
};
