import './Navigation.css';

import React from 'react';

export default function Navigation(props) {

  return (
    <div className={`navigation ${props.isOpen && "navigation_opened"}`}>
      <div className='navigation__overlay' ></div>
      <div className='navigation__internal-content' >
        <button className='navigation__close-button' onClick={() => {props.handleClose()} } />
        <nav className='navigation__links-block header__links-block_auth'>
          <button className='navigation__link navigation__link_main' onClick={() => {props.handleClick('/')} }>Главная</button>
          <button className='navigation__link navigation__link_movies' onClick={() => {props.handleClick('/')} }> Раз </button>
          <button className='navigation__link hnavigation__link_saved-movies' onClick={() => {props.handleClick('/')} }> Два </button>
        </nav>
      </div>
    </div >
  )
}
