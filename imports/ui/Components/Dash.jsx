import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, User } from "./Componente";

const users = [
  { name: "Vanea Rat", rate: "97%",pack:"190MDL"},
  { name: "Nae Nicolae", rate: "97%",pack:"60MDL" },
  { name: "Gherman Crîsân", rate: "97%",pack:"120MDL" },
  { name: "Florin Șahmatistu", rate: "97%",pack:"120MDL" },
  { name: "Emil Baran", rate: "95%",pack:"220MDL"},
  { name: "Dimitri Șoricescu", rate: "67%",pack:"120MDL" },
  { name: "Kelp Vicrtoria", rate: "67%",pack:"190MDL" },
  { name: "Placinta Irina ", rate: "66%",pack:"120MDL" },
  { name: "Gorea Florin", rate: "66%",pack:"170MDL" },
  { name: "Onica Andrei", rate: "64%",pack:"120MDL" },
  { name: "Guzun Nicolae", rate: "64%",pack:"140MDL" },
  { name: "Buzu Marin", rate: "61%",pack:"18s0MDL" }
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
    <div className="flex md:flex-row flex-col gap-4 ">
      <Card className='md:w-96 w-full h-[660px] overflow-auto'>
        <h1 className="mb-6 font-bold">Clients most likely to churn</h1>
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          {users.map((a,index) => (
            <User key={index} user={a} />
          ))}
        </ul>
      </Card>

      <div className="flex gap-4 flex-col">


        <Card>
          <h1 className="font-bold">
            Satisfaction rate delta <span className="text-gray-500 text-sm font-normal">(over 6 months)</span>
          </h1>
          <LineChart className="text-sm mt-4" width={400} height={180} data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="uv" stroke="#fb7843" />
          </LineChart>
        </Card>

        <Card>
          <h1 className="font-bold">
            Churn rate <span className="text-gray-500 text-sm font-normal">(over 6 months)</span>
          </h1>
          <LineChart className="text-sm mt-4" width={400} height={180} data={data1}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="uv" stroke="#fb7843" />
          </LineChart>
        </Card>

        <Card className="font-bold ">
          <h1>Median contract duration
          <br /> & satisfaction</h1>
          <div className="flex flex-row justify-between">
          <div className="font-normal">1.8 years </div>
          <div className="font-normal">4.8/5⭐</div>
          </div>
        </Card>
      </div>

      <div className="flex gap-4 flex-col">
      <Card className="h-64">
          <h1 className="font-bold">Task list</h1>
          <ul className="mb-6">
          <li >- Call #1711570 </li>
          <li >- Call management for help</li>
          <li>- Do your best!</li>
          <li >- Win :)</li>
          </ul>
          <div className="h-12 bg-slate-100 rounded-full w-full flex text-gray-500 justify-between">
            <div className="mt-2 ml-4"> New note</div>
            <div className="h-8 w-8 rounded-full bg-slate-200 px-2 pt-1 mr-4 mt-2 ">+</div>
          </div>
        </Card>
        <Card className="h-96">
          <h1 className="mb-6 font-bold">
            Coverage <span className="text-gray-500 text-sm font-normal">(Local service coverage)</span>
          </h1>
          <img className="h-4/5 pl-4" src="https://i.imgur.com/3EuCr93.png" alt="" />
        </Card>

        

      </div>
    </div>
  );
};

export default Dash;
