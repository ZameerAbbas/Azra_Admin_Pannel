import React, { useState } from "react";
import "./Order.css";
import { FaPen } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
// import Table from 'react-bootstrap/Table';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Ordercom = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = props.Orderdata.slice(firstIndex, lastIndex);
  const npage = Math.ceil(props.Orderdata.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);

  return (
    <div className="main-order">
      <h3>Recent Orders</h3>
      <div className="firstdiv">
        <table id="table1">
          <thead>
            <tr>
              <th className="order">
                <div className="input">
                  <input type="checkbox" />
                </div>
                <span>Order ID</span>
              </th>
              <th className="product">Product</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th className="pen">Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, i) => (
              <tr key={i}>
                <td className="order">
                  <input type="checkbox" /> <span>{record.tablespan}</span>
                </td>
                <td className="product">
                  <div className="img">
                    <img src={record.tableimg} alt="profileImage" />
                    <div className="proinfo">
                      <h3>{record.tablemade}</h3>
                      <p>{record.tabelproducts}</p>
                    </div>
                  </div>
                </td>
                <td> {record.tabledate}</td>
                <td> {record.tablejohn}</td>
                <td> {record.tabledollor}</td>
                <td> {record.tablemaster}</td>

                {
                    record.tableprocessing ? <td className="processing" >{record.tableprocessing}</td> : null
                }
                {
                    record.tabledelivered ? <td className="delivered">{record.tabledelivered}</td> : null
                }
                {
                    record.tablecancelled ? <td className="cancelled" >{record.tablecancelled}</td> : null
                }
                {
                    record.tableshiped ? <td className="shiped">{record.tableshiped}</td> : null
                }

                <td className="pen">
                  <span>
                    <FaPen />
                  </span>
                  <span>
                    <IoMdEye />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link arrorw" onClick={prePage}>
                <AiFillCaretLeft />
              </a>
            </li>
            {number.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  href="#"
                  className="page-link arrorw focus"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link arrorw" onClick={nextPage}>
                <AiFillCaretRight />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default Ordercom;
