import React from "react";
import Sales from "./Sales";
import Salesdata from "./Salesdata";

const Salescom = () => {
  function ncard(val) {
    return <Sales imgsrc={val.imgsrc} sale={val.sale} dollor={val.dollor} value={val.value} persent={val.persent} num={val.num} per={val.per} com={val.com} comnum={val.comnum}/>;
  }
  return <div className="cardsdata">{Salesdata.map(ncard)}</div>;
};

export default Salescom;
