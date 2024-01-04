'use-client'
import React, { useState } from "react";
import style from "./style.module.css";
import router, { useRouter } from "next/router";

const FilterArr = [
  "All items",
  "Earrings",
  "Rings",
  "Necklaces",
  "Bracelets",
  "Sets",
  "Other",
];
interface IFilters {
  onFilterSelect: (value: string) => void;
  images: string;
}
const Filters = ({ onFilterSelect, images }: IFilters) => {
  const [searchProduct, setSearchProduct] = useState("");
  const router = useRouter();

  const handleFilter = (value: string) => {
    onFilterSelect(value);
  };
  const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchProduct(searchValue);

    if (searchValue.length >= 4) {
      router.push(`/jewelry?category=${encodeURIComponent(searchValue)}`);
    } else if (searchValue.length === 0) {
      router.push("/jewelry");
    }
  };
  const getImageForCurrentPage = () => {
    const page = router.pathname.split("/").pop();
    switch (page) {
      case "jewelry":
        return "/images/JEWELRYIMAGES/jewelry_title_earrings.jpg";
      case "homedecor":
        return "/images/HomeDecorPage/helmetstitle.jpg";
      default:
        return "/images/default.jpg"; 
    }
  };
  return (
    <>
      <div className={style.ImgProducts}>
        <img src={getImageForCurrentPage()} alt={`proper image`} />
      </div>
      <div className={style.Filters}>
        <ul>
          {FilterArr.map((filterName) => (
            <li key={filterName} onClick={() => handleFilter(filterName)}>
              {filterName}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.initialSearching}>
        <div className={style.inputSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchProduct}
            onChange={handleSearchFilter}
          />
        </div>
        <div className={style.SelectOption}>
          <select name="" id="" className="text-dark">
            <option value="Feautured" className="text-dark">
              Sort:Feautured
            </option>
            <option value="New" className="text-dark">
              New
            </option>
            <option value="Old" className="text-dark">
              Old
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
