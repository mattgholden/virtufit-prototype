import React, {useState} from 'react';
import img33 from '../assets/img33.png'
import '../index.css'
import'./article/alsotry.css'
// import Clothes from './Clothes';

function AlsoTry(props) {
  const [toggle, setToggle] = useState(false)

  function handleSelection(e){
    if (toggle === false){
    e.target.style.background = '#6F8FAF';
    }
      setToggle(prevCheck => !prevCheck)
  }

  function resetSelection(e){
    if (toggle === false){
    e.target.style.background = '#whitesmoke'
    }
      setToggle(prevCheck => !prevCheck)
  }

   return (     
    <div className='topComponetWrap'>
      <div className='clothing' >
        <h2>Also Try On</h2>
      <img className={'clothing'} 
        src={img33} alt="clothing-placeholder" onClick={handleSelection} onDoubleClick={resetSelection} />
        <p className={props.description}></p>
        {/* <h5 className={props.price}>$</h5> */}
      </div>
      {/* Buttons not needed for this use. */}
      {/* <div className='button_container'>
        <button className="article_button" onClick={handleSelection} onDoubleClick={resetSelection}>XS</button>
        <button className="article_button" onClick={handleSelection} onDoubleClick={resetSelection}>S</button>
        <button className="article_button" onClick={handleSelection} onDoubleClick={resetSelection}>M</button>
        <button className="article_button" onClick={handleSelection} onDoubleClick={resetSelection}>L</button>
        <button className="article_button" onClick={handleSelection} onDoubleClick={resetSelection}>XL</button>
      </div> */}
    </div>
  )
}

export default AlsoTry