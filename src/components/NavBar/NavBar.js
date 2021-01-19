import React from 'react';
import {Link} from "react-router-dom";
import style from "./NavBar.module.scss";

const NavBar = ({ page, pages,search }) => {
    

    var els = [];

    els.push(
      <Link
        className={style.link}
        key={"First"}
        to={{ pathname: `/${search}/${0}` }}
      >
        {"<|"}
      </Link>
    );

    els.push(
      <Link
        className={style.link}
        key={"Prev"}
        to={{ pathname: `/${search}/${page < 1 ?0:page - 1}` }}
      >
        {"<"}
      </Link>
    );



    for (let i = 0; i < pages && i < 10; ++i) {
        if (i === Number.parseInt(page)) {
            els.push(
              <Link
                className={style.currentLink + " " + style.link}
                key={i}
                to={{ pathname: `/${search}/${i}` }}
              >
                {i + 1}
              </Link>
            );
        }
        else
        {
            els.push(
                <Link
                className={style.link}
                key={i}
                to={{ pathname: `/${search}/${i}` }}
                >
                {i + 1}
              </Link>
            );
        }
    }




    els.push(
      <Link
        className={style.link}
        key={"Next"}
        to={{ pathname: `/${search}/${page>8 ? 9 : Number.parseInt(page) + 1}` }}
      >
        {">"}
      </Link>
    );
     els.push(
       <Link
         className={style.link}
         key={"Last"}
         to={{ pathname: `/${search}/${pages<10?pages:9}` }}
       >
         {"|>"}
       </Link>
     );

     


    return (
        <div className={style.wrapper}>
            {els}
        </div>
    );
}

export default NavBar;
