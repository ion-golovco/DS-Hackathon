import React from "react";

const Card = ({ children }) => {
  return <div className="text-3xl p-4 rounded-[1.5rem] bg-white h-96 shadow-md">{children}</div>;
};

const Dash = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
      <Card>AAAAAA</Card>
      <Card>AAAAAA</Card>
      <Card>AAAAAA</Card>

    </div>
  );
};

export default Dash;
