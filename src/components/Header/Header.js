import classnames from 'classnames';

import './Header.css';

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
      <nav className='header__links-block header__contacts'>
        <p className='header__text'>Санкт-Петербург</p>
        <a href={`tel:${CONTACTS.telRaw}`} className='header__link'>{CONTACTS.tel}</>
      </nav>
      <button className='header__burger' onClick={setNavigationOpen} />
      <Navigation isOpen={isNavigationOpen} handleClose={handleNavigationClose} handleClick={navigateToRoute} />
    </header>
  )
}
