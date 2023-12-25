import React from 'react'
import './Transaction.css'
import img5 from '../../images/dots.png'
import Transectioncard from './Transaction card/Transectioncard'
import Transactiondata from "./Transectiondata"

const Transaction = () => {
    function  Ncard (valu){
        return(
            <Transectioncard img={valu.img}  payment={valu.payment } span={valu.span} date={valu.date}
            amount={valu.amount} />
        ) 
    }
  return (
    <div className='Transaction'>
        <div className='Transaction-title'>
            <h2>Transaction history</h2>
            <img src={img5} alt="#" />
        </div>
        <div className="cards">
            {Transactiondata.map(Ncard)}
        </div>

    </div>
  )
}

export default Transaction