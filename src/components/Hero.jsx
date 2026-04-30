import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="pt-32 pb-24 md:pt-36 md:pb-24 lg:pt-40 lg:pb-24 xl:pt-52 xl:pb-32 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[85rem] 2xl:max-w-[88rem] mx-auto z-50 relative"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-14 sm:gap-14 text-colors-textLightColor">
          <div className="max-w-xl sm:max-w-2xl xl:max-w-[800px] space-y-3 md:space-y-4 flex flex-col justify-center items-center text-center">
            <div className="inline-block uppercase tracking-wider border-l-4 border-colors-secondTextColor">
              <p className="text-h2Typing font-semibold ml-3">
                <TypeAnimation
                  sequence={[
                    "Property Development & Construction",
                    2000,
                    "Modern Residential Projects",
                    2000,
                    "Built for Living & Investment",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </p>
            </div>
            <h1 className="text-h1 font-semibold leading-tight">
              <span className="text-colors-secondTextColor">Alhaq CC</span>
              <br />
              Building Modern Spaces
            </h1>

            <p className="text-sm lg:text-base">
              Alhaq is a trusted property development company delivering modern
              residential projects designed for comfortable living and smart
              investment. We manage each project from planning to completion,
              focusing on quality construction and long-term value. From
              individual homes to large-scale developments.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 pt-4 lg:pt-8">
              <a href="#about-us" className="button">
                Learn More
              </a>
              <a href="#contact" className="button">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
