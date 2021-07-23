import './Navigation.css';

import React from 'react';

import imageLogo from '../../images/white-logo.png';
import { HashLink } from 'react-router-hash-link';

export default function Navigation(props) {

  return (
    <div className={`navigation ${props.isOpen && "navigation_opened"}`}>
      <div className='navigation__overlay' ></div>
      <div className='navigation__internal-content' >
        <button className='navigation__close-button' onClick={() => {props.handleClose()} } />
        <nav className='navigation__links-block header__links-block_auth'>
          <HashLink smooth to='#top' className='nav-tab__link nav-tab__link_title' onClick={() => {props.handleClick()}} >
            <img className='navigation__logo' src={imageLogo} alt='Лого Алрезки' />
          </HashLink>
          <HashLink smooth to='#service' className='nav-tab__link nav-tab__link_title' onClick={() => {props.handleClick()}} >Услуги</HashLink>
          <HashLink smooth to='#equipment' className='nav-tab__link nav-tab__link_title' onClick={() => {props.handleClick()}} >Оборудование</HashLink>
          <HashLink smooth to='#contacts' className='nav-tab__link nav-tab__link_title' onClick={() => {props.handleClick()}} >Контакты</HashLink>
        </nav>
      </div>
    </div >
  )
}
