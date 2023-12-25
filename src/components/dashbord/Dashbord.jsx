import React from "react";
import "./Dashbord.css";
import { GoHomeFill } from "react-icons/go";
import Salescom from "./Salescom";
import RevenueChart from "./chart/RevenueChart";
import Dropdowns from "./dropdown/Dropdowns";
import Order from "./order/Order";
import Progressbar from "./Progressbar/Progressbar";
import Transaction from "./Transaction history/Transaction";

const Dashbord = () => {
  return (
    <>
      <div className="Dashboard">
        <div className="nameDashboard">
          <span>
            <GoHomeFill />{" "}
          </span>
          <h3>/ Dashboard</h3>
        </div>
        <div className="thisWeek">
          <Salescom />
        </div>
        <div className="mainChartpro">
          <div className="chartGrap">
            <div className="overall">
              <div className="revenus">
                <p>Overall revenus</p>
                <h2>
                  $48,574.21 <span>+20%</span>
                </h2>
              </div>
              <div className="dropdown">
                <Dropdowns />
              </div>
            </div>
            <div className="chart">
              <RevenueChart />
            </div>
          </div>
          
          <div className="prog">
          <Progressbar/>
          </div>
        </div>
        <div className="order">
          <div className="orderMain">
          <Order />
          </div>
          <div className="tran">
          <Transaction />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
