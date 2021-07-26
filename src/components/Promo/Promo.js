import classnames from 'classnames';
import './Promo.css';

import React from 'react';

import { PROMO } from '../../utils/context';


export default function Promo(props) {
  return (
    <div className={classnames('promo', props.className)}>
      <p className="promo__text">{PROMO}</p>
    </div>
  )
}
