import React from 'react'
// import iconcontainer from '../images/iconContainer.png'
// import fplus from '../images/fi_plus.png'
import './Empty.css'
import Filterbtn from '../Filterbtn'

function Empty() {
  return (
    <div className='Empty-main'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    {/* <img src={iconcontainer} alt='icon' className='Iconcontainer'/> */}
                    <h1>
                    No Orders Yet?
                    </h1>
                    <p>Add products to your store and start selling to see orders here.</p>
                    <div className='Empty-btn'>
                    {/* <img src={fplus} alt='Plus'/> */}
                    <Filterbtn filter="New Product"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Empty