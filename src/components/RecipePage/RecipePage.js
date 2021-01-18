import React from 'react';
import Ingredients from "../Ingredients/Ingredients";
import Instruction from "../Instruction/Instruction";
import RecipeBasicInfo from "../RecipeBasicInfo/RecipeBasicInfo";

import style from "./RecipePage.module.scss";
const RecipePage = (props) => {
  const { image, label, ingredientLines, ingredients } = props.recipe;
  return (
    <div className={style.page}>
      <img src={image} alt={label} className={style.img}/>
      <div className={style.title}>{label}</div>
      <RecipeBasicInfo recipe={ props.recipe}/>
      <Ingredients ingredientLines={ingredientLines} />
      <Instruction ingredients={ingredients} />
    </div>
  );
};

export default RecipePage;