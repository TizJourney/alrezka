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
    <div>
      <header className={classnames(props.className, 'header')}>
        <Link to='/' className={'header__link header__link_main'}><img src={main_logo} alt='лого главной страницы' className='header__main-logo' /></Link>
        <nav className='header__links-block header__links-block_auth'>
          <Link to='/' className={classnames('header__link header__link_saved-movies')}>Раз</Link>
          <Link to='/' className={classnames('header__link header__link_saved-movies')}>Два</Link>
          <Link to='/' className={classnames('header__link header__link_saved-movies')}>Три</Link>
          <Link to='/' className={classnames('header__link header__link_movies')}>Фильмы</Link>
        </nav>
        <button className='header__burger' onClick={setNavigationOpen} />
      </header>

      <Navigation isOpen={isNavigationOpen} handleClose={handleNavigationClose} handleClick={navigateToRoute} />
    </div>
  )
}
