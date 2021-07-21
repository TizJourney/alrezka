import './Header.css';

import classnames from 'classnames';

import whatsappIcon from '../../images/whatsapp-icon-logo.svg';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CONTACTS } from '../../utils/context'

import Navigation from '../Navigation/Navigation.js';



export default function Header(props) {
  const history = useHistory();

  const [isNavigationOpen, setNavigationStatus] = useState(false);

  function handleNavigationClose() {
    setNavigationStatus(false);
  };

  function setNavigationOpen() {
    setNavigationStatus(true);
  }

  function navigateToRoute(route) {
    history.push(route);
    setNavigationStatus(false);
  };

  return (
    <header className={classnames(props.className, 'header')}>
      <p className='header__text'>Санкт-Петербург</p>      
      <nav className='header__links-block header__contacts'>
        <a className='header__link' href={`tel:+${CONTACTS.telRaw}`} >{CONTACTS.tel}</a>
        <a className='header__link' href={`https://wa.me/${CONTACTS.telRaw}`} ><img className='header__whatsapp-icon' src={whatsappIcon} alt='whatsApp'/></a>
      </nav>
      <button className='header__burger' onClick={setNavigationOpen} />
      <Navigation isOpen={isNavigationOpen} handleClose={handleNavigationClose} handleClick={navigateToRoute} />
    </header>
  )
}
