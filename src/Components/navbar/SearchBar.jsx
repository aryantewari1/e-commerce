import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchItemCard from "./SearchItemCard";

const SearchBar = () => {
  const products = useSelector((store) => store?.products?.products);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    handleSearchResult();
  }, [inputValue]);
  const handleSearchResult = () => {
    console.log(inputValue);
    const data = products
      .filter((obj) =>
        obj?.category.startsWith(inputValue.toLowerCase().trim())
      )
      .slice(0, 4);
    console.log(data);
    setFilteredData(data);
  };
  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          className="w-full py-2 pl-3 rounded-lg font-bflick text-sm bg-blue-gray-800 text-white "
          value={inputValue}
          placeholder="Search for categories"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div className="absolute w-full mt-2 rounded-lg tablet:w-[38%] z-10">
        {inputValue &&
          filteredData.map((obj) => (
            <SearchItemCard data={obj} key={obj?.title} />
          ))}
      </div>
    </>
  );
};

export default SearchBar;
