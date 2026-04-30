function Divider() {
  return (
    <>
      <section
        id="cta"
        className="z-10 relative scroll-mt-44 text-colors-textLightColor"
      >
        <div className="max-w-[350px] sm:max-w-sm md:max-w-[550px] lg:max-w-[850px] mx-auto text-center px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 space-y-3 md:space-y-5">
          <h2 className="text-h2 font-bold">
            Ready To Own Your Next Property?
          </h2>
          <p className="font-medium text-sm sm:text-base lg:text-lg xl:text-xl">
            Alhaq offers modern residential projects built with quality,
            precision, and long-term value perfect for comfortable living and
            smart investment.
          </p>
          <div className="pt-4 md:pt-6 flex items-center justify-center text-colors-textDarkColor">
            <a href="#projects" className="button">
              Explore Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Divider;
