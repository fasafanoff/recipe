import React from 'react';
import style from './Tags.module.scss';



/**
 * every parameter is an array that contains tags to display 
 * @param {Array} cautions 
 * @param {Array} healthLabes 
 */
const Tags = ({ cautions, healthLabels ,dietLabels}) => {
  return (
    <div className={style.TAGS}>
      TAGS:
      {cautions.map((caution) => (
        <a className={style.TAG} key={caution} href="/">
          #{caution}{" "}
        </a>
      ))}
      {healthLabels.map((label) => (
        <a className={style.TAG} key={label} href="/">
          #{label}{" "}
        </a>
      ))}
      {dietLabels.map((label) => (
        <a className={style.TAG} key={label} href="/">
          #{label}{" "}
        </a>
      ))}
    </div>
  );
};

export default Tags;
