// eslint-disable-next-line react/prop-types
function TestimonialCard({ card }) {
  const { image, desc, name, por } = card;
  return (
    <div className="flex flex-col w-4/6 items-center justify-center bg-white gap-y-3 rounded-md mb-10">
      <div className="pt-4">
        <img src={image} className="w-24 rounded-full" alt="card-image" />
      </div>
      <div className="p-4 font-mont">
        <p>{desc}</p>
      </div>
      <div className="w-11 h-1 bg-pink-600"></div>
      <div className="pb-5">
        <p className="text-lg font-medium">{name}</p>
        <p className="text-sm text-center">{por}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
