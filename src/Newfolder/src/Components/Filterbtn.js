import React from 'react'
import './Filterbtn.css'

function Filterbtn(props) {
  return (
    <div>
        <button className='ByDate-filter'>{props.filter}</button>
    </div>
  )
}

export default Filterbtn