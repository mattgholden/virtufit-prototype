import React, {useState} from 'react';
import img27 from '../assets/img27.png'
// import img34 from '../assets/img34.png'
import '../index.css'
import'./article/bottoms.css'
// import Clothes from './Clothes';

function Bottoms(props) {
  const [toggle, setToggle] = useState(false)
  
  //click to select
  function handleSelection(e){
    if (toggle === false){
    e.target.style.background = '#6F8FAF';
    }
      setToggle(prevCheck => !prevCheck)
  }

  //reset selections
  function resetSelection(e){
    if (toggle === false){
    e.target.style.background = '#whitesmoke'
    }
      setToggle(prevCheck => !prevCheck)
  }


   return (     
    <div className='articleComponetWrap'>
      <div className='clothing' >
        {/* Worth exploring tables to implement multiple images in the future */}
        <img className={'clothing'} 
          src={img27} alt="clothing-placeholder" onClick={handleSelection} onDoubleClick={resetSelection} />
        <p className={props.description}></p>
          {/* <h5 className={props.price}>$</h5> */}
      </div>
      <div className='button_container'>
        <button className="article_button" onClick={handleSelection} onDoubleClick={resetSelection}>XS</button>
        <button className="article_button" onClick={handleSelection} onDoubleClick={resetSelection}>S</button>
        <button className="article_button" onClick={handleSelection} onDoubleClick={resetSelection}>M</button>
        <button className="article_button" onClick={handleSelection} onDoubleClick={resetSelection}>L</button>
        <button className="article_button" onClick={handleSelection} onDoubleClick={resetSelection}>XL</button>
      </div>
    </div>
  )

}

export default Bottoms;