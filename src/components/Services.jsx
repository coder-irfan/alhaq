import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";

const whyUs = [
  {
    id: "1",
    number: 1,
    title: "Modern Project Finishing",
    description:
      "High-quality interior and exterior finishing designed to enhance each project’s value, combining modern aesthetics, durability, and comfortable living standards.",
    image: "images/IMG_8779.webp",
  },
  {
    id: "2",
    number: 2,
    title: "Project Design & Planning",
    description:
      "Carefully planned layouts and architectural designs developed to maximize space, functionality, and long-term value across all residential projects.",
    image: "images/المخططات التنفيذيه.webp",
  },
  {
    id: "3",
    number: 3,
    title: "Residential Project Development",
    description:
      "Full-scale construction of modern residential properties, built with strong structure, quality materials, and attention to detail from foundation to final delivery.",
    image: "images/download (5) (2).webp",
  },
  {
    id: "4",
    number: 4,
    title: "Property Enhancement",
    description:
      "Upgrading and refining existing properties to improve design, usability, and overall market value while maintaining high construction standards.",
    image: "images/IMG_8784.webp",
  },
  {
    id: "5",
    number: 5,
    title: "End-to-End Project Control",
    description:
      "Complete management of every development stage, ensuring efficient execution, cost control, and on-time delivery across all ongoing projects.",
    image:
      "images/Como garantir controle e qualidade em obras_ Dicas essenciais.webp",
  },
  {
    id: "6",
    number: 6,
    title: "Site & Structural Works",
    description:
      "Strong groundwork and structural execution forming the base of every successful project, built with precision to support long-lasting developments.",
    image: "images/IMG_8781.webp",
  },
];

function Services() {
  return (
    <>
      <section
        id="services"
        className="px-6 py-16 sm:px-6 md:py-14 md:px-8 lg:py-20 xl:py-24 lg:px-24"
      >
        <div className="space-y-6 lg:space-y-10">
          <div className="text-center space-y-2 md:space-y-3">
            <div className="inline-block tracking-wider border-l-4 border-colors-secondTextColor">
              <p className="ml-4 font-medium md:text-lg lg:text-xl font-heading">
                Services
              </p>
            </div>
            <h2 className="text-h2 font-semibold leading-tight">
              Why Choose{" "}
              <span className="text-colors-secondTextColor">Alhaq</span>
            </h2>
            <p className="text-sm md:text-base text-colors-textDarkGray text-center max-w-2xl mx-auto">
              Reliable construction services focused on quality, safety, and
              on-time project delivery.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {whyUs.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-xl shadow-lg bg-colors-bg flex flex-col h-full border border-colors-textDarkGray/20 will-change-transform"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 space-y-2 relative">
                  <span className="absolute -top-8 right-4 text-6xl font-bold text-colors-secondTextColor/80">
                    0{index + 1}
                  </span>

                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-colors-textDarkGray leading-relaxed flex-1">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-2 md:pt-4">
                    <a href="#projects">
                      <button className="text-sm font-semibold text-colors-secondTextColor hover:underline">
                        View More →
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Services;
