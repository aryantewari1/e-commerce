import useHomePageData from "../utils/hooks/useHomePageData";

const Homepage = () => {
  const products = useHomePageData();
  console.log(products);
  return <div>Homepage</div>;
};

export default Homepage;
