import React, { useState } from 'react'
import './ByDate.css'
import Boxes from '../Boxes';
import Filterbtn from '../Filterbtn';

function ByDate() {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleCheckboxChange = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className='ByDate-main'>
      <div className='container Bydate'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='ByDate-h1'>By Date</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Boxes label="This Week"/>
          </div>
          <div className='col-md-6'>
            <Boxes label="Last Week"/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Boxes label="This Month"/>
          </div>
          <div className='col-md-6'>
            <Boxes label="Last Month"/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Boxes label="This Year"/>
          </div>
          <div className='col-md-6'>
            <Boxes label="Last Year"/>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-md-12 mother'>
          <div>
          <input type='checkbox' id="showCalendar" checked={showCalendar}
          onChange={handleCheckboxChange}/>
            <label>Date Range</label>
          </div>
            <br/>
            {showCalendar && (
          <div >
          <div className='From-To'>
          <button>From</button>
          <button>To</button>
          </div>
          <div><input type="date" id="birthday" /></div>
          </div>
          
        )}
          </div>
          <div className='col-md-12' style={{marginTop:"16px"}}>
                <Filterbtn filter="Filter" />
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default ByDate

