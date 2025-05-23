import Image from "next/image";
import "./hero.scss";
import heroImg from "./../../../assets/img/hero-img.JPG";
import  Link  from 'next/link';

const Hero = () => {
  return (
    <div className="hero-main homepage-hero-main">
      <div className="container">
        <div className="row-container">
          <div className="hero-col-left hero-col">
            <div className="hero-text">
              <h1 className="typewriter">
                Cloud-based Hotel Management System 
                {/* <span className="text-wrapper">
                  <span> Cashier </span>
                  <span> Guest </span>
                  <span> Booking </span>
                  <span className="cursor"></span>
                </span> management system */}
              </h1>
              <p>All-in-one solution for the hotel business</p>
              <Link className="btn-green-hover-blck" href='/login'>Free Sign Up</Link>
            </div>
          </div>
          <div className="hero-col-right hero-col">
            <Image alt="hero-img" src={heroImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
