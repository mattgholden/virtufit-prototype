import React from 'react'
import Clothes from './Clothes'
import Measurements from './Measurements'
import Avatar from "./avatar/avatar"
import Article from './Article'
import { useState } from 'react'

export default function FittingRoom() {
const dummyData = [
  {
    "uID": 1,
    "Clothes": "Boot-Cut Jeans",
    "Inseam Length": 34,
    "Leg Opening": 15,
    "Rise": 10.5,
    "Seat": 42.5,
    "Size": 34,
    "Thigh": 24,
    "Waist": 35.5
  },
  {
    "uID": 2,
    "Clothes": "Slim Fit Mid-Rise Jeans",
    "Inseam Length": 31,
    "Leg Opening": 15,
    "Rise": 11,
    "Seat": 42.5,
    "Size": 34,
    "Thigh": 24,
    "Waist": 35.5
  },
  {
    "uID": 3,
    "Clothes": "Blue Regular Jeans",
    "Inseam Length": 32,
    "Leg Opening": 14,
    "Rise": 10,
    "Seat": 38.5,
    "Size": 30,
    "Thigh": 21.75,
    "Waist": 31.5
  },
  {
    "uID": 4,
    "Clothes": "Blue Relaxed Fit Jeans",
    "Inseam Length": 30,
    "Leg Opening": 16,
    "Rise": 11,
    "Seat": 46.125,
    "Size": 38,
    "Thigh": 25.5,
    "Waist": 39.5
  },
  {
    "uID": 5,
    "Clothes": "Black Regular Jeans",
    "Inseam Length": 31,
    "Leg Opening": 13.5,
    "Rise": 10,
    "Seat": 36.5,
    "Size": 28,
    "Thigh": 20.75,
    "Waist": 29.5
  },
  {
    "uID": 6,
    "Clothes": "Black Slim Fit Joggers Jeans",
    "Inseam Length": 34,
    "Leg Opening": 14.5,
    "Rise": 10.5,
    "Seat": 40.5,
    "Size": 32,
    "Thigh": 22.75,
    "Waist": 33.5
  },
  {
    "uID": 7,
    "Clothes": "Blue Slim Tapered Fit Jeans",
    "Inseam Length": 32,
    "Leg Opening": 13.75,
    "Rise": 11,
    "Seat": 45,
    "Size": 36,
    "Thigh": 24.5,
    "Waist": 37.5
  },
  {
    "uID": 8,
    "Clothes": "Black Slim Tapered Fit Jeans",
    "Inseam Length": 32,
    "Leg Opening": 12.25,
    "Rise": 10,
    "Seat": 39,
    "Size": 30,
    "Thigh": 21.5,
    "Waist": 31.5
  },
  {
    "uID": 9,
    "Clothes": "Black Slim Tapered Fit Jeans",
    "Inseam Length": 34,
    "Leg Opening": 15.75,
    "Rise": 12,
    "Seat": 51.5,
    "Size": 44,
    "Thigh": 27.5,
    "Waist": 45.5
  },
  {
    "uID": 10,
    "Clothes": "Black Slim Straight Fit Jeans",
    "Inseam Length": 34,
    "Leg Opening": 15.75,
    "Rise": 10.5,
    "Seat": 41.5,
    "Size": 32,
    "Thigh": 22.75,
    "Waist": 34
  }
]
const [slideIn, setSlideIn] = useState({ transform: "translate(125vh, 0%)" });
const [toggle, setToggle] = useState(false);
function handleVF() {
  if (toggle == true) {
    // setShow("");
    setSlideIn({ transform: "translate(125vh, 0%)" });
  } else {
    setSlideIn({ transform: "translate(0%, 0%)" });
  }
  setToggle((prevCheck) => !prevCheck);
}

  return (
    <>
      <div className='vfButton' onClick={handleVF}>VF</div>
      <header>Virtual Fitting Room</header>
      <p>
        The more fields filled out, the more accurate the fitting room can be!
      </p>
      <div className='fitting-room'>
        <Avatar slideIn={slideIn}></Avatar>
        {/* <div className='silhouette'>Silhouette</div> */}
        <div className='clothing'>
          {dummyData.map((data) =>
            <Article Clothes={data.Clothes} />
            
            )}
         
        </div>
      </div>
      {/* <Measurements /> */}
    </>
  )
}
