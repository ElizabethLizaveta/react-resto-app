import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from './shopping-cart-solid.svg';

const Switch = ({total}) => {
    return (
        <>
            <Link className="header__link" to="/">Menu</Link>
            <Link className="header__link" to="/cart/">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </>
    )
};

export default Switch;