import React from "react";
import style from "./Recipe.module.scss";
import Tags from "../Tags/Tags";

const Recipe = (props) => {
  const { label, image,source ,url,cautions,healthLabels,dietLabels} = props.recipe;
  return (
    <div className={style.recipe}>
      <img
        className={style.img}
        src={image}
        alt={label}
        onClick={()=>props.onImageClick(props.recipe)}
      />
      <h1 className={style.title}>{label}</h1>
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
