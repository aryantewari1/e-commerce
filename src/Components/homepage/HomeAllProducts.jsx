import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const HomeAllProducts = () => {
  const products = useSelector((store) => store?.products?.products);
  if (products.length === 0) return;
  return (
    <div className="w-full bg-[rgb(210,246,240)] font-mirey pt-14">
      <div className="text-center text-5xl text-brown-900">All Products</div>
      <div className="mt-6 ml-4 min-h-screen flex justify-center flex-col items-center desktop:flex-row desktop:flex-wrap desktop:gap-x-14">
        {products.map((p) => (
          <Link to={"/product?id=" + p.id} key={p.id}>
            <ProductCard product={p} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeAllProducts;
