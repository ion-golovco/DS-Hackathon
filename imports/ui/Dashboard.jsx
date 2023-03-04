import React from "react";

const Card = ({ children }) => {
  return <div className="text-3xl p-4 rounded-[1.5rem] bg-slate-200 text-black h-96">{children}</div>;
};



export const Dashboard = () => {
  return (
    <div className="min-h-screen">
            <div className="flex flex-row gap-2 bg-slate-300 w-full h-16">
            <img
              className="h-12 w-12 object-cover rounded-full"
              src="https://i.pinimg.com/736x/d7/71/f2/d771f2b8461bf09e5bb671fca07ad46a--wanna.jpg"
              alt=""
            />
            <span className="py-3 font-bold pl-4">Your dashboard</span>
          </div>
      <div className="flex w-full flex-row bg-slate-800">

      <div className="flex flex-row">

      </div>

        <div className="w-72">
          <div className="flex flex-col gap-4 text-xl mt-4 text-white">
            <div className="bg-slate-400 px-2 py-3 rounded-r-full">Dashboard</div>
            <div className="p-2">Operators</div>
            <div className="p-2">Analysis</div>
            <div className="p-2">Links</div>
            <div className="p-2">Settings</div>
          </div>
        </div>



        <div className="w-full bg-slate-300 rounded-[3rem] p-6 min-h-[80vh] mt-4 mr-4">
          <div className="grid grid-cols-2 gap-4">
            <Card>AAAAAA</Card>
            <Card>AAAAAA</Card>
            <Card>AAAAAA</Card>
            <Card>AAAAAA</Card>
            <Card>AAAAAA</Card>
          </div>
        </div>
      </div>
    </div>
  );
};
