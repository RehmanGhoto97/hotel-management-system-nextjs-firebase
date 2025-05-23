"use client";
import "./index.scss";
import Image from "next/image";
import hotelImg from "/assets/img/hotel-1.jpg";
import loginImg from "/assets/img/login.jpg";
import signupImg from "/assets/img/signup-2.webp";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export default function LoginPage() {
  const initialFormData = {
    name: "",
    hotelName: "",
    hotelsroomTotal: "",
    mobileNo: "",
    userEmail: "",
    userPassword: "",
  };
  const [active, setActive] = useState(true);
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const SignUpSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), formData);
      alert("Saved with ID: " + docRef.id);
      setActive(!active);
      setFormData(initialFormData);
    } catch (err) {
      console.error("Error saving:", err);
      alert("Failed to save.");
    }
  };
  // -----------------------------login logic------------------

  const router = useRouter(); // Next.js router
  const handleLogin = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("userEmail", "==", formData.userEmail),
        where("userPassword", "==", formData.userPassword)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // ✅ Login success
        alert("Login successful!");
        router.push("/dashboard"); // redirect to dashboard
        setFormData(initialFormData);
      } else {
        // ❌ Login failed
        alert("Invalid credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="login-main">
      <div className="row-container">
        <div className="col-left col-1 form-col">
          <ul>
            <li className="nav-item">
              <p
                onClick={() => setActive(true)}
                className={`nav-link ${active ? "active" : " "}`}
              >
                Signup
              </p>
            </li>
            <li className="nav-item">
              <p
                onClick={() => setActive(false)}
                className={`nav-link ${active ? " " : "active "}`}
              >
                Login
              </p>
            </li>
          </ul>
          <div className="tab-content">
            {active ? (
              <div
                className={`tab-pan ${active ? " active" : " "}`}
                id="signup"
              >
                <Image
                  priority
                  placeholder="blur"
                  style={{ width: "25%" }}
                  alt="signup"
                  width={100}
                  height={90}
                  src={signupImg}
                />
                <form id="signup-form">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="hotelName"
                    id="hotelName"
                    placeholder="Hotel name"
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    name="hotelsroomTotal"
                    id="hotelsroomTotal"
                    placeholder="No. of Hotel's room"
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    name="mobileNo"
                    id="mobileNo"
                    placeholder="Mobile"
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="userEmail"
                    id="signup-userEmail"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="userPassword"
                    id="signup-userPassword"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <button
                    onClick={SignUpSubmit}
                    type="button"
                    className="btn w-full"
                  >
                    {active ? " Signup" : "Login"}
                  </button>
                </form>
              </div>
            ) : (
              <div className={`tab-pan  ${active ? " " : "active"}`} id="login">
                <Image
                  placeholder="blur"
                  width={100}
                  height={50}
                  src={loginImg}
                  alt="login img"
                  priority
                />
                <form id="login-form">
                  <input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    required
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    required
                    name="userPassword"
                    id="userPassword"
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  <button
                    onClick={handleLogin}
                    type="button"
                    className="btn w-full"
                  >
                    {active ? " Signup" : "Login"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className="col-right col-1 img-col">
          <Image
            priority
            style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            alt="hotel image"
            src={hotelImg}
          />
        </div>
      </div>

      {/* Add login form here */}
    </div>
  );
}
