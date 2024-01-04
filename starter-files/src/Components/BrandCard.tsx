import { BrandType } from "@/interfaces/interfaces";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  brand: BrandType;
}

const BrandCard: React.FC<Props> = ({ brand }) => {
  const router = useRouter();

  return (
    <div
      className="col-sm-12 col-md-5 col-lg-3 brand-card p-3 px-1 text-center m-2"
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();

        router.push({
          pathname: `/localBrands/brand-detail/${brand.id}`,
        });
      }}>
      <div className="mb-3">
        <img src={brand.brand_image} alt="" className="w-100 round" />
      </div>
      <p className="m-0 text-capitalize">{brand.brandName}</p>
    </div>
  );
};

export default BrandCard;
