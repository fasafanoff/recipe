import React from "react";
import style from "./Recipe.module.scss";
import Ingredients from "../Ingredients/Ingredients";
import Tags from "../Tags/Tags";

const Recipe = (props) => {
  const { label, calories, image,source ,url,ingredientLines,cautions,healthLabels,dietLabels} = props.recipe;
    // console.log(props);
    console.log(style);
    console.log("Recipe.scss")
  return (
    <div className={style.recipe}>
      <img className={style.img} src={image} alt={label} />
      <h1 className={style.title}>{label}</h1>
      {/* <p className={style.calories}>
        Overall calories:{Math.floor(calories)}
        <i class="fas fa-weight-hanging"></i>
      </p> */}
      {/* <Ingredients ingredientLines={ingredientLines} /> */}
      <Tags
        cautions={cautions}
        healthLabels={healthLabels}
        dietLabels={dietLabels}
      />
      <a href={url} rel="noreferrer" className={style.source} target="_blank">
        {source} <i className="fas fa-link"></i>
      </a>
    </div>
  );
};

export default Recipe;
