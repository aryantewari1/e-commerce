import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import img from "../../assets/images/menu.png";
import { useState } from "react";
import groceryImg from "../../assets/images/grocery.png";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideBar } from "../../store/Slices/sideBarSlice";
import search from "../../assets/images/magnifier.png";
import user from "../../assets/images/user.png";
import signup from "../../assets/images/signup.png";
import home from "../../assets/images/home.png";
import allproducts from "../../assets/images/categories.png";
const Header = () => {
  const dispatch = useDispatch();
  const [ShowSearch, setShowSearch] = useState(false);
  const showSideBar = useSelector((store) => store?.sidebar?.showSideBar);

  return (
    <header className="fixed bg-[rgb(210,246,240)] w-full pt-2 pb-1 z-50 h-14">
      {showSideBar && (
        <div className=" bg-[#dbffff] w-[96%] absolute mt-12 ml-4 rounded-full shadow-lg z-20">
          <ul className="flex font-semibold font-mont">
            <Link to="/home">
              <li className="p-4 pl-2 ml-7 hover:text-green-500">Home</li>
            </Link>
            <Link to="/signup">
              <li className="p-4 ml-7 hover:text-green-500">AllProducts</li>
            </Link>
            <Link to="/user">
              <li className="p-4 ml-7 hover:text-green-500">User</li>
            </Link>
            <Link to="/products">
              <li className="p-4 ml-7 hover:text-green-500">SignUp</li>
            </Link>
          </ul>
        </div>
      )}
      {ShowSearch && (
        <div className="hidden tabletsm:block bg-[#dbffff] w-[96%] absolute mt-10 ml-4 rounded-full shadow-lg  tablet:hidden">
          <SearchBar />
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex-[2] flex justify-start">
          <div className="hidden tabletsm:block">
            <img
              src={search}
              className="w-6 ml-4 tablet:hidden"
              onClick={() => setShowSearch(!ShowSearch)}
            />
          </div>
          <div className="tabletsm:hidden">
            <img
              src={img}
              className="w-6 ml-4"
              onClick={() => dispatch(setShowSideBar(!showSideBar))}
            />
          </div>
          <div className="hidden tablet:block w-[58%] ml-2">
            <SearchBar />
          </div>
        </div>

        <div className="font-bflick font-medium text-3xl text-brown-900 text-center absolute left-1/2 transform -translate-x-1/2 ">
          zen-G
        </div>

        <div className="flex justify-end flex-[2] font-sans font-semibold text-right mr-4 tabletsm:flex-[1] justify-between">
          <div className="">
            <Link to={"/"}>
              <img src={home} className="w-6 hidden tabletsm:block" />
            </Link>
          </div>
          <div className="">
            <img src={allproducts} className="w-6 hidden tabletsm:block" />
          </div>
          <div className="">
            <img src={signup} className="w-6 hidden tabletsm:block" />
          </div>
          <div className="">
            <img src={user} className="w-6 hidden tabletsm:block" />
          </div>
          <div>
            <img src={groceryImg} className="w-6" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
