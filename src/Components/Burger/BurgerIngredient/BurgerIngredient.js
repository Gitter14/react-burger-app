import React from 'react';
import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>
        break;
        case('bread-top'):
            ingredient = <div>
                <div className={classes.BreadTop}></div>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
                <div className={classes.Seeds3}></div>
            </div>
        break;
        case('meat'):
            ingredient = <div className={classes.Meat}></div>
        break;
        case('bacon'):
            ingredient = <div className={classes.Bacon}></div>
        break;
        case('salad'):
            ingredient = <div className={classes.Salad}></div>
        break;
        case('cheese'):
            ingredient = <div className={classes.Cheese}></div>
        break;
        default:
            ingredient = <p>Incorrect burger ingredient value</p>
    }

    return ingredient;
};

export default burgerIngredient;