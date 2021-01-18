import "./App.css";
import  { APP_ID, APP_KEY } from "./info.json";

import React, { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import RecipesList from "./components/RecipesList/RecipesList";
import RecipePage from "./components/RecipePage/RecipePage";

const App = () => {


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [recipePageRender, setRecipePageRender] = useState(null);

  console.log(recipes);
  useEffect(() => {
    (async function () {
    const q = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      const res = await fetch(q);
      const data = await res.json();
      console.log(data);
      setRecipes(data.hits);
    })();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };  
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };


  

  return (
    <div className="App">
      <form action="POST" className="search-form" onSubmit={getSearch}>
        <Search search={search} onChange={updateSearch} />
      </form>

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
      {recipePageRender && <RecipePage recipe={recipePageRender} />}
    </div>
  );
};

export default App;
