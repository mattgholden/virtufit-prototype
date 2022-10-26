import React, { useState } from 'react'
import Input from '../ui/Input'

const initialMeasurements = {
  gender: 'Male',
  height: 68,
  weight: 130,
  shoulder: 16,
  neck: 16,
  chest: 42,
  arms: 12,
  waist: 30,
  thigh: 15,
  inseam: 32,
}

export default function Measurements() {
  const [measurements, setMeasurements] = useState(initialMeasurements)

  const onSubmit = e => {
    e.preventDefault()
    console.log('Measurements Saved')
  }

  const { gender, height, chest, waist, thigh } = measurements

  const onChange = e => {
    setMeasurements(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  return (
    <form className='measurement-form' onSubmit={onSubmit}>
      <label htmlFor='gender'>Gender</label>
      <select name='gender' id='gender' value={gender} onChange={onChange}>
        <option value='Select One' disabled>
          Select One
        </option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Prefer not to say'>Prefer not to say.</option>
      </select>
      <Input
        id='height'
        type='number'
        name='height'
        value={height}
        onChange={onChange}
        placeholder='Height'
      />
      <Input
        id='chest'
        type='number'
        name='chest'
        value={chest}
        onChange={onChange}
        placeholder='Chest/Bust'
      />
      <Input
        type='number'
        name='waist'
        value={waist}
        onChange={onChange}
        placeholder='Waist'
      />
      <Input
        type='number'
        name='thigh'
        value={thigh}
        onChange={onChange}
        placeholder='Thigh'
      />

      <button>Submit</button>
    </form>
  )
}
