import { useRef } from "react";
import { FaUser, FaStar } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const testimonial = [
  {
    id: "1",
    text: "We purchased a home from Alhaq and the result exceeded our expectations. The project was well-built, modern, and delivered with strong attention to quality.",
    icon: <FaUser />,
    name: "Ahmad Khan",
    Icon: <FaStar />,
  },
  {
    id: "2",
    text: "Alhaq delivered a residential project with great care and precision. Everything was well organized, and the final property matched exactly what was promised.",
    icon: <FaUser />,
    name: "Haji Karim",
    Icon: <FaStar />,
  },
  {
    id: "3",
    text: "A very reliable company for property investment. The project was completed on time, built with quality materials, and offers excellent long-term value.",
    icon: <FaUser />,
    name: "Zahir Ahmad",
    Icon: <FaStar />,
  },
  {
    id: "4",
    text: "The entire process from start to delivery was smooth and professional. The property design, structure, and finishing all reflect high standards and attention to detail.",
    icon: <FaUser />,
    name: "Mohammad Farid",
    Icon: <FaStar />,
  },
  {
    id: "5",
    text: "Alhaq developed a modern and durable residential unit that fully met our expectations. Their focus on quality and timely delivery made the experience very satisfying.",
    icon: <FaUser />,
    name: "Abdul Rahman",
    Icon: <FaStar />,
  },
  {
    id: "6",
    text: "A smooth and trustworthy experience from beginning to end. The project was delivered on schedule with strong construction quality and a well-designed living space.",
    icon: <FaUser />,
    name: "Sayed Ali",
    Icon: <FaStar />,
  },
];

function Testimonial() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className="px-4 py-12 sm:px-6 md:py-14 md:px-8 md:pb-24 lg:py-12 xl:py-20 lg:px-16 scroll-mt-24"
        id="testimonial"
      >
        <div className="space-y-6 lg:space-y-12">
          <div className="text-center space-y-2">
            <div className="inline-block tracking-wider border-l-4 border-colors-secondTextColor">
              <p className="ml-4 font-medium md:text-lg lg:text-xl font-heading">
                Testimonials
              </p>
            </div>
            <h2 className="text-h2 font-semibold">
              What Our{" "}
              <span className="text-colors-secondTextColor">Clients</span> Say
            </h2>
            <p className="text-description text-colors-textDarkGray text-center max-w-2xl mx-auto">
              Trusted by clients for delivering reliable and high-quality
              construction services.
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute -left-2 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-colors-buttonBg hover:bg-colors-buttonHover
              transition-colors duration-300 rounded-full p-2 lg:p-4 shadow-md"
            >
              <FaChevronLeft className="sm:text-lg lg:text-xl" />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-3 md:gap-4 lg:gap-6 px-4 scrollbar-hide py-4"
            >
              {testimonial.map((testimonial) => (
                <div
                  className="flex-shrink-0 snap-start w-[80%] sm:w-[50%] md:w-[45%] lg:w-[30%] bg-colors-bg shadow-[0_0_0.6rem] shadow-colors-textDarkGray/10 rounded-lg py-6 px-8 lg:py-10 lg:px-10 space-y-4 lg:space-y-6"
                  key={testimonial.id}
                >
                  <p className="text-colors-textDarkGray text-sm md:text-base">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-md md:text-xl p-2 md:p-3 bg-colors-secondBg rounded-full">
                      {testimonial.icon}
                    </p>
                    <div className="space-y-1">
                      <h4 className="text-sm md:text-base font-semibold">
                        {testimonial.name}
                      </h4>
                      <span className="flex items-center gap-1 text-xs md:text-sm text-yellow-400">
                        {testimonial.Icon}
                        {testimonial.Icon}
                        {testimonial.Icon}
                        {testimonial.Icon}
                        {testimonial.Icon}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-colors-buttonBg hover:bg-colors-buttonHover transition-colors duration-300 rounded-full p-2 md:p-4 shadow-md"
            >
              <FaChevronRight className="sm:text-lg lg:text-xl" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
