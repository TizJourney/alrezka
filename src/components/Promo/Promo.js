import classnames from 'classnames';
import './Promo.css';

import React from 'react';

import { PROMO } from '../../utils/context';


export default function Promo(props) {
  return (
    <div className={classnames('promo', props.className)}>
      <p className="promo__text">{PROMO}</p>
      <iframe className="promo__video" title="Алрезка: видео" id="ytplayer" type="text/html" src="https://www.youtube.com/embed/DWyAGU1deB4" frameborder="0" allowfullscreen />
    </div>
  )
}
