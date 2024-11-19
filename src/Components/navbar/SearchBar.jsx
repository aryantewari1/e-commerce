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
    <div>
      <div className="flex justify-center ">
        <input
          type="text"
          className="w-80 py-2 pl-3 rounded-lg font-mont text-sm bg-blue-gray-800 text-white"
          value={inputValue}
          placeholder="Search for your favorite category"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div className="absolute  w-80 mt-2 rounded-lg">
        {inputValue &&
          filteredData.map((obj) => (
            <SearchItemCard data={obj} key={obj?.title} />
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
