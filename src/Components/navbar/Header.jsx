import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import img from "../../assets/images/menu.png";
import { useState } from "react";

const Header = () => {
  const [ShowSearch, setShowSearch] = useState(false);
  const [showHamBurgerMenu, setShowHamBurgerMenu] = useState(false);
  return (
    <header className="absolute w-full">
      <div className="flex items-center justify-between">
        <div className="flex-[2] flex justify-start">
          <div className="">
            <img
              src={img}
              className="w-6 ml-4"
              onClick={() => setShowHamBurgerMenu(!showHamBurgerMenu)}
            />
          </div>
        </div>

        <div className="font-robienz flex-[8] py-1 font-medium text-3xl text-black text-center">
          zen-G
        </div>

        <div
          className="flex-[2]  font-sans font-semibold text-right mr-4"
          onClick={() => setShowSearch(!ShowSearch)}
        >
          Search
        </div>
      </div>
    </header>
  );
};

export default Header;
