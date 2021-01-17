import React,{useState} from 'react';
import style from "./Ingredients.module.scss";


const Ingredients = (props) => {
    var [showIngredients,setIngredients] = useState(false);
    return (
      <span>
        <span className="list-title">
          <label>
            Ingredients
            <button
              onClick={(e) => {
                setIngredients(!showIngredients);
              }}
            >
              <i className="far fa-caret-square-down"></i>
            </button>
          </label>
        </span>
        <ul
          className={style.ingredients}
          style={{ height: `${showIngredients ? "auto" : "0"}` }}
        >
          {props.ingredientLines.map((ingredientLine, i) => (
            <li className={style.ingredient} key={i}>
              {ingredientLine}
            </li>
          ))}
        </ul>
      </span>
    );
}

export default Ingredients;
