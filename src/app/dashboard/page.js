"use client";
import { useState } from "react";
import "./index.scss";

export default function DashboardPage() {
  const [togglepage, setTogglepage] = useState("booking");
  const data = [
    {
      id:1,
      name: "Ali",
      location: "gtk",
      roomNo: 22,
      totalPerson: 2,
      chechin: "05-May-2025",
      checkout: "15-May-2025",
      price: 5000,
      mobile:923112730732,
      notice:"ok he yeh customer",

    },
       {
      id:2,
      name: "Zufi",
      location: "lhr",
      roomNo: 22,
      totalPerson: 2,
      chechin: "05-May-2025",
      checkout: "15-May-2025",
      price: 5000,
      mobile:923152730732,
      notice:"ok he yeh customer",

    },
       {
      id:3,
      name: "Alisha",
      location: "krk",
      roomNo: 22,
      totalPerson: 2,
      chechin: "05-May-2025",
      checkout: "15-May-2025",
      price: 5000,
      mobile:923042730732,
      notice:"ok he yeh customer",

    },
       {
      id:4,
      name: "Junaid",
      location: "rts",
      roomNo: 22,
      totalPerson: 2,
      chechin: "05-May-2025",
      checkout: "15-May-2025",
      price: 5000,
      mobile:923012730732,
      notice:"ok he yeh customer",

    },
       {
      id:1,
      name: "Ali",
      location: "gtk",
      roomNo: 22,
      totalPerson: 2,
      chechin: "05-May-2025",
      checkout: "15-May-2025",
      price: 5000,
      mobile:923052730732,
      notice:"ok he yeh customer",

    },
 
  ];
  return (
    <div>
      <div className="row-container">
        <ul>
          <li
            onClick={() => setTogglepage("booking")}
            className={` ${togglepage == "booking" ? "active" : " "} nav-item`}
          >
            <p>Booking</p>
          </li>
          <li
            onClick={() => setTogglepage("inhouse")}
            className={` ${togglepage == "inhouse" ? "active" : " "} nav-item`}
          >
            <p>In House</p>
          </li>
          <li
            onClick={() => setTogglepage("archive")}
            className={` ${togglepage == "archive" ? "active" : " "} nav-item`}
          >
            <p>Archive</p>
          </li>
          <li
            onClick={() => setTogglepage("cashier")}
            className={` ${togglepage == "cashier" ? "active" : " "} nav-item`}
          >
            <p>Cashier</p>
          </li>
        </ul>
        <div className="tab-content">
          {togglepage == "booking" ? (
            // ---------------------------------------booking tab ---------------------------------
            <div
              className={`tab-pan booking-tab ${
                togglepage == "booking" ? "active" : ""
              }`}
            >
              <div className="row-noPrint btn-row">
                <div className="col-md-4">
                  <button className="btn">Register</button>
                </div>
                <div className="col-md-4">
                  <button className="btn">Print</button>
                </div>
                <div className="col-md-4">
                  <button className="btn">
                    Total Bookings = <span>{0}</span>
                  </button>
                </div>
              </div>
              <div className="table-resposive">
                <h2>All Booking Data</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sr.no</th>
                      <th>Location</th>
                      <th>full name</th>
                      <th>Room no</th>
                      <th>total person</th>
                      <th>checkIn</th>
                      <th>checkOut</th>
                      <th>Price</th>
                      <th>Mobile</th>
                      <th>Notice</th>
                      <th>Booked on</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
              <div className="show-booking-rooms"></div>
            </div>
          ) : togglepage == "inhouse" ? (
            // ---------------------------------------inhouse tab ---------------------------------
            <div
              className={`tab-pan inhouse-tab ${
                togglepage == "inhouse" ? "active" : ""
              }`}
            >
              <div className="row-noPrint btn-row">
                <div className="col-md-4">
                  <button className="btn">Register</button>
                </div>
                <div className="col-md-4">
                  <button className="btn">Print</button>
                </div>
                <div className="col-md-4">
                  <button className="btn">
                    Total In House = <span>{0}</span>
                  </button>
                </div>
              </div>
              <div className="table-resposive"></div>
              <div className="show-inhouse-bookings"></div>
            </div>
          ) : togglepage == "archive" ? (
            // ---------------------------------------archive tab ---------------------------------
            <div
              className={`tab-pan archive-tab ${
                togglepage == "archive" ? "active" : ""
              }`}
            >
              <div className="row-noPrint btn-row">
                <div className="col-md-4">
                  <button className="btn">Print</button>
                </div>
                <div className="col-md-4">
                  <button className="btn">
                    Total Archive = <span>{0}</span>
                  </button>
                </div>
              </div>
              <div className="table-resposive"></div>
              <div className="show-allArchived-data"></div>
            </div>
          ) : (
            // ---------------------------------------cashier tab ---------------------------------
            <div
              className={`tab-pan cashier-tab ${
                togglepage == "cashier" ? "active" : ""
              }`}
            >
              cashier
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
