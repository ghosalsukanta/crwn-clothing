import React from 'react';
import './menu-item.scss';


const MenuItem = ({title}) =>
(
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtilte'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;