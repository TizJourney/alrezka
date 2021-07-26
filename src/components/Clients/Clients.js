import './Clients.css';

import React from 'react';

import classnames from 'classnames';

import { CLIENTS } from '../../utils/context';

function ClientItem(props) {
    return (
        <div className='client-item__item'>
            <h3 className='client-item__title'>{props.title}</h3>
            { props.descriptions &&
                <ul className='client-item__description-block'>
                    {props.descriptions.map((item) => <li className='client-item__description-item'>{item}</li>)}
                </ul>
            }
        )
        </div>
    )
}

function ClientBlock(props) {
    return (
    <li className='client-item'>
        { Object.entries(props.data).map(([title, descriptions], i) => <ClientItem key={i} title={title} descriptions={descriptions} />)}
    </li>
    )
}

export default function Clients(props) {
    return (
        <div className={classnames('clients', props.className)}>
            <ul className='clients__grid-container'>
                { CLIENTS.map((clientBlock, i) => <ClientBlock key={i} data={clientBlock} />)}
            </ul>
        </div>
    )
}
