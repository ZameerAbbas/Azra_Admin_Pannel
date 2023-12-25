import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import './Modals.css'
import Code from './CountryCode/Code';

function Modals() {
    const [showForm, setShowForm] = useState(false);

    const handleCheckboxChange = () => {
        setShowForm(!showForm);
    };
    const [show, setShow] = useState(false);
    const [show3, setShow3] = useState(false);
    return (
        <>
            <div className="Modals m-5">
                <Button variant="primary" onClick={() => setShow(true)}>
                    Open Modal 1
                </Button>

                <Modal show={show} onHide={() => setShow(false)} className='Modal-one'>
                    <Modal.Header closeButton >
                        <Modal.Title className='Modal-one-Header'>Add a New Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container'>
                            <label className='Modal-label-one'>Customer Information</label>
                            <br />
                            <input placeholder='CustomerName' className='Modal-input-one' />
                            <br />
                            <input placeholder='CustomerEmail' className='Modal-input-one ' style={{ marginTop: '10px' }} />
                            <Code />
                            <div className='col-md-12 '>
                                <div className='Modals-check'>
                                    <label>Add Address</label>
                                    <div class="form-check form-switch">
                                        <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault showCalendar" checked={showForm} onChange={handleCheckboxChange} />
                                    </div>
                                </div>
                                <br />
                                {showForm && (
                                    <div className='Modals-input'>
                                        <input type="text" placeholder='Building No., Street Address' />
                                        <br />
                                        <input type="text" placeholder='City' style={{ marginTop: '10px' }} />
                                    </div>
                                )}
                            </div>
                            {/* <div className='row '>
                                <div className='col-md-6 Selection'>
                                <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                
                            </select>
                                </div>
                                <div className='col-md-6 Selection'>
                                <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                            </select>
                                </div>
                            </div> */}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => setShow3(true)}>
                            Open Modal 2
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show3} onHide={() => setShow3(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal 3</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>This is another modal</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => setShow3(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
}


export default Modals