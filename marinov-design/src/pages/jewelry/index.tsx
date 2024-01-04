import Product from "@/components/Products/Product";
import { IProductProps } from "@/types/ProjectTypes";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import style from "../../components/Products/style.module.css";
import React, { useState } from "react";
import Filters from "@/components/Products/Filters";
import router from "next/router";
export const API_URL = "http://localhost:5001";
export interface IProductsPage {
  productsData: IProductProps[];
  resProductsFilter: IProductProps[];
}
const JewelryPage: NextPage<IProductsPage> = ({ productsData }) => {
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
    router.push(`jewelry/${value}`);
  };
  return (
    <div className={style.MainProductsPage}>
      <Filters
        images={currentFilterImage}
        onFilterSelect={handleFilterSelect}
      />
      {/* <h1>Jewelry</h1> */}

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
  );
};

export default JewelryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  try {
    let url = `${API_URL}/products`;
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
