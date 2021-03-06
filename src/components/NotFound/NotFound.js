import './NotFound.css';

import React from 'react';
import { useHistory } from 'react-router-dom';

export default function NotFound(props) {
  const history = useHistory();

  return (
    <div className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__text'>Страница не найдена</p>
      <button className="not-found__back-button" onClick={() => history.goBack()} >Назад</button>
    </div>
  )
}
