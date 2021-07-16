import classnames from 'classnames';

import './Header.css';

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import main_logo from '../../images/alrezka-logo.png';


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
      <Link to='/' className={'header__link header__link_main'}><img src={main_logo} alt='лого Алрезка' className='header__main-logo' /></Link>
      <nav className='header__links-block header__contacts'>
        <Link to='tel:+7(916)000-00-00' className={classnames('header__link')}>+7(916)000-00-00</Link>
      </nav>
      <button className='header__burger' onClick={setNavigationOpen} />
      <Navigation isOpen={isNavigationOpen} handleClose={handleNavigationClose} handleClick={navigateToRoute} />
    </header>
  )
}
