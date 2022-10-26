import React, { useState } from 'react'
import Clothes from './Clothes'

const initialMeasurements = {
  gender: 'Male',
  height: 68,
  shoulder: 16,
  neck: 16,
  chest: 42,
  arms: 12,
  waist: 30,
  inseam: 32,
}

export default function FittingRoom() {
  const [measurements, setMeasurements] = useState(initialMeasurements)

  const onSubmit = e => {
    e.preventDefault()
    console.log('Measurements Saved')
  }

  const { gender, height, shoulder, neck, chest, arms, waist, inseam } =
    measurements

  const onChange = e => {
    setMeasurements(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <>
      <header>Virtual Fitting Room</header>
      <p>
        The more fields filled out, the more accurate the fitting room can be!
      </p>
      <div className='fitting-room'>
        <div className='silhouette'>Silhouette</div>
        <div className='clothing'>
          <div>
            <Clothes />
          </div>
          <div>
            <Clothes />
          </div>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <label htmlFor='gender'>Gender</label>
        <select name='gender' id='gender' value={gender} onChange={onChange}>
          <option value='Select One' disabled>
            Select One
          </option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Prefer not to say'>Prefer not to say.</option>
        </select>
        <input
          type='number'
          name='height'
          value={height}
          onChange={onChange}
          placeholder='Height'
        />
        <input
          type='number'
          name='neck'
          value={neck}
          onChange={onChange}
          placeholder='Neck'
        />
        <input
          type='number'
          name='shoulder'
          value={shoulder}
          onChange={onChange}
          placeholder='Shoulder Width'
        />
        <input
          type='number'
          name='chest'
          value={chest}
          onChange={onChange}
          placeholder='Chest/Bust'
        />
        <input
          type='number'
          name='arms'
          value={arms}
          onChange={onChange}
          placeholder='Arms'
        />
        <input
          type='number'
          name='waist'
          value={waist}
          onChange={onChange}
          placeholder='Waist'
        />
        <input
          type='number'
          name='inseam'
          value={inseam}
          onChange={onChange}
          placeholder='Inseam'
        />
        <details>
          <summary>Additional measurements</summary>
          <input type='number' placeholder='Abdomen' />
          <input type='number' placeholder='Thigh Girth' />
          <input type='number' placeholder='Knee Girth' />
          <input type='number' placeholder='Calf Girth' />
          <input type='number' placeholder='Ankle Girth' />
        </details>

        <button>Submit</button>
      </form>
    </>
  )
}
