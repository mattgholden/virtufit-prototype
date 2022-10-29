import './avatar.css'
import React from 'react'
import { useState, useEffect } from 'react'

function Avatar(props) {
  const [torsoHeight, SetTorsoHeight] = useState({
    height: '30.9vh',
    width: `${33.32 / 2}vh`,
  })
  const [legHeight, SetLegHeight] = useState({
    height: '37vh',
    width: `${33.32 / 2}vh`,
  })
  const [scale, setScale] = useState({})
  const [loggedHeight, setLoggedHeight] = useState(`68`)
  const [loggedWidth, setLoggedWidth] = useState(`32`)
  const [newTorsoHeight, setNewTorsoHeight] = useState('30.7')
  const [newTorsoWidth, setNewTorsoWidth] = useState({})
  const [newLegHeight, setNewLegHeight] = useState('37')
  const [newLegWidth, setNewLegWidth] = useState({})
  const [toggle, setToggle] = useState(false)

  const user = {
    height: parseInt(loggedHeight),
    waist: parseInt(loggedWidth),
    torso_length: parseInt(newTorsoHeight),
    legLength: parseInt(newLegHeight),
    thigh: parseInt(loggedWidth) * 0.75,
  }

  function handleHeight(e) {
    let torsoHeight = (parseInt(e.target.value) / 11) * 5
    let width = parseInt(e.target.value) / 4.08
    let legHeight = (parseInt(e.target.value) / 11) * 6
    setNewTorsoHeight(torsoHeight)
    setNewTorsoWidth(width)
    setNewLegHeight(legHeight)
    setNewLegWidth(width)
    SetTorsoHeight({
      height: `${newTorsoHeight}vh`,
      width: `${newTorsoWidth}vh`,
      transform: `scaleX(${parseInt(scale) / 30})`,
    })
    SetLegHeight({
      height: `${newLegHeight}vh`,
      width: `${newLegWidth}vh`,
      transform: `scaleX(${parseInt(scale) / 30})`,
    })
    setLoggedHeight(`${e.target.value}`)
    console.log(user)
  }

  function handleWidth(e) {
    // console.log(e.target.value);
    setScale(e.target.value)
    SetTorsoHeight({
      height: `${newTorsoHeight}vh`,
      width: `${newTorsoWidth}vh`,
      transform: `scaleX(${parseInt(scale) / 30})`,
    })
    SetLegHeight({
      height: `${newLegHeight}vh`,
      width: `${newLegWidth}vh`,
      transform: `scaleX(${parseInt(scale) / 30})`,
    })
    setLoggedWidth(`${e.target.value}`)
    console.log(user)
  }

  function handleGender(e) {
    let top = document.getElementById('topTorso')
    let bottom = document.getElementById('bottomTorso')
    if (toggle == false) {
      top.classList.add('femaleUpperTorso')
      bottom.classList.add('femaleBottomTorso')
      e.target.innerText = 'Female'
      e.target.style.background = 'pink'
    } else {
      top.classList.remove('femaleUpperTorso')
      bottom.classList.remove('femaleBottomTorso')
      e.target.innerText = 'Male'
      e.target.style.background = '#53fdfd'
    }
    setToggle(prevCheck => !prevCheck)
  }

  return (
    <div className='avatarComponentWrap'>
      <div className='avatarTopHalf'>
        <div className='avatarContainer'>
          <div className='topHalf'>
            <div id='topTorso' className='upperTorso' style={torsoHeight}></div>
          </div>
          <div className='bottomHalf'>
            <div
              id='bottomTorso'
              className='bottomTorso'
              style={legHeight}
            ></div>
          </div>
        </div>
        <div className='jeansSelectCards'>
          <button id='genderButton' onClick={handleGender}>
            Male
          </button>
          Height:
          <input type='range' min='60' max='76' onChange={handleHeight}></input>
          {loggedHeight}
          <br />
          <br />
          Waist:
          <input type='range' min='25' max='42' onChange={handleWidth}></input>
          {loggedWidth}"
        </div>
      </div>
      <div className='userStats'>
        <div className='stats odd'>Height: {user.height} "</div>
        <div className='stats even'>Torso Height: {user.torso_length}"</div>
        <div className='stats odd'>Leg Length: {user.legLength}"</div>
        <div className='stats even'>Waist: {user.waist}" </div>
      </div>
    </div>
  )
}

export default Avatar
