import React from "react";

const Card = ({ children, className }) => {
  return <div className={"text-3xl p-4 rounded-[1.5rem] bg-white shadow-md " + className}>{children}</div>;
};
const User = ({ name, rate }) => {
  return (
    <li className="py-2 sm:pb-4">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{name}</p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">+373 0248 3456654</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold">{rate}</div>
      </div>
    </li>
  );
};

const users = [{ name: "Vanea Rat ", rate: "98%" },{ name: "Dimitri Șoricescu", rate: "90%" },{ name: "Gherman Crîsân", rate: "89%" },{ name: "Vanea", rate: "12%" },{ name: "Vanea", rate: "12%" },{ name: "Vanea", rate: "12%" }];

const Dash = () => {
  return (
    <div className="flex gap-4">
      <Card className="w-1/2">
        <h1 className="mb-6">Most likely to churn</h1>
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          {users.map((a) => 
            <User name={a.name} rate={a.rate} />
          )}
        </ul>
      </Card>

      <Card className="h-96">
        <h1 className="mb-6">
          Coverage <span className="text-gray-500 text-sm">(Local service coverage)</span>
        </h1>
        <img className="h-4/5 pl-4" src="https://i.imgur.com/3EuCr93.png" alt="" />
      </Card>
      <Card className="h-24">
        Median contract duration
        <br /> & satisfaction
      </Card>
    </div>
  );
};

export default Dash;
