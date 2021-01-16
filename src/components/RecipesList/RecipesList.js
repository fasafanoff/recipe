import React from 'react';
import style from "./RecipesList.module.scss"
import Recipe from "../Recipe/Recipe.js";

const RecipesList = (props) => {
    return (
      <div className={style["recipes-list"]}>
        {props.recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe.recipe} />
        ))}
      </div>
    );
}

export default RecipesList;
