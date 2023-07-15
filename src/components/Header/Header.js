import './Header.css';

import classnames from 'classnames';

import whatsappIcon from '../../images/whatsapp-icon-logo.svg';

import { CONTACTS } from '../../utils/context'

export default function Header(props) {
  return (
    <header className={classnames(props.className, 'header')}>
      <a className='header__link' href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
      <nav className='header__links-block header__contacts'>
        <a className='header__link' href={`tel:+${CONTACTS.telRaw}`} >{CONTACTS.tel}</a>
      </nav>
    </header>
  )
}
