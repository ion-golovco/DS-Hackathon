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
          <h1 className="mb-4 text-3xl text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-700 from-sky-400 font-display">Better Data</span>{" "}
            Scalable AI.
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value
            and drive economic growth.
          </p>
        </div>
      </div>
    </div>
  );
};
