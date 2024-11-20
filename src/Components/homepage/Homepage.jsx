import useHomePageData from "../utils/hooks/useHomePageData";

const Homepage = () => {
  const products = useHomePageData();
  console.log(products);
  return (
    <div className="w-full h-screen bg-[rgb(210,246,240)]">
      <p className="absolute top-16 w-[90%] font-mirey text-2xl left-8 text-brown-900 tabletsm:text-5xl w-[55%] tablet:text-5xl tablet:w-[60%] laptop:text-6xl">
        Become a zen-G with our products
      </p>
    </div>
  );
};

export default Homepage;
