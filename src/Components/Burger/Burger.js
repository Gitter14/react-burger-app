import React from 'react';
import classses from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return(
        <div className={classses.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;