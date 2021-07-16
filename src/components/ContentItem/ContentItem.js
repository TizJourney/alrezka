import './ContentItem.css';

import React from 'react';

import classnames from 'classnames';

export default function ContentItem(props) {
    return (
        <div className={classnames('content-item', props.className, props.theme === 'white' && 'content-item_white')}>
            <h2 className='content-item__title'>{props.title}</h2>
            <p className='content-item__text'>{props.text}</p>
        </div>
    )
}
