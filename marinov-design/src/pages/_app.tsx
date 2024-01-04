import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ScrollBar from "@/components/Scroll/ScrollBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isHomePage = router.pathname === "/";
  return (
    <>
      {router.pathname.startsWith(`/payments`) ? null : (
        <Header isHomePage={isHomePage} />
      )}
      <ScrollBar />
      <Component {...pageProps} />
      {router.pathname.startsWith(`/payments`) ||
      router.pathname.startsWith(`/cartPage`) ? null : (
        <Footer />
      )}
    </>
  );
}
