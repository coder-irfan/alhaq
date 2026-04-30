const projects = [
  {
    id: "1",
    number: "01",
    title: "Residential Project 001",
    description:
      "Development of a modern multi-story residential building designed for comfortable living, built with quality materials and delivered with high construction standards.",
    image: "images/IMG_8780.webp",
  },
  {
    id: "2",
    number: "02",
    title: "Residential Project 002",
    description:
      "A well-planned residential property offering efficient space design, strong structure, and long-term value for homeowners and investors.",
    image: "images/IMG_8781.webp",
  },
  {
    id: "3",
    number: "03",
    title: "Residential Project 003",
    description:
      "Modern housing project developed with smart layouts and attention to detail, providing a balance of functionality, comfort, and durability.",
    image: "images/IMG_8779.webp",
  },
  {
    id: "4",
    number: "04",
    title: "Residential Project 004",
    description:
      "A high-quality residential development featuring modern finishing, durable construction, and a design focused on everyday living needs.",
    image: "images/IMG_8784.webp",
  },
  {
    id: "5",
    number: "05",
    title: "Residential Project 005",
    description:
      "A refined residential unit designed to improve living standards, combining strong construction with modern style and long-term usability.",
    image: "images/download (5) (2).webp",
  },
  {
    id: "6",
    number: "06",
    title: "Residential Project 006",
    description:
      "A carefully developed residential project focused on quality execution, practical design, and creating a reliable long-term property investment.",
    image: "images/interiordesign.webp",
  },
];

function DoneProjects() {
  return (
    <section
      id="projects"
      className="px-6 py-16 md:px-8 lg:px-16 lg:py-24 space-y-12"
    >
      <div className="text-center space-y-3 md:space-y-4">
        <div className="inline-block tracking-wider border-l-4 border-colors-secondTextColor">
          <p className="ml-4 font-medium md:text-lg lg:text-xl font-heading">
            Projects
          </p>
        </div>

        <h2 className="text-h2 font-semibold leading-tight">
          Our Latest <span className="text-colors-secondTextColor">Works</span>
        </h2>

        <p className="text-sm md:text-base text-colors-textDarkGray max-w-2xl mx-auto">
          A curated selection of completed construction projects showcasing
          quality, precision, and engineering excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group border border-colors-textDarkGray/20 rounded-xl overflow-hidden bg-colors-bg shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <span className="absolute top-3 left-3 bg-colors-textDarkGray/80 text-colors-textLightColor text-xs px-3 py-1 rounded-full">
                Project {project.number}
              </span>
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-lg md:text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-colors-textDarkGray line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs lg:text-sm text-colors-textDarkGray/70">
                  Completed Project
                </span>

                <a href="#contact">
                  <button className="text-sm font-medium text-colors-secondTextColor hover:underline">
                    Contact Us →
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoneProjects;
