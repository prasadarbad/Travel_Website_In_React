import React,{useEffect} from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import "./Offer.css";
import "./offer.scss";

import {
  MdAirportShuttle,
  MdBathtub,
  MdKingBed,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import img1 from "../../Assets/hotel1.jpg";
import img2 from "../../Assets/hotel2.jpg";
import img3 from "../../Assets/hotel3.jpg";
import img4 from "../../Assets/hotel4.jpg";

const Offers = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "kashmir",
    location: "India",
    price: "$3,500",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Goa Beach",
    location: "India",
    price: "$2,200",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Burj Khalifa",
    location: "Dubai",
    price: "$2,452",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Taj Mahal",
    location: "India",
    price: "$4,400",
  },
];
const Offer = () => {

  useEffect(()=>{
    Aos.init({
      duration:2000
    },[])
  })
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div  data-aos="fade-up" date-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            From historical cities to natural spectecular ,come see the best of
            the world!
          </p>
        </div>
        <div className="mainContent grid">
          {Offers.map(({id,imgSrc,destTitle,location,price}) => {
            return (
              <div  data-aos="fade-up" date-aos-duration="3000" className="singleOffer">
                <div className="destImage">
                  <img src={imgSrc} alt={destTitle} />
                  <span className="discount">30% Off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">For rent</span>
                  </div>

                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon" />
                      <small>2 beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small>1 Bathtub</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>Wifi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>

                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 Vine #310,{location}</small>
                  </div>
                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offer;
