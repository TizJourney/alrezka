import './Promo.css';

import React from 'react';

// import NavTab from '../NavTab/NavTab';
import classnames from 'classnames';

export default function Promo(props) {
  return (
    <div className={classnames('promo', props.className)}>
      <h1 className="promo__title">Компания «Алрезка» предлагает своим клиентам услугу алмазной резки проемов в стенах из бетона и железобетона. Это — современный способ резки, имеющий большие преимущества перед перфоратором и другими подобными инструментами. </h1>
      {/* <NavTab className="promo__nav-tab"/> */}
    </div>
  )
}
