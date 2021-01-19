import "./App.css";
import  { APP_ID, APP_KEY } from "./info.json";

import React, { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import RecipesList from "./components/RecipesList/RecipesList";
import RecipePage from "./components/RecipePage/RecipePage";
import NavBar from "./components/NavBar/NavBar";





const App = (props) => {

  var queryDefault = "",
    pageDefault = 0;
  if (props.match)
  {
    queryDefault = props.match.params.query||"";
    pageDefault = props.match.params.page || 0;
    if (pageDefault < 0)
      pageDefault = 0;
  }


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(queryDefault);
  const [query, setQuery] = useState(queryDefault);
  const [pages, setPages] = useState(0);
  const [recipePageRender, setRecipePageRender] = useState(null);
  const [healths, setHealths] = useState([]);
  const [diets, setDiets] = useState([]);
  const [queryString, setQueryString] = useState("");
  const [time, setTime] = useState({ from: 0, to: 3600 });
  const [calories, setCalories] = useState({ from: 0, to: 4000 });
  const [ingredients, setIngredients] = useState({ from: 0, to: 20 });

  
  useEffect(() => {
    (async function () {
      const q = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${pageDefault * 10}&to=${pageDefault*10 + 10
        }&${queryString}`;
      const res = await fetch(q);
      const data = await res.json();
      setPages(Math.floor(data.count / 10));


      console.log("data",data); 
      setRecipes(data.hits);
    })();
  }, [query, pageDefault,queryString]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };  
  const getSearch = (e) => {

    var string = "";

    healths.forEach((el,index,arr) => {
      string += `health=${el}&`
    });

    diets.forEach((el,index,arr) => {
      string += `diet=${el}`
    });

    string += `ingr=${ingredients.to}&`;
    string += `calories=${calories.from}-${calories.to}&`;
    string += `time=${time.from}-${time.to}&`;
    




    console.log(string);
    setQueryString(string);
    setQuery(search);
  };

  const updateHealths = (e) => {
    const target = e.target;
    if (target.checked) setHealths( healths.concat([target.name]) );
    else                setHealths(healths.filter((el) => el !== target.name));
  }


  const updateDiets = (e) => {
    const target = e.target;
    if (target.checked) setDiets(diets.concat([target.name]));
    else                setDiets(diets.filter((el) => el !== target.name));
  };


  return (
    <div className="App">
      <Search
        search={search}
        onChange={updateSearch}
        getSearch={getSearch}
        updateHealths={updateHealths}
        updateDiets={updateDiets}
        updateCalories={setCalories}
        updateTime={setTime}
        updateIngredients={setIngredients}
      />
      <NavBar page={pageDefault} pages={pages} search={search} />
      <RecipesList
        recipes={recipes}
        onImageClick={(r) => {
          setRecipePageRender(r);
        }}
      />

      {recipePageRender && (
        <button className="closebtn" onClick={() => setRecipePageRender(null)}>
          <i className="fas fa-times-circle cross"></i>
        </button>
      )}
      <NavBar page={pageDefault} pages={pages} search={search} />
      {recipePageRender && <RecipePage recipe={recipePageRender} />}
    </div>
  );
};

export default App;


