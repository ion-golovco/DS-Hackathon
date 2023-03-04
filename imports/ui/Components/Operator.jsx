import React from "react";

const Card = ({ children }) => {
  return <div className="text-3xl p-4 rounded-[1.5rem] bg-slate-100 text-black h-96 shadow-md">{children}</div>;
};

const Operator = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>BBBB</Card>
      <Card>AAAAAA</Card>
      <Card>AAAAAA</Card>
      <Card>AAAAAA</Card>
      <Card>AAAAAA</Card>
    </div>
  );
};

export default Operator;
