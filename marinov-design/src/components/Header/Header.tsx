import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Link from "next/link";

interface HeaderProps {
  isHomePage: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHomePage }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      const scrollThreshold = 100;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.onscroll = handleScroll;
    return () => {
      window.onscroll = null;
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("test");
  };

  return (
    <div className={style.Header}>
      <div onClick={toggleMenu}>
        <img
          src="/images/icon-svgs/hamburger_menu.svg"
          alt="hamburger_menu"
          className={style.Burger}
        />
        <ul className={`${style.Ul} ${isMenuOpen ? style.UlOpen : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/jewelry">Jewelry</Link>
          </li>
          <li>
            <Link href="/homedecor">Home Decor</Link>
          </li>
          <li>
            <Link href="/customorders">Custom Orders</Link>
          </li>
          <li>
            <Link href="/ourstory">Our story</Link>
          </li>
          <li>
            <Link href="/FAQ">FAQ</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>EN | MK</li>
        </ul>
      </div>
      <div className={style.LogoDiv}>
        {isHomePage ? (
          <>
            <img
              src="images/icon-svgs/logo_scroll.svg"
              alt="logo_scroll"
              className={`${style.LogoScroll} ${
                isScrolled ? style.LogoScrollVisible : ""
              }`}
            />
            <img src="/images/icon-svgs/Vector.svg" alt="logo" />
          </>
        ) : (
          <Link href={"/"}>
            <img src="/images/icon-svgs/Vector.svg" alt="logo" />
          </Link>
        )}
      </div>
      <div>
        <Link href={"/cartPage"}>
          <img
            src="/images/icon-svgs/cart.svg"
            alt="card"
            className={style.Cart}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
