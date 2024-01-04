import { ProductType } from "@/interfaces/interfaces";
import { LS_PRODUCTS } from "@/pages/products";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface Props {
  closeFilterMenu: () => void;
}

const SideFilterMenu: React.FC<Props> = ({ closeFilterMenu }) => {
  const [chooseCategory, setChooseCategory] = useState<string[]>([]);
  const [chooseBrand, setChooseBrand] = useState<string[]>([]);
  const [chooseSubCategory, setChooseSubCategory] = useState<string[]>([]);
  const [chooseSize, setChooseSize] = useState<string[]>([]);
  const [chooseColor, setChooseColor] = useState<string[]>([]);
  const [choosePrice, setChoosePrice] = useState<string[]>([]);
  const [searchProducts, setSearchProducts] = useState<string>("");

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    if (localStorage.getItem(LS_PRODUCTS)) {
      const profuctsFromLS = JSON.parse(localStorage.getItem(LS_PRODUCTS)!);
      setProducts(profuctsFromLS);
    }
  }, []);

  const router = useRouter();

  const handleChooseCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const updatedCategory = [...chooseCategory];
    if (updatedCategory.includes(value)) {
      const index = updatedCategory.indexOf(value);
      updatedCategory.splice(index, 1);
    } else {
      updatedCategory.push(value);
    }
    setChooseCategory(updatedCategory);
  };

  const handleChooseBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const updatedBrand = [...chooseBrand];

    if (updatedBrand.includes(value)) {
      const index = updatedBrand.indexOf(value);
      updatedBrand.splice(index, 1);
    } else {
      updatedBrand.push(value);
    }

    setChooseBrand(updatedBrand);
  };

  const handleChooseSubCategory = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const updatedSubCategory = [...chooseSubCategory];

    if (updatedSubCategory.includes(value)) {
      const index = updatedSubCategory.indexOf(value);
      updatedSubCategory.splice(index, 1);
    } else {
      updatedSubCategory.push(value);
    }

    setChooseSubCategory(updatedSubCategory);
  };

  const handleChooseSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const updatedSize = [...chooseSize];

    if (updatedSize.includes(value)) {
      const index = updatedSize.indexOf(value);
      updatedSize.splice(index, 1);
    } else {
      updatedSize.push(value);
    }

    setChooseSize(updatedSize);
  };

  const handleChooseColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const updatedColor = [...chooseColor];

    if (updatedColor.includes(value)) {
      const index = updatedColor.indexOf(value);
      updatedColor.splice(index, 1);
    } else {
      updatedColor.push(value);
    }

    setChooseColor(updatedColor);
  };

  const handleChoosePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const updatedPrice = [...choosePrice];

    if (updatedPrice.includes(value)) {
      const index = updatedPrice.indexOf(value);
      updatedPrice.splice(index, 1);
    } else {
      updatedPrice.push(value);
    }

    setChoosePrice(updatedPrice);
  };

  const applyFilters = () => {
    const queryParams = new URLSearchParams();

    chooseCategory.map((category) => {
      queryParams.append("category", category);
    });

    chooseBrand.map((brand) => {
      queryParams.append("brand", brand);
    });

    chooseSize.map((size) => {
      queryParams.append("size", size);
    });

    chooseColor.map((color) => {
      queryParams.append("color", color);
    });

    chooseSubCategory.map((subCategory) => {
      queryParams.append("subCategory", subCategory);
    });

    choosePrice.map((price) => {
      queryParams.append("price", price);
    });

    if (searchProducts === "") {
      router.push(`?${queryParams.toString()}`);
    } else {
      router.push({
        pathname: "/products",
        query: {
          ...router.query,
          q: searchProducts,
        },
      });
    }

    closeFilterMenu();
  };

  const tShirts = products.filter((product) => product.category === "блузи");
  const numberOfTShirts = tShirts.length;

  const trousers = products.filter(
    (product) => product.category === "панталони"
  );
  const numberOfTrousers = trousers.length;

  const skirtAndShorts = products.filter(
    (product) => product.category === "здолништа и шорцеви"
  );
  const numberOfSkirtAndShorts = skirtAndShorts.length;

  const dresses = products.filter((product) => product.category === "фустани");
  const numberOfDresses = dresses.length;

  const coatsAndJackets = products.filter(
    (product) => product.category === "палта и јакни"
  );
  const numberOfCoatsAndJackets = coatsAndJackets.length;

  const underwear = products.filter(
    (product) => product.category === "долна облека"
  );
  const numberOfUnderwear = underwear.length;

  return (
    <div className="container-fluid filter-menu d-flex justify-content-center">
      <div className="row px-4">
        <div className="col-12 mb-3">
          {/* SEARCH INPUT */}
          <input
            type="text"
            className="filter-search-input"
            placeholder="Пребарувај..."
            value={searchProducts}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              event.preventDefault();
              setSearchProducts(event.target.value);
            }}
          />
          <button className="filter-search-button">
            <img src="./searchFilter.png" alt="" />
          </button>
          {/* SEARCH INPUT */}
        </div>

        <div className="col-12 mb-3">
          <h5
            className="filter-category-font filter-category-BB"
            style={{ width: "43%" }}>
            Категорија
          </h5>

          <div>
            <input
              type="checkbox"
              name="category"
              id="bluzi"
              className="mr-2"
              value="блузи"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseCategory(event);
              }}
            />
            <label htmlFor="bluzi">Блузи ({numberOfTShirts})</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="category"
              id="pantaloni"
              className="mr-2"
              value="панталони"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseCategory(event);
              }}
            />
            <label htmlFor="pantaloni">Панталони ({numberOfTrousers})</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="category"
              id="sorcevi"
              className="mr-2"
              value="здолништа и шорцеви"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseCategory(event);
              }}
            />
            <label htmlFor="sorcevi">
              Здолништа/шорцеви ({numberOfSkirtAndShorts})
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="category"
              id="fustani"
              className="mr-2"
              value="фустани"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseCategory(event);
              }}
            />
            <label htmlFor="fustani">Фустани ({numberOfDresses})</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="category"
              id="palta"
              className="mr-2"
              value="палта и јакни"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseCategory(event);
              }}
            />
            <label htmlFor="palta">
              Палта и јакни ({numberOfCoatsAndJackets})
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="category"
              id="dolnaObleka"
              className="mr-2"
              value="долна облека"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseCategory(event);
              }}
            />
            <label htmlFor="dolnaObleka">
              Долна облека ({numberOfUnderwear})
            </label>
          </div>
        </div>

        <div className="col-12 mb-3">
          <h5
            className="filter-category-font filter-category-BB"
            style={{ width: "35%" }}>
            Брендови
          </h5>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="brand"
              value="pinc partywear"
              id="pincPartywear"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseBrand(event);
              }}
            />
            <label htmlFor="pincPartywear">Pinc Partywear</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="brand"
              value="factory girl"
              id="factoryGirl"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseBrand(event);
              }}
            />
            <label htmlFor="factoryGirl">Factory Girl</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="brand"
              value="main days"
              id="mainDays"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseBrand(event);
              }}
            />
            <label htmlFor="mainDays">Main Days</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="brand"
              value="нежно"
              id="nezno"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseBrand(event);
              }}
            />
            <label htmlFor="nezno">Нежно</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="brand"
              value="ред"
              id="red"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseBrand(event);
              }}
            />
            <label htmlFor="red">Ред</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="brand"
              value="наш"
              id="nash"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseBrand(event);
              }}
            />
            <label htmlFor="nash">Наш</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="brand"
              value="зш да не"
              id="zshDaNe"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseBrand(event);
              }}
            />
            <label htmlFor="zshDaNe">Зш да не</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="brand"
              value="fraeil"
              id="fraeil"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseBrand(event);
              }}
            />
            <label htmlFor="fraeil">Fraeil</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="brand"
              value="urma"
              id="urma"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseBrand(event);
              }}
            />
            <label htmlFor="urma">Urma</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="brand"
              value="candle nest"
              id="candleNest"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseBrand(event);
              }}
            />
            <label htmlFor="candleNest">Candle Nest</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="brand"
              value="beyond green"
              id="beyondGreen"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseBrand(event);
              }}
            />
            <label htmlFor="beyondGreen">Beyond Green</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="brand"
              value="gatta"
              id="gatta"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseBrand(event);
              }}
            />
            <label htmlFor="gatta">Gatta</label>
          </div>
        </div>

        <div className="col-12 mb-3">
          <h5
            className="filter-category-font filter-category-BB"
            style={{ width: "35%" }}>
            Аксесоари
          </h5>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="subCategory"
              value="накит"
              id="nakit"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseSubCategory(event);
              }}
            />
            <label htmlFor="nakit">Накит</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="subCategory"
              value="ташни"
              id="tashni"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseSubCategory(event);
              }}
            />
            <label htmlFor="tashni">Ташни</label>
          </div>
        </div>

        <div className="col-12 mb-3">
          <h5
            className="filter-category-font filter-category-BB"
            style={{ width: "43%" }}>
            Величина
          </h5>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="size"
              id="xs"
              value="XS"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseSize(event);
              }}
            />
            <label htmlFor="xs">XS</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="size"
              id="s"
              value="S"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseSize(event);
              }}
            />
            <label htmlFor="s">S</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="size"
              id="m"
              value="M"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseSize(event);
              }}
            />
            <label htmlFor="m">M</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="size"
              id="l"
              value="L"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseSize(event);
              }}
            />
            <label htmlFor="l">L</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="size"
              id="xl"
              value="XL"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChooseSize(event);
              }}
            />
            <label htmlFor="xl">XL</label>
          </div>
        </div>

        <div className="col-12 mb-3">
          <h5
            className="filter-category-font filter-category-BB"
            style={{ width: "35%" }}>
            Боја
          </h5>
          <div className="color-inputs">
            <div>
              <input
                type="checkbox"
                name="color"
                id="red"
                value="red"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.preventDefault();
                  handleChooseColor(event);
                }}
              />
              <label htmlFor="red">Црвена</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="color"
                id="orange"
                value="orange"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.preventDefault();
                  handleChooseColor(event);
                }}
              />
              <label htmlFor="orange">Портокалова</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="color"
                id="yellow"
                value="yellow"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.preventDefault();
                  handleChooseColor(event);
                }}
              />
              <label htmlFor="yellow">Жолта</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="color"
                id="green"
                value="green"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.preventDefault();
                  handleChooseColor(event);
                }}
              />
              <label htmlFor="green">Зелена</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="color"
                id="blue"
                value="blue"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.preventDefault();
                  handleChooseColor(event);
                }}
              />
              <label htmlFor="blue">Плава</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="color"
                id="pink"
                value="pink"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.preventDefault();
                  handleChooseColor(event);
                }}
              />
              <label htmlFor="pink">Розова</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="color"
                id="purple"
                value="purple"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.preventDefault();
                  handleChooseColor(event);
                }}
              />
              <label htmlFor="purple">Виолетова</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="color"
                id="grey"
                value="grey"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.preventDefault();
                  handleChooseColor(event);
                }}
              />
              <label htmlFor="grey">Сива</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="color"
                id="white"
                value="white"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.preventDefault();
                  handleChooseColor(event);
                }}
              />
              <label htmlFor="white">Бела</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="color"
                id="black"
                value="black"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.preventDefault();
                  handleChooseColor(event);
                }}
              />
              <label htmlFor="black">Црна</label>
            </div>
          </div>
        </div>

        <div className="col-12 mb-custom">
          <h5
            className="filter-category-font filter-category-BB"
            style={{ width: "20%" }}>
            Цена
          </h5>
          <div>
            <input type="checkbox" className="mr-2" name="price" id="sale" />
            <label htmlFor="sale">На Попуст*</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="price"
              value="price_gte=500&price_lte=1000"
              id="500-1000"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChoosePrice(event);
              }}
            />
            <label htmlFor="500-1000">500 - 1000 ден.</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="price"
              value="price_gte=1500&price_lte=2000"
              id="1500-2000"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChoosePrice(event);
              }}
            />
            <label htmlFor="1500-2000">1500 - 2000 ден.</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              value="price_gte=2000&price_lte=2500"
              id="2000-2500"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChoosePrice(event);
              }}
            />
            <label htmlFor="2000-2500">2000 - 2500 ден.</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              name="price"
              value="price_gte=2500"
              id="nad2500"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleChoosePrice(event);
              }}
            />
            <label htmlFor="nad2500">Над 2500 ден.</label>
          </div>
        </div>

        <div className="col-12 filtering-buttons">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <button
              className="w-100 p-2 footer-button filter-button-font"
              onClick={(
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => {
                event.preventDefault();
                applyFilters();
              }}>
              Филтрирај
            </button>
            <p
              className="cancel-text-font"
              onClick={(
                event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
              ) => {
                event.preventDefault();
                closeFilterMenu();
              }}>
              откажи
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideFilterMenu;
