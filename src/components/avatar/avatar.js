import './avatar.css'
import React from 'react'
import { useState, useEffect } from 'react'

function Avatar(props) {
  const [slideIn, setSlideIn] = useState({ transform: "translate(0vh, 0%)" });
  const [genderPants, setGenderPants] = useState({ marginTop: "-.5vh" })
  const [leftLeg, setLeftLeg] = useState({ transform: "rotate(1.5deg)"})
  const [rightLeg, setRightLeg] = useState({ transform: "rotate(-1.5deg)"})
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
  const [waistError, setWaistError] = useState("")
  const [thighError, setThighError] = useState("")

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
    // console.log(user)
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
    // console.log(user)
  }
  function handleGender(e) {
    let top = document.getElementById('topTorso')
    let bottom = document.getElementById('bottomTorso')
    if (toggle == false) {
      top.classList.add('femaleUpperTorso')
      bottom.classList.add('femaleBottomTorso')
      e.target.innerText = 'Female'
      e.target.style.background = 'pink'
      setGenderPants({ marginTop: "-1vh" })
      setLeftLeg({ transform: "rotate(.5deg)" })
      setRightLeg({transform: "rotate(-.5deg)"})
    } else {
      top.classList.remove('femaleUpperTorso')
      bottom.classList.remove('femaleBottomTorso')
      e.target.innerText = 'Male'
      e.target.style.background = '#53fdfd'
      setGenderPants({ marginTop: "-.5px" })
      setLeftLeg({ transform: "rotate(1.5deg)" })
      setRightLeg({transform: "rotate(-1.5deg)"})
    }
    setToggle(prevCheck => !prevCheck)
  }
  function compareSize(e) {
    console.log(e.target.dataset.waist)
    // console.log(user.waist)
    setThighError("")
    setWaistError("")
    let waist = parseInt(e.target.dataset.waist)
    let thigh = parseInt(e.target.dataset.thigh)
    if (loggedWidth > waist) {
      console.log(`Waist too tight, try something ${loggedWidth - waist} sizes up`)
      setWaistError(`Waist too tight, try something ${loggedWidth - waist} sizes up`)
    }
    if ((loggedWidth * 0.75) > thigh) {
      console.log("A little tight on the thighs")
      setThighError("A little tight on the thighs")
    }

  }
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
  ]
  return (
  
    <div className="avatarPage" style={props.slideIn}>
      <div className='avatarLogo'>Virtual Fit</div>
    <div className='avatarComponentWrap'>
      <div className='avatarTopHalf'>
          <div className='avatarContainer'>
            <div className='errorContainer'>
            <div className='error'>{waistError}</div>
              <div>{thighError}</div>
              </div>
              <div className='topHalf'>
                <div id='topTorso' className='upperTorso' style={torsoHeight}></div>
              </div>
                
              <div className='bottomHalf'>
                <div
                  id='bottomTorso'
                  className='bottomTorso'
                  style={legHeight}
                >
                <div className='pants' style={genderPants}>
                  <div className='arrow-down'></div>
                  <div className='leftLeg' style={leftLeg}></div>
                  <div className='rightLeg' style={rightLeg}></div>
                </div>
                </div>
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
      </div>
      {/* <div className='userStats'>
        <div className='stats odd'>Height: {user.height} "</div>
        <div className='stats even'>Torso Height: {user.torso_length}"</div>
        <div className='stats odd'>Leg Length: {user.legLength}"</div>
        <div className='stats even'>Waist: {user.waist}" </div>
      </div> */}
        <div className='clothesSelectionTable'>
        <div className='pantsTable'>
          {dummyData.map((data) => 
            <div onClick={compareSize } className='avatarArticle' data-thigh={data.Thigh} data-size={data.Size} data-waist={data.Waist} data-seat={data.seat} >{data.Clothes}</div>
          )}
        </div>
        <div></div>
        </div>
      </div>
  )
}

export default Avatar
