/* eslint-disable react/prop-types */
const SearchItemCard = ({ data }) => {
  return (
    <div className="flex p-2 pb-3 bg-brown-900 mb-1 rounded-lg">
      <div className="pt-2 ml-1">
        <img src={data?.image} className="w-24 h-24 object-cover rounded-md" />
      </div>
      <div className="flex flex-col w-full justify-center items-center tablet:w-80 i">
        <div className="font-mont font-bold text-md text-[rgb(210,246,240)]">
          {data?.category.toUpperCase()}
        </div>
        <div className="w-52 pl-4 text-ellipsis line-clamp-2 text-xs font-mont text-[rgb(210,246,240)] ">
          {" "}
          {data?.description}
        </div>
      </div>
    </div>
  );
};

export default SearchItemCard;
