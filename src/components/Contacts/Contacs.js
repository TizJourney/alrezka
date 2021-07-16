import './Contacts.css';

import React from 'react';

import classnames from 'classnames';

export default function Promo(props) {
    return (
        <div className={classnames('contacts', props.className)}>
            <p className='contacts__item'>E-mail: <a className='contacts__link' href='mailto:zakaz@alrezka.ru'>zakaz@alrezka.ru</a></p>
            <p className='contacts__item'>Адрес: 117452, г. Москва, Балаклавский проспект, 28Б, стр.1</p>
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
