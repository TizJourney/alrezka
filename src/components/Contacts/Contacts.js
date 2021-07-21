import './Contacts.css';

import React from 'react';

import classnames from 'classnames';

import { CONTACTS } from '../../utils/context'

export default function Contacts(props) {
    return (
        <div className={classnames('contacts', props.className)}>
            <a className='contacts__item contacts__item_link' href={`tel:+${CONTACTS.telRaw}`}>Телефон: {CONTACTS.tel}</a>
            <a className='contacts__item contacts__item_link' href={`mailto:${CONTACTS.email}`}>E-mail: {CONTACTS.email}</a>
            <ul className='contacts__list'>
                <h2 className='contacts__list-item contacts__list-item_title'>Реквизиты организации:</h2>
                <li className='contacts__list-item'>ООО «Алрезка»</li>
                <li className='contacts__list-item'>Юридический адрес 194292 г. Санкт-Петербург, 2-й Верхний пер., д. 5, лит. И, пом. 4-Н</li>
                <li className='contacts__list-item'>ИНН 7802767981</li>
                <li className='contacts__list-item'>ОГРН 1117847456528</li>
            </ul>
        </div>
    )
}
