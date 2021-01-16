import React from "react";
import style from "./Recipe.module.scss";
import Ingredients from "../Ingredients/Ingredients";


const Recipe = (props) => {
  const { label, calories, image,source ,url,ingredientLines} = props.recipe;
    // console.log(props);
    console.log(style);
    console.log("Recipe.scss")
  return (
    <div className={style.recipe}>
      <img className={style.img} src={image} alt={label} />
      <h1 className={style.title}>{label}</h1>
      <p className={style.calories}>
        Overall calories:{Math.floor(calories)}
        <i class="fas fa-weight-hanging"></i>
      </p>
      <a href={url} className={style.source} target="_blank">
        {source} <i class="fas fa-link"></i>
      </a>
      <Ingredients ingredientLines={ingredientLines} />
    </div>
  );
};

export default Recipe;
