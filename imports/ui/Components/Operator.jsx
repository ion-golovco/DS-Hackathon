import React from "react";
import { Card, User } from "./Componente";

const user = {
  _id: { $oid: "64033dd363449ef2bf3396fd" },
  account_id: "1711570",
  code: "SA820001733",
  code_ma: "MA340010303",
  epoch: "30.06.2020",
  contract_length: "24",
  contract_expiration_date: "01.07.2023",
  remaining_receivables: "0",
  competitors: "0",
  incidents: "0",
  contract_status: "0",
  termination_request: "0",
  net_params: "0",
  subscription_price: "190",
  quality_perception: "0",
  cost_perception: "0",
  technology: "FTTH",
  iptv_stb_quantity: "",
  inet_pack: "PACK 225",
  qnt_calls: "",
  qnt_port_res: "",
  avg_perception: "",
  qnt_susp: "",
  qnt_incident: null,
  dissolution_month: "",
  incident_month: "",
  call_month: "",
  debth_month: "0",
  payment_period: "",
  payment_sum: "",
  multiply: "INTERNET,IPTV-P,WL-V",
  cnt_services: "3",
  is_churn: "0",
  churn_date: "",
};

const Operator = () => {
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
        <Card className="font-bold ">
          <h1>Contract</h1>
          <div className="font-normal">Duration : {user.contract_length}</div>
          <div className="font-normal">Code : {user.code_ma}</div>
          <div className="font-normal">Expiration date : {user.contract_expiration_date}</div>
        </Card>

        <Card className="font-bold ">
          <h1>Subcription package</h1>
          <div className="font-normal">{user.inet_pack}</div>
          <div className="font-normal">{user.multiply}</div>
          <div>{user.subscription_price} MDL</div>
        </Card>

        <Card className="font-bold ">
          <div className="flex-row flex justify-between">
            <h1>Satisfaction</h1>
            <div className="font-normal">4/5⭐</div>
          </div>
        </Card>

        <Card className="font-bold ">
          <h1>Feedback</h1>
          <div className="font-normal text-lg">
            Quality perception: <span className="font-bold text-green-700"> Good 👍</span>
          </div>
          <div className="font-normal text-lg">
            Price perception: <span className="font-bold text-green-700"> Good 👍</span>
          </div>
        </Card>
      </div>
      <div className="flex gap-4 flex-col">

        <Card className="font-bold ">
          <h1>Factors</h1>
          <div className="font-normal">
            Competitiors: {user.competitors}
          </div>

          <div className="font-normal">
            Incidents: {user.incidents}
          </div>
          <div className="font-normal">
            Quantity: {user.qnt_incident}
          </div>
          <div className="font-normal">
            Incident last month: {user.incident_month || ' none'}
          </div>
          <div className="font-normal">
            Solution month: {user.dissolution_month || ' none'}
          </div>
        </Card>
        
        <Card className="font-bold ">
          <h1>
            Debt
          </h1>
          <div className="font-normal">Amount :{user.payment_sum || ' none'}</div>
          <div className="font-normal">Period :{user.payment_period || ' none'}</div>
          <div></div>
        </Card>

        <Card className="font-bold ">
          <h1>
            Calls
          </h1>
          <div className="font-normal">Amount :{user.qnt_calls || ' none'}</div>
          <div className="font-normal">Last month called :{user.call_month || ' none'}</div>
          <div></div>
        </Card>

        <Card className="font-bold ">
        <div className="flex-row flex justify-between">
            <h1>Chance for churn</h1>
            <div className="text-green-700">20%</div>
          </div>
        </Card>

      </div>

    </div>
  );
};

export default Operator;
