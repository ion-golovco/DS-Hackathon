import React, { useState, useEffect} from "react";
import Dash from "./Components/Dash";
import Operator from "./Components/Operator";
import axios from 'axios';

const button = "font-bold bg-slate-200 shadow-md";

export const Dashboard = () => {
  const [open, setOpen] = useState(0);
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get('http://172.31.65.226:3000/hello')
      .then(response => {
        console.log(response.data)
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div className="min-h-screen">
      <a href="/" className="flex justify-center py-1 font-bold ">
        Trackly | DataMunch board
      </a>

      <div className="flex w-full flex-col md:flex-row bg-gradient-to-r to-amber-400 from-pink-600 pt-2 min-h-[100vh]">
        <div className="md:w-72 w-full bg-slate-100">
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
            <button onClick={() => setOpen(0)} className={open==0?button:undefined}>
              Dashboard
            </button>
            <button onClick={() => setOpen(1)} className={open==1?button:undefined}>
              Clients
            </button>
            <button>Analysis</button>
            <div>Links</div>
            <div>Settings</div>
          </div>
            <div className="flex flex-row md:mt-52 mt-4 ml-2 bg-white rounded-full shadow-lg">
          <img className="h-12 w-12" src="https://i.imgur.com/ubOtLOb.png" alt="" />
          <div className="font-semibold py-3 px-2">Moldtelecom SRL</div>
          </div>
        </div>

        <div className="w-full bg-slate-100 p-6">{
          
        open === 0 ? <Dash users = {users}/> : <Operator user={user}/>
        
        }</div>
      </div>
    </div>
  );
};
