import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "../../utils/constants";
const Testimonials = () => {
  return (
    <div className="bg-[rgb(210,246,240)] mb">
      <div className="w-full text-center mb-10">
        <p className="text-4xl font-mirey text-brown-800">Testimonials</p>
        <p className="text-2xl font-bflick  text-brown-800">
          What our <span className="text-pink-600">customers</span> have to say
        </p>
      </div>
      <div className="w-full bg-[rgb(210,246,240)]">
        <div className="flex flex-col justify-center items-center desktop:flex-row desktop:gap-x-6 m-4">
          {testimonialData.map((c, i) => (
            <TestimonialCard card={c} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
