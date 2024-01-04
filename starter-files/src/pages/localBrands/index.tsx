import BrandCard from "@/Components/BrandCard";
import { BrandType } from "@/interfaces/interfaces";
import { GetStaticProps, NextPage } from "next";
import React from "react";

interface Props {
  brandData: BrandType[];
}

const BrandPage: NextPage<Props> = ({ brandData }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center flex-wrap mx-auto">
        {brandData.map((brand, idx) => {
          return <BrandCard key={`${brand.id}-${idx}`} brand={brand} />;
        })}
        {}
      </div>
    </div>
  );
};

export default BrandPage;

export const getStaticProps: GetStaticProps = async () => {
  const brandRes = await fetch(`http://localhost:5001/localBrands`);
  const brandData: BrandType[] = await brandRes.json();

  return { props: { brandData } };
};
