import React, { useState } from "react";
import { FaTh } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
// import logo from "../images/logo.png";
import "./SideBar.css";
const Sidebar = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/Empty",
      name: "Empty",
      icon: <FaTh />,
    },
  ];
  return (
    <div className="dashboardwrapper" style={{ background: "#fff" }}>
      <div className="sidebar">
        <div className="top_section">
          <div className="logo">
            <h1>logo</h1>
          </div>
          =
        </div>
        <div className="menubarr">
          <div>
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  // style={{ display: isOpen ? "block" : "none" }}
                  className="link_text ms-3 d-none d-sm-inline"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
          <div>
            {/* <Link to="/Logout">Logout</Link> */}
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
