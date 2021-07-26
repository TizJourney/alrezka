import classnames from 'classnames';

import './NavTab.css';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import logoImage from '../../images/white-logo.png'

export default function Navigation(props) {

  return (
    <div className={classnames(props.className, 'nav-tab')}>
      <HashLink smooth to='#top' className='nav-tab__link nav-tab__link_title'>
        <img className='nav-tab__logo' src={logoImage} alt='Алрезка'/>
      </HashLink>
      <HashLink smooth to='#service' className='nav-tab__link'>Услуги</HashLink>
      <HashLink smooth to='#advantages' className='nav-tab__link'>Преимущества</HashLink>      
      <HashLink smooth  to='#contacts' className='nav-tab__link'>Контакты</HashLink>
    </div>
  )
}
