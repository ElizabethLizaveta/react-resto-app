import React from 'react';
import Switch from '../switch';
import './app-header.scss';
import {connect} from 'react-redux';

const AppHeader = ({ total }) => {
    return (
        <header className="header">
           <Switch total={total}/>
        </header>
    )
};

const mapStateToProps = ({total}) => {
    return {
       total
    }
};

export default connect(mapStateToProps)(AppHeader);
 