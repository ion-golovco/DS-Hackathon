import React from "react";

export const Main = () => {
  return (
    <div className="">
      <header className="bg-black w-full">
        <div className="responsive py-3 flex justify-between ">
          <div className="mx-2 text-3xl font-bold text-white">Trackly</div>
          <a className=" mx-2 py-2 px-3 text-white bg-blue-600 rounded-full" href="/dashboard">
            Dashboard
          </a>
        </div>
      </header>

      <div className="text-white text-6xl font-bold bg-slate-600 h-screen grid content-center">
        <div className="text-center w-full">
          <span className="text-[8rem]">Keep</span> your customers
        </div>
      </div>
    </div>
  );
};
