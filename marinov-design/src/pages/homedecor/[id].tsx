import { ProductType } from "@/Interfaces/interfaces";
import ProductDetail from "@/components/Products/ProductDetail/ProductDetail";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

interface Props {
  product: ProductType;
  productsData: ProductType[];
}

const ProductDetailPage: NextPage<Props> = ({ product, productsData }) => {
  return (
    <>
      <ProductDetail product={product} products={productsData} />
    </>
  );
};

export default ProductDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const productRes = await fetch(`http://localhost:5001/products_home_decor`);
  const productData: ProductType[] = await productRes.json();

  const paths = productData.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let product: ProductType | undefined = undefined;

  if (params?.id) {
    const productRes = await fetch(
      `http://localhost:5001/products_home_decor/${params.id}`
    );
    product = await productRes.json();
  }

  const productsRes = await fetch(`http://localhost:5001/products_home_decor`);
  const productsData: ProductType[] = await productsRes.json();

  return {
    props: { product, productsData },
  };
};
