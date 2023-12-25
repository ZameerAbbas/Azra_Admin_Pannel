import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Sales = (props) => {
  return (
    <>
      <div className="box-1">
        <div className="row-1">
          <img src={props.imgsrc} alt="iconLogo" />
          <p>
            This Week <RiArrowDropDownLine />
          </p>
        </div>
        <div className="row-2">
          <div className="totalsale">
            <p>{props.sale}</p>
            <h2>{props.dollor} <span>{props.persent}</span></h2>
          </div>
          <div className="totalsale marjan">
            <p>{props.value}</p>
            <h2>{props.num} <span>{props.per}</span></h2>
          </div>
          <div className="totalsale">
            <p>{props.com}</p>
            <h2>{props.comnum}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
