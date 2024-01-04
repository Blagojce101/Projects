import { Inter } from "next/font/google";
import FirstSectionRight from "@/Components/FirstSectionRight";
import ThirdSectionLeft from "@/Components/ThirdSectionLeft";
import FourthSection from "@/Components/FourthSection";
import Head from "next/head";
import Navbar from "@/Components/Navbar";
import ProductCarouselHP from "@/Components/ProductCarouselHP";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Игралиште.мк</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <FirstSectionRight />
      <ProductCarouselHP />
      <ThirdSectionLeft />
      <FourthSection />
    </>
  );
}
