import React from 'react'
import Clothes from './Clothes'
import Measurements from './Measurements'
import Avatar from "./avatar/avatar"

export default function FittingRoom() {
  return (
    <>
      <header>Virtual Fitting Room</header>
      <p>
        The more fields filled out, the more accurate the fitting room can be!
      </p>
      <div className='fitting-room'>
        <Avatar></Avatar>
        {/* <div className='silhouette'>Silhouette</div> */}
        <div className='clothing'>
          <div>
            <Clothes />
          </div>
          <div>
            <Clothes />
          </div>
        </div>
      </div>
      <Measurements />
    </>
  )
}
