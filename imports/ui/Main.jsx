import React from "react";

export const Main = () => {
  return (
    <div className="">
      <header className="bg-black w-full">
        <div className="responsive py-3 flex justify-between ">
          <div className="mx-2 text-3xl font-bold text-white">Trackly</div>
          <a className=" mx-2 py-2 px-4 font-bold text-white bg-amber-400 rounded-full" href="/dashboard">
            Dashboard
          </a>
        </div>
      </header>

      <div className="flex flex-row content-center responsive mt-52 justify-between">
        <div className="mx-3 w-1/2">
          <h1 className="mb-4 text-3xl text-gray-900 md:text-5xl lg:text-6xl font-display">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-amber-400 from-pink-600 font-display">
              We chew,<br/> Better Data{" "}
            </span>
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Folosind modelul matematic, Trackly reușește să prezică cu o acuratețe ridicată clienții care vor rezilia
            contractul.
          </p>
        </div>
        <div className="w-1/2 pl-12">
          <img className="rounded-[3rem]" src="https://yi-files.s3.eu-west-1.amazonaws.com/products/788000/788543/1342678-full.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
