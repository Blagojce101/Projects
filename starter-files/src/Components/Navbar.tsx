import { UserContext } from "@/Context/userContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import SearchSection from "./SearchSection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdownOne, SetOpenDropdownOne] = useState<boolean>(false);
  const [openDropdownTwo, SetOpenDropdownTwo] = useState<boolean>(false);
  const [openDropdownThree, SetOpenDropdownThree] = useState<boolean>(false);
  const [openSearchBar, setOpenSearchBar] = useState<boolean>(false);

  const { currentLoggedInUser, handleLogOut } = useContext(UserContext);

  const router = useRouter();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleHideSearchBar = () => {
    setOpenSearchBar(!openSearchBar);
  };

  const handleDropdownOne = () => {
    SetOpenDropdownOne(!openDropdownOne);
    SetOpenDropdownTwo(false);
    SetOpenDropdownThree(false);
  };

  const handleDropdownTwo = () => {
    SetOpenDropdownOne(false);
    SetOpenDropdownTwo(!openDropdownTwo);
    SetOpenDropdownThree(false);
  };

  const handleDropdownThree = () => {
    SetOpenDropdownOne(false);
    SetOpenDropdownTwo(false);
    SetOpenDropdownThree(!openDropdownThree);
  };

  const setProductByAll = () => {
    router.push({
      pathname: "/products",
    });
    setIsOpen(false);
  };

  const setProductsByCategory = (category: string) => {
    router.push({
      pathname: "/products",
      query: {
        category: category,
      },
    });
    setIsOpen(false);
  };

  const setProductsByBrand = (id: string) => {
    router.push({
      pathname: `/localBrands/brand-detail/${id}`,
    });
    setIsOpen(false);
  };

  const setProductsBySubCategory = (subCategory: string) => {
    router.push({
      pathname: "/products",
      query: {
        subCategory: subCategory,
      },
    });
    setIsOpen(false);
  };

  const displayNoneRoutes =
    router.pathname === "/login" ||
    router.pathname === "/signup" ||
    router.pathname === "/signup/create-profile" ||
    router.pathname === "/signup/create-profile/profile-info" ||
    router.pathname === "/profile" ||
    router.pathname === "/profile/change-password";

  return (
    <>
      {!displayNoneRoutes && (
        <>
          <nav className="fixed-top bg-white">
            <div className="navbar-container py-2">
              <div className="navbar-toggle" onClick={toggleNavbar}>
                {isOpen === false ? (
                  <img src="/toggler.png" alt="" />
                ) : (
                  <i
                    className="fa-solid fa-xmark x-mark-size mx-2"
                    onClick={() => {
                      SetOpenDropdownOne(false);
                      SetOpenDropdownTwo(false);
                      SetOpenDropdownThree(false);
                    }}></i>
                )}
              </div>

              <Link
                href={"/"}
                onClick={() => {
                  setIsOpen(false);
                }}>
                <img
                  src="/logo.png"
                  alt=""
                  style={{ width: "130px", height: "27.77px" }}
                />
              </Link>

              <div
                className={`${
                  isOpen ? "navbar-links active" : "navbar-links"
                } p-3`}>
                <div>
                  <ul>
                    <Link href={"/products"}>
                      <li>
                        <p className="fs-15 m-0 new-font">Ново</p>
                      </li>
                    </Link>

                    <li
                      className="dropdown-1 p-0"
                      onClick={() => {
                        handleDropdownOne();
                      }}>
                      <div className="d-flex align-items-center">
                        <p className="fs-15 m-0 p-0 lifestyle mr-1 pb-1 pointer">
                          Vintage облека
                        </p>
                        <i
                          className={`${
                            openDropdownOne === true
                              ? "arrow-rotate"
                              : "arrow-rotate-back"
                          } fa-solid fa-chevron-down`}></i>
                      </div>

                      <div
                        className={
                          openDropdownOne === true
                            ? "dropdown-menu-1 pl-4"
                            : "d-none"
                        }>
                        <div className="d-flex align-items-center">
                          <img
                            src="/sparks.png"
                            className="sparks-nav"
                            alt=""
                          />
                          <p
                            className="fs-15 m-0 follow-us pointer"
                            onClick={(
                              event: React.MouseEvent<
                                HTMLParagraphElement,
                                MouseEvent
                              >
                            ) => {
                              event.preventDefault();
                              setProductByAll();
                            }}>
                            Види ги сите
                          </p>
                        </div>
                        <p
                          className="fs-15 m-0 lifestyle pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByCategory("блузи");
                          }}>
                          Блузи
                        </p>
                        <p
                          className="fs-15 m-0 lifestyle pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByCategory("панталони");
                          }}>
                          Панталони
                        </p>
                        <p
                          className="fs-15 m-0 lifestyle pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByCategory("здолништа и шорцеви");
                          }}>
                          Здолништа/шорцеви
                        </p>
                        <p
                          className="fs-15 m-0 lifestyle pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByCategory("фустани");
                          }}>
                          Фустани
                        </p>
                        <p
                          className="fs-15 m-0 lifestyle pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByCategory("палта и јакни");
                          }}>
                          Палта и јакни
                        </p>
                        <p
                          className="fs-15 m-0 lifestyle pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByCategory("долна облека");
                          }}>
                          Долна облека
                        </p>
                      </div>
                    </li>

                    <li
                      className="dropdown-2"
                      onClick={() => {
                        handleDropdownTwo();
                      }}>
                      <div className="d-flex align-items-center">
                        <p className="fs-15 lifestyle m-0 mr-1 pb-1 pointer">
                          Брендови
                        </p>
                        <i
                          className={`${
                            openDropdownTwo === true
                              ? "arrow-rotate"
                              : "arrow-rotate-back"
                          } fa-solid fa-chevron-down`}></i>
                      </div>

                      <div
                        className={
                          openDropdownTwo === true
                            ? "dropdown-menu-2 pl-4"
                            : "d-none"
                        }>
                        <div className="d-flex align-items-center">
                          <img
                            src="/sparks.png"
                            className="sparks-nav"
                            alt=""
                          />
                          <p
                            className="fs-15 m-0 follow-us pointer"
                            onClick={(
                              event: React.MouseEvent<
                                HTMLParagraphElement,
                                MouseEvent
                              >
                            ) => {
                              event.preventDefault();
                              router.push({ pathname: "/localBrands" });
                            }}>
                            Види ги сите
                          </p>
                        </div>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByBrand("0");
                          }}>
                          Pinc Partywear
                        </p>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByBrand("1");
                          }}>
                          Factory Girl
                        </p>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByBrand("2");
                          }}>
                          Main Days
                        </p>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByBrand("3");
                          }}>
                          Нежно
                        </p>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByBrand("4");
                          }}>
                          Ред
                        </p>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByBrand("5");
                          }}>
                          Наш
                        </p>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByBrand("6");
                          }}>
                          Зш да не
                        </p>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByBrand("7");
                          }}>
                          Fraeil
                        </p>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByBrand("8");
                          }}>
                          Urma
                        </p>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByBrand("9");
                          }}>
                          Candle Nest
                        </p>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByBrand("10");
                          }}>
                          Beyond Green
                        </p>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsByBrand("11");
                          }}>
                          Gatta
                        </p>
                      </div>
                    </li>

                    <li
                      className="dropdown-3"
                      onClick={() => {
                        handleDropdownThree();
                      }}>
                      <div className="d-flex align-items-center">
                        <p className="fs-15 lifestyle m-0 mr-1 pb-1 pointer">
                          Аксесоари
                        </p>
                        <i
                          className={`${
                            openDropdownThree === true
                              ? "arrow-rotate"
                              : "arrow-rotate-back"
                          } fa-solid fa-chevron-down`}></i>
                      </div>

                      <div
                        className={
                          openDropdownThree === true
                            ? "dropdown-menu-3 pl-4"
                            : "d-none"
                        }>
                        <div className="d-flex align-items-center">
                          <img
                            src="/sparks.png"
                            className="sparks-nav"
                            alt=""
                          />
                          <p
                            className="fs-15 m-0 follow-us pointer"
                            onClick={(
                              event: React.MouseEvent<
                                HTMLParagraphElement,
                                MouseEvent
                              >
                            ) => {
                              event.preventDefault();
                              router.push({
                                pathname: "/products",
                                query: {
                                  ...router.query,
                                  category: "accessories",
                                },
                              });
                              setIsOpen(false);
                            }}>
                            Види ги сите
                          </p>
                        </div>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsBySubCategory("ташни");
                          }}>
                          Ташни
                        </p>
                        <p
                          className="fs-15 lifestyle m-0 pointer"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLParagraphElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setProductsBySubCategory("накит");
                          }}>
                          Накит
                        </p>
                      </div>
                    </li>

                    <li>
                      <p className="fs-15 lifestyle m-0 pb-1 pointer">
                        Lifestyle
                      </p>
                    </li>

                    <Link href={"/giftpage"}>
                      <li
                        style={{ textDecoration: "none" }}
                        onClick={toggleNavbar}>
                        <p className="fs-15 lifestyle m-0 pb-1 pointer">
                          Подари Картичка*
                        </p>
                      </li>
                    </Link>

                    <li>
                      <p className="sale fs-15 m-0 pointer">Попуст</p>
                    </li>
                  </ul>
                </div>

                <div className="navbar-buttons">
                  <Link
                    href={"/cart"}
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                    onClick={toggleNavbar}>
                    <div className="d-flex align-items-center mb-2">
                      <div className="box box-1 text-center">
                        <img src="/cart.png" alt="" />
                      </div>
                      <p className="m-0 text-capitalize fs-15 navbar-buttons-text">
                        кошничка
                      </p>
                    </div>
                  </Link>

                  <Link
                    href={"/favourites"}
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                    onClick={toggleNavbar}>
                    <div className="d-flex align-items-center mb-2">
                      <div className="box box-2 text-center">
                        <img src="/heart.png" alt="" />
                      </div>
                      <p className="m-0 text-capitalize fs-15 navbar-buttons-text">
                        омилени
                      </p>
                    </div>
                  </Link>

                  {currentLoggedInUser ? (
                    <div
                      className="d-flex align-items-center mb-2"
                      style={{ textDecoration: "none" }}>
                      <div className="box box-3 text-center">
                        <img src="/ph-user.png" alt="" />
                      </div>
                      <Link href={"/profile"}>
                        <p className="m-0 fs-15 navbar-buttons-text text-dark">
                          Мој профил &nbsp;
                        </p>
                      </Link>
                      <p
                        className="m-0 fs-15 navbar-buttons-text text-dark"
                        onClick={(
                          event: React.MouseEvent<
                            HTMLParagraphElement,
                            MouseEvent
                          >
                        ) => {
                          event.preventDefault();
                          handleLogOut();
                          toggleNavbar();
                        }}>
                        /&nbsp; Одјави се
                      </p>
                    </div>
                  ) : (
                    <Link href={"/login"}>
                      <div
                        className="d-flex align-items-center mb-2"
                        style={{ textDecoration: "none" }}>
                        <div className="box box-3 text-center">
                          <img src="/ph-user.png" alt="" />
                        </div>
                        <p className="m-0 fs-15 navbar-buttons-text text-dark">
                          Логирај се
                        </p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>

              <button
                className="btn border-0 p-0 m-0"
                onClick={(
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  event.preventDefault();
                  handleHideSearchBar();
                }}>
                <img src="/search-logo.png" alt="" />
              </button>
            </div>
          </nav>
          {openSearchBar === true ? (
            <SearchSection onClick={handleHideSearchBar} />
          ) : null}
        </>
      )}
    </>
  );
};

export default Navbar;
