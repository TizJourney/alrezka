import classnames from 'classnames';
import './Promo.css';

import React from 'react';

import { PROMO, VIDEO_URL } from '../../utils/context';


export default function Promo(props) {
  return (
    <div className={classnames('promo', props.className)}>
      <p className="promo__text">{PROMO}</p>
      <div className="promo__video-wrapper">
        <iframe className="promo__video" title="Алрезка: видео" id="ytplayer" type="text/html" src={VIDEO_URL} frameBorder="0" allowFullScreen />
      </div>
    </div>
  )
}
