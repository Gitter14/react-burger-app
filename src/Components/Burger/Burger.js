import React from 'react';
import classses from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])]
            .map( (_,i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
            });
        });
    return(
        <div className={classses.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;