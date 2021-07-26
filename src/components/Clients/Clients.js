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
        </div>
    )
}

function ClientBlock(props) {
    return (
        <div className='client-item__content-container'>
            { props.icon && <div className={classnames('clients__icon', props.icon)}/>}
            <li className='client-item'>
                { Object.entries(props.data).map(([title, descriptions], i) => <ClientItem key={i} title={title} descriptions={descriptions} />)}
            </li>
        </div>            
    )
}

export default function Clients(props) {
    const KEY_TO_ICON = {
        0: 'client-item__icon_factory',
        1: 'client-item__icon_mall',
        2: 'client-item__icon_builder',
        3: 'client-item__icon_other',
    }

    return (
        <ul className={classnames('clients', props.className)}>
            { CLIENTS.map((clientBlock, i) => <ClientBlock icon={KEY_TO_ICON[i]} key={i} data={clientBlock} />)}
        </ul>
    )
}
