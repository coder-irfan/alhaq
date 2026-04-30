import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "How long does a project take to complete?",
      answer:
        "Project timelines depend on size and design, but each development is carefully planned and delivered within a clear schedule from start to completion.",
    },
    {
      id: "2",
      question: "What is the price of your properties?",
      answer:
        "Prices vary based on project location, design, and features. We provide clear and transparent details for each available property.",
    },
    {
      id: "3",
      question: "What types of projects do you develop?",
      answer:
        "We focus on modern residential projects, creating homes designed for comfortable living and long-term investment value.",
    },
    {
      id: "4",
      question: "Do you manage the full project process?",
      answer:
        "Yes, we handle every stage from planning and design to construction and final delivery, ensuring consistency and quality throughout.",
    },
    {
      id: "5",
      question: "How do you ensure quality in your projects?",
      answer:
        "We follow strict construction standards, use quality materials, and carefully supervise each stage to deliver reliable and long-lasting properties.",
    },
  ];

  const [isOpen, setIsOpen] = useState(0);
  const toggleFaq = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <>
      <section
        id="faq"
        className="px-4 sm:px-6 md:px-8 lg:px-16 py-14 md:py-14 lg:py-24 space-y-6 md:space-y-10 scroll-mt-20"
      >
        <div className="flex flex-col items-center text-center justify-center gap-2">
          <div className="inline-block tracking-wider border-l-4 border-colors-secondTextColor">
            <p className="ml-4 font-medium md:text-lg lg:text-xl font-heading">
              FAQs
            </p>
          </div>
          <h2 className="font-heading text-h2 font-bold">
            Frequently Asked{" "}
            <span className="text-colors-secondTextColor">Questions</span>
          </h2>
          <p className="text-sm md:text-base text-colors-textDarkGray text-center max-w-2xl mx-auto">
            Find answers to common questions about our services, process,
            pricing, and project timelines.
          </p>
        </div>
        <div className="space-y-2 lg:space-y-4">
          {faqs.map((faq, index) => {
            const isOpened = isOpen === index;
            return (
              <div
                key={faq.id}
                onClick={() => toggleFaq(index)}
                className="group relative max-w-4xl mx-auto cursor-pointer rounded-xl border border-colors-thirdBg/40 bg-colors-bg/70 backdrop-blur-md transition-all duration-300 hover:border-colors-secondTextColor/40 hover:shadow-lg"
              >
                <div className="p-3 md:p-4 lg:p-5">
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpened ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`mt-1 text-colors-secondTextColor rounded-lg transition-colors duration-300`}
                    >
                      {isOpened ? <FaTimes /> : <FaPlus />}
                    </motion.div>

                    <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpened && (
                      <motion.div
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{ transformOrigin: "top" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pl-4 text-[13px] md:text-base text-colors-textDarkGray leading-relaxed border-l ml-2 border-colors-thirdBg/40">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FAQ;
