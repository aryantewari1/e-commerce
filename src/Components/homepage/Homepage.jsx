import useHomePageData from "../utils/hooks/useHomePageData";

const Homepage = () => {
  const products = useHomePageData();
  console.log(products);
  return <div className="w-full h-80 bg-[#d2f6f0]"></div>;
};

export default Homepage;
