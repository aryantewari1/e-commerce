import { useDispatch, useSelector } from "react-redux";
import useHomePageData from "../utils/hooks/useHomePageData";
import ProductCarousel from "./ProductCarousel";
import { useEffect } from "react";
import { setActiveIndex } from "../../store/Slices/CarouselSlice";

const Homepage = () => {
  const activeIndex = useSelector((store) => store?.carousel?.activeIndex);
  const dispatch = useDispatch();
  console.log(activeIndex);
  useEffect(() => {
    const id = setInterval(() => {
      const i = activeIndex < products.length - 1 ? activeIndex + 1 : 0;
      dispatch(setActiveIndex(i));
    }, 3000);

    return () => {
      clearInterval(id);
    };
  });
  const products = useHomePageData();

  console.log(products);
  return (
    <div className="w-full h-screen bg-[rgb(210,246,240)] flex flex-col justify-center items-center">
      <p className="absolute top-16 w-[90%] font-mirey text-2xl left-8 text-brown-900 tabletsm:text-5xl w-[55%] tablet:text-5xl tablet:w-[60%] laptop:text-6xl">
        Become a zen-G with our products
      </p>
      <div className="flex flex-col">
        <ProductCarousel products={products} index={activeIndex} />
      </div>
    </div>
  );
};

export default Homepage;
