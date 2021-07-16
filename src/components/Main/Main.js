
import classnames from 'classnames';

import './Main.css';

import React from 'react';



import Promo from '../Promo/Promo';
// import AboutProject from '../AboutProject/AboutProject';
// import Tech from '../Tech/Tech';
// import AboutMe from '../AboutMe/AboutMe';
// import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function MainPage(props) {
  return (
    <div  id={props.id} className={classnames('main-content__page', props.className)}>
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
      <div className="main main_promo">
        <MainPage className='main_content main-page main-page_promo'>
          <Header className='main-page__item main-page__item_header' />
          <Promo className='main-page__item main-page__item_promo'/>
        </MainPage>
      </div>

      {/* <MainPage id='project'>
        <MainTitle  title='О проекте' />
        <AboutProject className='main-content__about-project' />
      </MainPage>

      <MainPage id='tech' className='main-content__page_grey'>
        <MainTitle title='Технологии' className='main-content__title_tech' />
        <Tech className='main-content__tech' />
      </MainPage>

      <MainPage id='me' >
        <MainTitle title='Студент' />
        <AboutMe className='main-content__student-content' />
        <Portfolio className='main-content__portfolio' />
      </MainPage> */}

      <Footer className='main-content__page main-content__footer' />
    </div>
  )
}
