import React from "react";
import "./Scerch.css";
import { FiSearch } from "react-icons/fi";
import { RiNotification2Fill } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import { MdArrowDropDown } from "react-icons/md";


const Search = () => {
  return (
    <>
      <div className="search">
        <div className="seanot">
          <div className="searchInput">
            <span className="searchIcon">
              <FiSearch />
            </span>
            <input type="Search" placeholder="Search" />
          </div>
          <div className="notMsg">
            <span className="notifications">
              <RiNotification2Fill />
              <h6>2</h6>
            </span>
            <span className="notifications">
              <TbMailFilled />
              <h6>2</h6>
            </span>
          </div>
        </div>
        <div className="profile">
          <div className="img"><img src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" alt="proflieImage" /> <div className="dot"></div></div>
          <div className="manager">
            <h3>Shoaib Karim</h3>
            <h4>Manager</h4>
          </div>
          <div className="dropdown">
            
            <MdArrowDropDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

// import React, { useState } from "react";
// import '../search/Scerch.css'
// import { FiSearch } from "react-icons/fi";
// import { RiNotification2Fill } from "react-icons/ri";
// import { TbMailFilled } from "react-icons/tb";
// import { MdArrowDropDown } from "react-icons/md";

// const Search = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   return (
//     <>
//       <div className="search">
//         <div className="seanot">
//           <div className="searchInput">
//             <span className="searchIcon">
//               <FiSearch />
//             </span>
//             <input type="Search" placeholder="Search" />
//           </div>
//           <div className="notMsg">
//             <span className="notifications">
//               <RiNotification2Fill />
//               <h6>2</h6>
//             </span>
//             <span className="notifications">
//               <TbMailFilled />
//               <h6>2</h6>
//             </span>
//           </div>
//         </div>
//         <div className="profile">
//           <div className="img">
//             <img
//               src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
//               alt="proflieImage"
//             />
//             <div className="dot"></div>
//           </div>
//           <div className="manager">
//             <h3>Shoaib Karim</h3>
//             <h4>Manager</h4>
//           </div>
//           <div className="dropdown" onClick={togglePopup}>
//             <MdArrowDropDown />
//             {showPopup && (
//               <div className="popup">
//                 <p>My Profile</p>
//                 <p>Logout</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Search;