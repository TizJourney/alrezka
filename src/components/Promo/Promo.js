import classnames from 'classnames';
import './Promo.css';

import React from 'react';

import { PROMO, VIDEO_URL } from '../../utils/context';


export default function Promo(props) {
  return (
    <div className={classnames('promo', props.className)}>
      <p className="promo__text">{PROMO}</p>
      <iframe className="promo__video" title="Алрезка: видео" id="ytplayer" type="text/html" src={VIDEO_URL} frameborder="0" allowfullscreen />
    </div>
  )
}
