
import classnames from 'classnames';

import './Main.css';

import React from 'react';

import Promo from '../Promo/Promo';
import Contacts from '../Contacts/Contacs';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';

function MainPage(props) {
  return (
    <div id={props.id} className={classnames('main-content__page', props.className)}>
      {props.children}
    </div>
  )
}

function MainTitle(props) {
  return (
    <h2 className={classnames('main-content__title', props.className, props.theme)}>{props.title}</h2>
  )
}

export default function Main(props) {
  return (
    <div>
      <div className='main main_promo'>
        <MainPage className='main_content main-page main-page_promo'>
          <Header className='main-page__item main-page__item_header' />
          <Promo className='main-page__item main-page__item_promo' />
        </MainPage>
      </div>

      <div className='main main_contacts' id='contacts'>
        <MainPage className='main_content main-page main-page_contacts'>
          <MainTitle className='main-page__item main-page__item_service' title='Контакты' />
          <Contacts />
        </MainPage>
      </div>
      <NavTab className='main_nav-tab' />
    </div>
  )
}
