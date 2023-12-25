import React from 'react'
import Filterbtn from '../Filterbtn'
import './Filter.css'

function Filter() {
  return (
    <div className='container Filter'>
      <h2>Filter</h2>
      <h6>Order Type</h6>
      <div className='row' >
        <div className='col-md-7'>
          <input type='checkbox' />
          <label className='label-one'>Home Delivery</label>
        </div>
        <div className='col-md-5'>
          <input type='checkbox' />
          <label className='label-one'>Pick Up</label>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <hr />
            <hr />
          </div>
        </div>
        <div className='Filter-Status '>

          <label>Status</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>All</option>
            <option value="1">One</option>
          </select>
          <label style={{ marginTop: '16px' }}>Customer</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>All</option>
            <option value="1">One</option>
          </select>
          <label style={{ marginTop: '16px' }}>Amount</label>
          <div className='row'>
            <div className='col-md-6'>
              <p >From</p>
              <input placeholder='0.00'/>
            </div>
            <div className='col-md-6' >
              <p style={{marginLeft:'2px'}}>To</p>
              <input placeholder='0.00' className='input1'/>
            </div>
            <div className='row'>
              <div className='col-md-12'>
              <Filterbtn filter="Filter"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Filter