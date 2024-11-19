import { listType } from "../../constants";
import SearchBar from "./SearchBar";

const Header = () => {
  const navList = (
    <div className="h-full">
      <ul
        className="flex justify-between items-center h-full font-mont
       "
      >
        {
          // eslint-disable-next-line react/jsx-key
          listType.map((s, i) => (
            <li key={i} className="p-7">
              {s}
            </li>
          ))
        }
      </ul>
    </div>
  );

  return (
    <header className="flex justify-between h-14 bg-customBlack shadow-md">
      <div className="flex-[1] h-full  flex items-center justify-center text-2xl font-bold text-pink-50 font-mont italic tracking-wide ">
        zen-G
      </div>

      <div className="flex-[2] flex justify-center items-center text-md font-semibold text-gray-50 ">
        {navList}
      </div>

      <div className="flex-[1] h-full flex items-center justify-center">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
