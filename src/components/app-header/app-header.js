import React from 'react';
import Switch from '../switch';
import './app-header.scss';

const AppHeader = ({ total }) => {
    return (
        <header className="header">
           <Switch total={total}/>
        </header>
    )
};

export default AppHeader;