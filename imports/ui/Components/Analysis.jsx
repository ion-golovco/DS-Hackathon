import React from "react";
import { Card, User } from "./Componente";

const Analysis = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4">
      <div className="flex gap-4 flex-col">
        <Card className="font-bold ">
          <div className="flex flex-row justify-between">
            <h1>Account</h1>
            <div className="font-normal">#{user.account_id}</div>
          </div>
          <div className="font-normal">Code: {user.code} </div>
        </Card>
        
      </div>
      
    </div>
  );
};

export default Operator;
