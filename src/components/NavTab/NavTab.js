import classnames from 'classnames';

import './NavTab.css';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Navigation(props) {

  return (
    <div className={classnames(props.className, 'nav-tab')}>
      <HashLink to='/#' className='nav-tab__link nav-tab__link_title'>Алрезка</HashLink>
      <HashLink to='/#service' className='nav-tab__link'>Услуги</HashLink>
      <HashLink to='/#equipment' className='nav-tab__link'>Оборудование</HashLink>      
      <HashLink to='/#contacts' className='nav-tab__link'>Контакты</HashLink>
    </div>
  )
}
