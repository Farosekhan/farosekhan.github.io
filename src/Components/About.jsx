import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section
        className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16"
        id="about"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            {/* Left Side (Text) */}
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Hey 👋 I am <br className="block sm:hidden" />
                <span className="text-red-500">Farose Khan</span>
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Web Developer from India. I create custom websites to help
                businesses perform better online.
              </p>

              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                  <span className="relative">Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="https://www.instagram.com/farosekhan_/"
                  title="Instagram"
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </p>
            </div>

            {/* Right Side (Image) */}
            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt="Blob shape"
              />
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20231109%2Foriginal%2Fpngtree-programmer-it-developer-png-image_13520483.png&f=1&nofb=1&ipt=e7d1499160d9b2bf06ce695f02f5012b001f8c9bc8bec40cb708106cd019b8a7&ipo=images"
                alt="Business Woman"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
