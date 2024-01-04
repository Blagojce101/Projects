import CustomOrders, { CustomOrdersProps, Image } from '@/components/CustomOrders/CustomOrders'
import { GetStaticProps, NextPage } from 'next';
import React from 'react';



const customorders: NextPage<CustomOrdersProps> = ({images}) => {
  return (
    <div>
      <CustomOrders images={images}/>
      </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5001/gallery");
  const data: Image[] = await res.json();

  return {
    props: {
      images: data,
    },
  };
};

export default customorders