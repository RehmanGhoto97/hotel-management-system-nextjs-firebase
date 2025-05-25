"use client";
import Modal from "react-modal";
import "./index.scss";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "@/slices/bookingSlice";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

import { doc, setDoc } from "firebase/firestore";
// import { addDoc, collection } from "firebase/firestore";
Modal.setAppElement("body");

const ModalBooking = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) =>
    state.booking.list.map((item) => item.loginId)[0]
  );
  console.log(userEmail)

  const initialFormData = {
    fulName: "",
    location: "",
    roomNo: "",
    totalPersons: "",
    checkIn: "",
    checkOut: "",
    price: "",
    mobileNo: "",
    notice: "",
    bookedOn: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
   const router = useRouter(); // Next.js router
  const RegisterSubmit = async () => {
      

    try {
      if (!formData.mobileNo) {
        alert("User mobile no is required.");
        return;
      }
      if (!userEmail) {
        alert("User email is not available. Please log in first.");
         router.push("/login"); // redirect to login
        return;
      }
      //  Save user document with custom ID
      const userRef = doc(db, "users", userEmail, "bookings", formData.mobileNo); // Ensure correct Firestore path
      await setDoc(userRef, formData);
      alert("User saved with ID: " + formData.mobileNo);
      dispatch(addBooking({ ...formData }));
      setFormData(initialFormData);
      alert("Booking added!");
      closeModal()
    } catch (err) {
      console.error("Error saving customer:", err);
      alert("Failed to save customer.");
    }
  }
  const closeModal = () => {
    if (typeof setIsOpen === "function") {
      setIsOpen(false);
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      ariaHideApp={false}
      contentLabel="Booking Modal"
      overlayClassName="overlay"
    >
      <div className="modal-header">
        <h4>Registration Form</h4>
        <button onClick={closeModal}>
          <RxCross1 />
        </button>
      </div>
      <div className="modal-body">
        <form id="booking-form" className="booking-form">
          <div className="row">
            <div className="col-12">
              <input
                type="text"
                name="fulName"
                required
                id="fullName"
                onChange={handleChange}
                className="form-control"
                placeholder="Full name"
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                required
                name="location"
                id="location"
                onChange={handleChange}
                className="form-control"
                placeholder="location"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <input
                type="number"
                required
                id="roomNo"
                onChange={handleChange}
                name="roomNo"
                className="form-control"
                placeholder="room no"
              />
            </div>
            <div className="col-12">
              <input
                type="number"
                name="totalPersons"
                id="totalPersons"
                onChange={handleChange}
                className="form-control"
                placeholder="total persons"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>check In date</label>
              <input
                id="checkIn"
                onChange={handleChange}
                type="date"
                required
                name="checkIn"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <label>check Out date</label>
              <input
                id="checkOut"
                required
                onChange={handleChange}
                type="date"
                name="checkOut"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <input
                type="number"
                name="price"
                id="price"
                onChange={handleChange}
                className="form-control"
                placeholder="price"
              />
            </div>
            <div className="col-12">
              <input
                type="number"
                name="mobileNo"
                required
                id="mobile"
                onChange={handleChange}
                className="form-control"
                placeholder="mobile"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <textarea
                name="notice"
                id="notice"
                onChange={handleChange}
                className="form-control"
                placeholder="Notice"
              ></textarea>
            </div>
            <div className="col-12">
              <label>Booked on</label>
              <input
                id="bookedOn"
                onChange={handleChange}
                type="date"
                name="bookedOn"
                className="form-control"
              />
            </div>
          </div>
          <div className="row" style={{ padding: "0.7rem 0" }}>
            <button
              onClick={RegisterSubmit}
              style={{
                width: " 100%",
                background: "#092543",
              }}
              className="btn"
              type="button"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalBooking;
