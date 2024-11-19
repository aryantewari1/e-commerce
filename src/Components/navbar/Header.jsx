import { listType } from "../../constants";
import SearchBar from "./SearchBar";

const Header = () => {
  const navList = (
    <div className="h-full">
      <ul className="flex justify-between items-center h-full">
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
    <header className="flex justify-between h-14 bg-red-100">
      <div className="flex-[1] h-full bg-blue-gray-300 flex items-center justify-center text-2xl font-extrabold">
        ALLganZa
      </div>

      <div className="flex-[2] flex justify-center items-center text-lg font-semibold">
        {navList}
      </div>

      <div className="flex-[1] h-full flex items-center justify-center bg-black">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
