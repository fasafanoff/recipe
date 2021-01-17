import React, { useRef } from "react";
import style from "./Search.module.scss";

const Search = (props) => {
  const searchBar = useRef(null);
  const Help = useRef(null);

  const onFocus = (e) => {
    searchBar.current.classList.add(style.searchBar_active);
  };
  const onBlur = (e) => {
    searchBar.current.classList.remove(style.searchBar_active);
  };

  const HelpButtonShow = (e) => {
    const rect = e.target.getBoundingClientRect();
    Help.current.style["top"] = `${rect.top + 30}px`;
    Help.current.style["left"] = `${rect.left - 30}px`;
    Help.current.style["opacity"] = `1`;
  };
  const HelpButtonHide = (e) => {
    Help.current.style["opacity"] = `0`;
  };

  return (
    <div className={style.navbar}>
      <div className={style.searchBar} ref={searchBar}>
        <input
          className={style.input}
          type="text"
          name=""
          id=""
          value={props.search}
          onChange={props.onChange}
          placeholder="Search recipes..."
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <button
          className={style.button}
          type="submit"
          aria-label="Search Button"
          onMouseEnter={HelpButtonShow}
          onMouseLeave={HelpButtonHide}
          onFocus={HelpButtonShow}
          onBlur={HelpButtonHide}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className={style.searchHelp} ref={Help}>
        Search Button
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
