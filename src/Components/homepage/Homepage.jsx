import { Link } from "react-router-dom";
import { categories } from "../../utils/constants";
import useHomePageData from "../utils/hooks/useHomePageData";
import Categories from "./Categories";
import ProductCarousel from "./ProductCarousel";

const Homepage = () => {
  const { products, activeIndex } = useHomePageData();

  if (products.length === 0) return <div>LOADINNGGGGGGGGGGG</div>;

  return (
    <div className="w-full h-screen bg-[rgb(210,246,240)]">
      <p className="absolute top-16 w-[90%] font-mirey text-2xl left-8 text-brown-900 tabletsm:text-5xl w-[55%] tablet:text-5xl tablet:w-[60%] laptop:text-6xl">
        Become a zen-G with our products
      </p>
      <p className="hidden  desktop:block absolute top-60 w-[90%] font-bflick text-4xl left-8 text-brown-900 font-medium">
        What we offer:
      </p>
      <p className="hidden  desktop:block absolute top-96 w-[90%] font-bflick text-4xl left-8 text-brown-900">
        Shop from categories:
      </p>
      <div className="flex flex-col w-full justify-center desktop:items-end mr-10">
        <Link to={"/product?id=" + products[activeIndex]?.id}>
          <ProductCarousel products={products} index={activeIndex} />
        </Link>
      </div>
      <div className="absolute top-[640px] ml-8 flex items-center gap-x-10 desktop:top-[445px] desktop:gap-x-14">
        {categories.map((c, i) => (
          <Categories key={i} categories={c} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
