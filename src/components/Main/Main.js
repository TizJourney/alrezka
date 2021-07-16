
import classnames from 'classnames';

import './Main.css';

import React from 'react';

import Promo from '../Promo/Promo';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Contacts from '../Contacts/Contacts';
import ContentItem from '../ContentItem/ContentItem';


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

      <div className='main main_service' id='service'>
        <MainPage className='main_content main-page main-page_service'>
          <MainTitle className='main-page__item main-page__item_service main-content__title_black' title='Услуги' />
          <ContentItem title='Алмазное бурение' text='Одним из направлений деятельности компании «Алрезка» является сверление отверстий с помощью современных технологий. Это позволяет получить отверстия ровной формы различного диаметра в строительных конструкциях из железобетонных плит, кирпича, камня и прочих материалов.' />
          <ContentItem title='Cоздание проемов в стенах' text='Компания «Алрезка» оказывает услуги по распилу конструкций из бетона, кирпича, камня любой толщины. Работы по алмазной резке перекрытий выполняются с применением современного оборудования, позволяющего свести время исполнения к минимуму и добиться высочайшей точности.' />
          <ContentItem title='Демонтаж несущих конструкций и стен' text='Компания «Алрезка» оказывает услуги по демонтажу железобетона. Для этого используются такие профессиональные алмазные инструменты, как швонарезчики, стенорезные установки, канатные машины, ручной отрезной инструмент и др. Работы по демонтажу перекрытий и других конструкций из железобетона проводятся бригадой опытных специалистов.' />
        </MainPage>
      </div>


      <div className='main main_equipment' id='equipment'>
        <MainPage className='main_content main-page main-page_equipment'>
          <MainTitle className='main-page__item main-page__item_equipment' title='Оборудование'/>
          <ContentItem theme='white' title='Канатная алмазная резка' text='Технология канатной алмазной резки – уникальный способ демонтажа бетонных конструкций, с помощью которого можно вырезать проем в стене или разобрать межэтажные перекрытия.' />
          <ContentItem theme='white' title='Cтенорезная машина' text='Опытными специалистами будет осуществлена резка стенорезной машиной – одним из лучших видов оборудования, предназначенного для работы с кирпичом, железобетоном, натуральным камнем и другими строительными материалами повышенной прочности. В процессе эксплуатации таких устройств не возникает много пыли, края разрезаемого материала получаются настолько ровными, что им обычно не требуется дальнейшая обработка.' />
        </MainPage>
      </div>

      <div className='main main_contacts' id='contacts'>
        <MainPage className='main_content main-page main-page_contacts'>
          <MainTitle className='main-page__item main-page__item_contacts' title='Контакты' />
          <Contacts />
        </MainPage>
      </div>
      <NavTab className='main_nav-tab' />
    </div>
  )
}
