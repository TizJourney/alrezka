import classnames from 'classnames';

import './Header.css';

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

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
        <Link to='tel:+7(916)000-00-00' className='header__link'>+7(916)000-00-00</Link>
      </nav>
      <button className='header__burger' onClick={setNavigationOpen} />
      <Navigation isOpen={isNavigationOpen} handleClose={handleNavigationClose} handleClick={navigateToRoute} />
    </header>
  )
}
