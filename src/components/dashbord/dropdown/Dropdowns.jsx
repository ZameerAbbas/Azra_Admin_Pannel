import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

const Dropdowns = () => {
  return (
    <div>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          This Year
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Dropdowns