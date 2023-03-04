import React, { useState } from "react";
import Dash from "./Components/Dash";
import Operator from "./Components/Operator";

const button = "font-bold bg-slate-200 shadow-md";

export const Dashboard = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="min-h-screen">
      <a href="/" className="flex justify-center py-1 font-bold "> Trackly | DataMunch board</a>

      <div className="flex w-full flex-col md:flex-row bg-gradient-to-r to-purple-700 from-sky-400">
        <div className="md:w-72 w-full bg-slate-100 md:rounded-tr-[3rem] rounded-none">
          <div className="grid grid-cols-2 bg-slate-200 rounded-r-full mt-4 mr-4 h-22">
            <div className="flex flex-col py-3 pl-4">
              <p className="font-bold">Ivan Turbinca</p>
              <p className="text-sm">Administrator</p>
            </div>
            <img
              className="h-16 w-16 object-cover rounded-full self-center ml-6 md:block hidden"
              src="https://i.pinimg.com/736x/d7/71/f2/d771f2b8461bf09e5bb671fca07ad46a--wanna.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-col text-lg mt-4 text-start [&>*]:py-4 [&>*]:px-4 [&>*]:text-start">
            <button onClick={() => setOpen(0)} className={!open && button}>
              Dashboard
            </button>
            <button onClick={() => setOpen(1)} className={open && button}>
              Operators
            </button>
            <div>Analysis</div>
            <div>Links</div>
            <div>Settings</div>
          </div>
        </div>

        <div className="w-full bg-slate-100 rounded-t-[3rem] p-6 min-h-[80vh]  mx-0 md:mx-4 mt-4">
          {open === 0 ? <Dash /> : <Operator />}
        </div>
      </div>
    </div>
  );
};
