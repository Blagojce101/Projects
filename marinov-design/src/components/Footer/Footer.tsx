import React from "react";
import style from "./style.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.FooterTop}>
        <img
          src="/images/footer/footer_top_section_bg.png"
          alt="footer_background"
        />
        <img
          src="/images/icon-svgs/Vector (1).svg"
          alt="logo"
          className={style.FooterLogo}
        />
        <Link href="ourStory" className={style.LinkToOurStory}>
          See Our Story
        </Link>
      </div>
      <div className={style.FooterContent}>
        <img
          src="/images/icon-svgs/logotype.svg"
          alt="logotype"
          className={style.LogoType}
        />

        <div className={style.Title}>
          <Link href="/jewelry">
            <h3>Jewelry</h3>
          </Link>
          <h3>EN | MK</h3>
        </div>
        <div className={style.Subtitle}>
          <ul>
            <Link href="/jewelry?category=Earrings">
              <li>Earrings</li>
            </Link>
            <Link href="/jewelry?category=Rings">
              <li>Rings</li>
            </Link>
            <Link href="/jewelry?category=Necklaces">
              <li>Nechlaces</li>
            </Link>
            <Link href="/jewelry?category=Bracelets">
              <li>Bracelets</li>
            </Link>
            <Link href="/jewelry?category=Sets">
              <li>Sets</li>
            </Link>
            <Link href="/jewelry?category=Other">
              <li>Other</li>
            </Link>
          </ul>
        </div>
        <div className={style.Title}>
          <Link href="/homedecor">
            <h3>Home decor</h3>
          </Link>
        </div>
        <div className={style.Subtitle}>
          <ul>
            <Link href="/homedecor">
              <li>Helmets</li>
            </Link>
            <Link href="/">
              <li>Other</li>
            </Link>
          </ul>
        </div>
        <div className={style.Title}>
          <Link href={"/customorders"}>
            <h3>Custom orders</h3>
          </Link>
        </div>
        <div className={style.Title}>
          <Link href={"/ourstory"}>
            <h3>Our story</h3>
          </Link>
        </div>
        <div className={style.Title}>
          <Link href={"/FAQ"}>
            <h3>Faq</h3>
          </Link>
        </div>
        <div className={style.Title}>
          <h3>Contact</h3>
        </div>
        <div className={style.Title}>
          <h3>Profile</h3>
        </div>

        <div className={style.SocialMedia}>
          <a href="">
            <img src="/images/footer/instagram.png" alt="instagramLogo" />
          </a>
          <a href="">
            <img src="/images/footer/facebook.png" alt="facebookLogo" />
          </a>
          <a href="">
            <img src="/images/footer/whatsapp.png" alt="whatsappLogo" />
          </a>
        </div>

        <div className={style.Subtitle}>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Shipping and Returns Policy</p>
        </div>

        <div className={style.Copyright}>
          <p>&copy; Marinov Design 2023 - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
