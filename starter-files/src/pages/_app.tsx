import Footer from "@/Components/Footer";
import MovingText from "@/Components/MovingText";
import Navbar from "@/Components/Navbar";
import UserContextConstructor from "@/Context/userContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserContextConstructor>
        <Navbar />
        <MovingText />
        <Component {...pageProps} />
        <Footer />
      </UserContextConstructor>
    </>
  );
}
