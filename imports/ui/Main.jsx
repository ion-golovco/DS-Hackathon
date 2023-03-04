import React from "react";

export const Main = () => {
  return (
    <div className="">
      <header className="bg-black w-full">
        <div className="responsive py-3 flex justify-between ">
          <div className="mx-2 text-3xl font-bold text-white">Trackly</div>
          <a className=" mx-2 py-2 px-4 font-bold text-white bg-blue-600 rounded-full" href="/dashboard">
            Dashboard
          </a>
        </div>
      </header>

      <div className=" h-screen grid content-center responsive ">
        <div className="mx-3">
          <h1 className="mb-4 text-3xl text-gray-900 dark:text-white md:text-5xl lg:text-6xl font-display">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-rose-600 font-display">
              Better Data </span> Scalable AI.
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value
            and drive economic growth.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 responsive">
        <div className="gap-8 items-center md:grid md:grid-cols-2">
          <img
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-display text-gray-900 dark:text-white">
              Let's create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends and communities of people who share your interests. Connecting
              with your friends and family as well as discovering new ones is easy with features like Groups.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
