import React from 'react';
import './Transectioncard.css';

const Transectioncard = (props) => {
    return (
        <div className=' Transectioncard'>
            <div className='row' style={{width:'100%'}}>
                <div className="col-md-8 ">
                    <div className="row ">
                        <div className=" col-md-3" style={{margin:'0px'}}>
                        <div className='picture'>
                        <img src={props.img} alt="#" />
                        </div>
                           
                        </div>
                        <div className=" col-md-9">
                            <div className="titleanddate">
                                <h2>{props.payment} <span>{props.span}</span></h2>
                                <h3>{props.date}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-md-4 ">
                    <div className='title-2'>
                    <h2>{props.amount}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transectioncard