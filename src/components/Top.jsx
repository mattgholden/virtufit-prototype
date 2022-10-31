import React, {useState} from 'react';
import img26 from '../assets/img26.png'
import '../index.css'
import'./article/tops.css'
// import Clothes from './Clothes';

function Top(props) {
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
        <h2>Tops</h2>
      <img className={'clothing'} 
        src={img26} alt="clothing-placeholder" onClick={handleSelection} onDoubleClick={resetSelection} />
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

export default Top;