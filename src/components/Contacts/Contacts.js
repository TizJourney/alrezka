import './Contacts.css';

import React from 'react';

import classnames from 'classnames';

import { CONTACTS, FEEDBACK, ADDRESS } from '../../utils/context';
import yandexLogo from '../../images/yandex-logo.png';
import googleLogo from '../../images/google-logo.png';

export default function Contacts(props) {
    return (
        <div className={classnames('contacts', props.className)}>
            <a className='contacts__item contacts__item_link' href={`tel:+${CONTACTS.telRaw}`}>Телефон: {CONTACTS.tel}</a>
            <a className='contacts__item contacts__item_link' href={`mailto:${CONTACTS.email}`}>E-mail: {CONTACTS.email}</a>
            <h3 className='contacts__feedback-title'>Реквизиты организации:</h3>
            <ul className='contacts__list'>
                { ADDRESS.map((entry) => <li className='contacts__list-item'>{entry}</li>) }
            </ul>
            <h3 className='contacts__feedback-title'>Оставить отзыв:</h3>
            <div className='contacts__feedback-block'>
                <a href={FEEDBACK.yandex} className='contacts__feedback-link' target='_blank' rel='noreferrer'>
                    <img className='contacts__feedback-image' src={yandexLogo} alt='Отзыв на Яндексе' />
                </a>
                <a href={FEEDBACK.google} className='contacts__feedback-link' target='_blank' rel='noreferrer'>
                    <img className='contacts__feedback-image' src={googleLogo} alt='Отзыв на Google' />
                </a>
            </div>
        </div>
    )
}
