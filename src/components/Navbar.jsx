import React from 'react'

export default function Navbar() {
  return (
    <navbar>
      <ul className='links'>
        <li>SHOP</li>
        <li>DISCOVER</li>
        <li>SECONDHAND</li>
      </ul>
      <div>
        <img src='#' alt='Logo' />
      </div>
      <div className='right-nav'>
        <div className='search-bar'>
          <input type='search' placeholder='🔎 What are you looking for?' />
        </div>
        <div className='icons'>
          <span class='material-symbols-outlined'>notifications</span>
          <span class='material-symbols-outlined'>favorite</span>
          <span class='material-symbols-outlined'>lock</span>
        </div>
      </div>
    </navbar>
  )
}
