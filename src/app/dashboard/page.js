"use client";
import { useState } from "react";
import "./index.scss";
import { FaCheck, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalBooking from "@/components/modalBooking/ModalBooking";
import { useSelector } from "react-redux";
import { addBooking } from "@/slices/bookingSlice";

export default function DashboardPage() {
  const bookings = useSelector((state) => state.booking.list);
  console.log(bookings);
  const [togglepage, setTogglepage] = useState("booking");
  const [modalOpen, setModalOpen] = useState(false);
  const toggleBooking = () => {
    setModalOpen(true);
  };

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
              className={`tab-pan booking-tab ${togglepage == "booking" ? "active" : ""
                }`}
            >
              <div className="row-noPrint btn-row">
                <div className="col-md-4">
                  <button onClick={toggleBooking} className="btn">
                    Register
                  </button>

                  <ModalBooking isOpen={modalOpen} setIsOpen={setModalOpen} />

                </div>
                <div className="col-md-4">
                  <button className="btn">Print</button>
                </div>
                <div className="col-md-4">
                  <button className="btn">
                    Total Bookings = <span>{bookings.length-1}</span>
                  </button>
                </div>
              </div>
              <div className="table-resposive">
                <h2>All Booking Data</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sr.no</th>
                      <th>full name</th>
                      <th>Location</th>
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
                  <tbody className="booking-list">
                    {bookings.map((item, index) => (
                      
                      !item.loginId && 
                      <tr
                        key={index}
                        className={`${index % 2 == 0 ? "bg-strpped" : " "}`}
                      >
                        <td className="nowrap">{index+1}</td>
                        <td className="nowrap">{item.fulName}</td>
                        <td className="nowrap">{item.location}</td>
                        <td className="nowrap">{item.roomNo}</td>
                        <td className="nowrap">{item.totalPersons}</td>
                        <td className="nowrap">{item.checkIn}</td>
                        <td className="nowrap">{item.checkOut}</td>
                        <td className="nowrap">{item.price}</td>
                        <td className="nowrap">{item.mobileNo}</td>
                        <td className="nowrap">{item.notice}</td>
                        <td className="nowrap">{item.bookedOn}</td>
                        <td className="nowrap td-btn">
                          <button type="button" className="edit-btn">
                            <FaRegEdit />
                          </button>
                          <button type="button" className="check-btn">
                            <FaCheck />
                          </button>
                          <button type="button" className="delete-btn">
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="show-booking-rooms"></div>
            </div>
          ) : togglepage == "inhouse" ? (
            // ---------------------------------------inhouse tab ---------------------------------
            <div
              className={`tab-pan inhouse-tab ${togglepage == "inhouse" ? "active" : ""
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
              className={`tab-pan archive-tab ${togglepage == "archive" ? "active" : ""
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
              className={`tab-pan cashier-tab ${togglepage == "cashier" ? "active" : ""
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
