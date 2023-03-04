import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, User } from "./Componente";

const users = [
  { name: "Vanea Rat ", rate: "98%" },
  { name: "Dimitri Șoricescu", rate: "90%" },
  { name: "Gherman Crîsân", rate: "89%" },
  { name: "Vanea", rate: "12%" },
  { name: "Vanea Rat ", rate: "98%" },
  { name: "Dimitri Șoricescu", rate: "90%" },
  { name: "Gherman Crîsân", rate: "89%" },
  { name: "Vanea Rat ", rate: "98%" },
  { name: "Dimitri Șoricescu", rate: "90%" },
];

const data = [
  { name: "Jan", uv: 0.1 },
  { name: "Feb", uv: 0.2 },
  { name: "Mar", uv: 0.2 },
  { name: "Apr", uv: 0.2 },
  { name: "May", uv: 0.3 },
  { name: "June", uv: 0.05},
];
const data1 = [
    { name: "Jan", uv: 2 },
    { name: "Feb", uv: 3 },
    { name: "Mar", uv: 3 },
    { name: "Apr", uv: 3 },
    { name: "May", uv: 2 },
    { name: "June", uv: 4 },
  ];
  

const Dash = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4">
      <Card className='md:w-96 w-full'>
        <h1 className="mb-6 font-bold">Clients most likely to churn</h1>
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          {users.map((a) => (
            <User name={a.name} rate={a.rate} />
          ))}
        </ul>
      </Card>

      <div className="flex gap-4 flex-col">
        <Card>
          <h1 className="font-bold">
            Satisfaction rate delta <span className="text-gray-500 text-sm font-normal">(over 6 months)</span>
          </h1>
          <LineChart className="text-sm mt-4" width={400} height={200} data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </Card>

        <Card>
          <h1 className="font-bold">
            Churn rate <span className="text-gray-500 text-sm font-normal">(over 6 months)</span>
          </h1>
          <LineChart className="text-sm mt-4" width={400} height={200} data={data1}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </Card>
      </div>

      <div className="flex gap-4 flex-col">
        <Card className="h-96">
          <h1 className="mb-6 font-bold">
            Coverage <span className="text-gray-500 text-sm font-normal">(Local service coverage)</span>
          </h1>
          <img className="h-4/5 pl-4" src="https://i.imgur.com/3EuCr93.png" alt="" />
        </Card>

        <Card className="font-bold ">
          <h1>Median contract duration
          <br /> & satisfaction</h1>
          <div className="flex flex-row justify-between">
          <div className="font-normal text-lg">1.8 years </div>
          <div className="font-normal text-lg">4.8/5⭐</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dash;
