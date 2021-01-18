import React from 'react';
import style from "./RecipeBasicInfo.module.scss";


const RecipeBasicInfo = (props) => {
    const { calories, totalTime,totalWeight } = props.recipe;
       return (
         <div className={style.basicinfo}>
           Nutrition
           <div className={style.infoBlock}>
             <div className={style.calories}>
               {Math.floor(calories / props.recipe.yield)}
             </div>
             <div className={style.text}>CALORIES / SERVING</div>

             <div className={style.yeilds}>{props.recipe.yield}</div>
             <div className={style.text}>servings</div>

             <div className={style.daily}>
               {Math.floor(calories / props.recipe.yield) / 20}%
             </div>
             <div className={style.text}>Daily value</div>

             <div className={style.time}>{Math.floor(totalTime)}</div>
             <div className={style.text}>Total time</div>

             <div className={style.weight}>{Math.floor(totalWeight)}</div>
             <div className={style.text}>Total weight</div>
           </div>
         </div>
       );
}

export default RecipeBasicInfo;
