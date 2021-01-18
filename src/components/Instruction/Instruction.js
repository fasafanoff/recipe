import React from 'react';
import style from './Instruction.module.scss';
const Instruction = ({ingredients}) => {
    return (
        <ul className={style.list}>
          {ingredients.map((ingredient, i) => (
            <li className={style.ingredient} key={i}>
              <div className="">{ingredient.text}</div>
                <img src={ingredient.image} alt={ingredient.text}/>
            </li>
          ))}
        </ul>
    );
}

export default Instruction;
