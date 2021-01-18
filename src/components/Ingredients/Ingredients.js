import React from 'react';
import style from "./Ingredients.module.scss";


const Ingredients = ({ ingredientLines }) => {
  return (
    <span className={style.ingredients}>
      Ingredients
      <ul className={style.ingredientsList}>
        {ingredientLines.map((ingredientLine, i) => (
          <li className={style.ingredient} key={i}>
            {ingredientLine}
          </li>
        ))}
      </ul>
    </span>
  );
};

export default Ingredients;
