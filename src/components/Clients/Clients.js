import './Clients.css';

import React from 'react';

import classnames from 'classnames';

import { CLIENTS } from '../../utils/context';

function ClientItem(props) {
    return (
    <div className='client-item'>
        <h2 className='client-item__title'>{props.title}</h2>
        { props.descriptions &&
            <ul className='client-item__description-block'>
                {props.descriptions.map((item) => <li className='client-item__description-item'>{item}</li>)}
            </ul>
        }
    </div>
    )
}

export default function Clients(props) {
    return (
        <div className={classnames('clients', props.className)}>
            { Object.entries(CLIENTS).map(([key, value], i) => <ClientItem key={i} title={key} descriptions={value} />)}
        </div>
    )
}
