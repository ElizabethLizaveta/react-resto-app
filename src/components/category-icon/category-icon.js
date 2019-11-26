import React from 'react';

const CategoryIcon = ({category}) => {
   
    const setIconUrl = () => {
        switch (category) {
          case 'pizza':
            return 'images/pizza.svg'
          case 'meat':
            return 'images/meat.svg'
          case 'salads':
            return 'images/salad.svg'
          default:
            return 'images/restaurant.svg'
        }
    }

    const iconUrl = setIconUrl();

    return <img className="menu__category-icon" src={iconUrl} alt={category}></img>
}

export default CategoryIcon;