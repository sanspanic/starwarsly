import React from "react";
import {
  TwitterLogo,
  GithubLogo,
  PencilLine,
  LinkedinLogo,
} from "phosphor-react";

const Footer = () => {
  return (
    <div className="mt-5 bg-gradient-orange h-24 md:h-16 flex flex-col md:flex-row justify-center md:justify-between items-center px-5">
      <ul className="inline-flex justify-center mt-2 sm:mt-0 sm:justify-start">
        <a
          href="https://twitter.com/sansPanicDev"
          className="ml-4 text-white hover:text-indigo-500 transition ease-in-out duration-500"
        >
          <TwitterLogo size={24} />
        </a>
        <a
          href="https://github.com/sanspanic"
          className="ml-4 text-white hover:text-indigo-500 transition ease-in-out duration-500"
        >
          <GithubLogo size={24} />
        </a>
        <a
          href="https://dev.to/sanspanic"
          className="ml-4 text-white hover:text-indigo-500 transition ease-in-out duration-500"
        >
          <PencilLine size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/sandra-spanikova-6738aa1b7/"
          className="ml-4 text-white hover:text-indigo-500 transition ease-in-out duration-500"
        >
          <LinkedinLogo size={24} />
        </a>
      </ul>
      <p className="text-xs font-mono order-first md:order-1 text-center">
        Made by sansPanic. I write code and I write about code.
      </p>
    </div>
  );
};

export default Footer;
