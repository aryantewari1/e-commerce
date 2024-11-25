// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  return (
    <div className="w-72 h-96 flex flex-col rounded-lg">
      <div className=" h-64">
        <img src={product?.image} className="w-full h-full object-cover" />
      </div>
      <div className=" bg-white ">
        <p className="font-osans font-bold text-start pl-4 mb-2 border-b-[1px] text-brown-900">
          zen-G
        </p>
        <p className="font-mont font-bold text-sm text-brown-900 pl-4 mb-2 ">
          {product?.title}
        </p>
        <p className="font-mont font-bold text-sm text-brown-900 pl-4">
          {"$" + product?.price}
        </p>
        <button className="font-mont w-full bg-brown-900 font-semibold  text-white rounded-b-md">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
