// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  return (
    <div className="w-72 flex flex-col rounded-b-lg mb-14 border-[1px]  hover:shadow-2xl transition-shadow">
      <div className="w-72 h-60">
        <img
          src={product?.image}
          className="w-72 h-60 object-cover rounded-t-lg"
        />
      </div>
      <div className="bg-white w-72 flex-grow flex flex-col justify-between">
        <p className="font-osans font-bold text-start pl-4 mb-2 border-b-[1px] text-brown-900">
          zen-G
        </p>
        <p className="font-mont font-bold text-sm text-brown-900 pl-4 mb-2 truncate">
          {product?.title}
        </p>
        <p className="font-mont font-bold text-sm text-brown-900 pl-4">
          {"$" + product?.price}
        </p>
        <button className="font-mont bg-brown-900 font-semibold text-white rounded-b-md mt-2 p-2">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
