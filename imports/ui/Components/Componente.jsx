import React from "react";

export const Card = ({ children, className }) => {
  return <div className={"p-4 rounded-[1.5rem] bg-white shadow-md text-xl " + className}>{children}</div>;
};
export const User = ({ user }) => {
  return (
    <li  className="py-2 sm:pb-4 ">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate cursor-pointer">{user.name} #1{Math.round(Math.random()*1000000)}</p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">{user.pack}</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold">{user.rate}</div>
      </div>
    </li>
  );
};
