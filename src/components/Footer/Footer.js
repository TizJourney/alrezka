import classnames from 'classnames';

import './Footer.css';

import React from 'react';

export default React.memo(function Footer(props) {
  return (
    <footer className={classnames('footer', props.className)}>
      <h3 className="footer__title">Подвал сайта для алрезки</h3>
      <div className="footer__text-container">
        <p className="footer__text">&copy; 2021</p>
        <nav className="footer__link-block">
          <a href='/' className='footer__link' target='_blank' rel='noreferrer'>какая-то ссылка</a>
          <a href='/' className='footer__link' target='_blank' rel='noreferrer'>какая-то ссылка</a>
          <a href='/' className='footer__link' target='_blank' rel='noreferrer'>какая-то ссылка</a>
        </nav>
      </div>
    </footer>
  )
})
