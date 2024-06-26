import './Header.css';

import classnames from 'classnames';

import { CONTACTS } from '../../utils/context'

export default function Header(props) {
  return (
    <header className={classnames(props.className, 'header')}>
      <a className='header__link' href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
      <nav className='header__links-block header__contacts'>
        <a className='header__link' href={`tel:+${CONTACTS.telRaw}`} >{CONTACTS.tel}</a>
        <a className='header__link' href={`tel:+${CONTACTS.telSecondRaw}`} >{CONTACTS.telSecond}</a>
      </nav>
    </header>
  )
}
