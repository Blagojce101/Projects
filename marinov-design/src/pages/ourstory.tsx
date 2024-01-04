import React from 'react';
import OurStory from '@/components/OurStory/OurStory';
import { GetStaticProps, NextPage } from 'next';

interface ImageProps {
  imageUrl: string;
  id: number;
}
interface OurStoryProps{
  images: ImageProps[]
}

const ourstory: NextPage<OurStoryProps> = ({images}) => {
  return (
    <div>
        <OurStory images={images}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5001/ourstorycarousel");
  const data: ImageProps[] = await res.json();

  return {
    props: {
      images: data,
    },
  };
};
export default ourstory