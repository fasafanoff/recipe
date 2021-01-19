import React from 'react';
import Range from '../Range/Range';



const diets = [
    {
      label: "Balanced",
      param: "balanced",
      define: "Protein/Fat/Carb values in 15/35/50 ratio",
    },
    // {
    //   label: "High-Fiber",
    //   param: "high-fiber",
    //   define: "More than 5g fiber per serving",
    // },
    {
      label: "High-Protein",
      param: "high-protein",
      define: "More than 50% of total calories from proteins",
    },
      {
        label: "Low-Carb",
        param: "low-carb",
        define: "Less than 20% of total calories from carbs",
      },
    {
      label: "Low-Fat",
      param: "low-fat",
      define: "Less than 15% of total calories from fat",
    },
    // {
    //   label: "Low-Sodium",
    //   param: "low-sodium",
    //   define: "Less than 140mg Na per serving",
    // },
];




const healths = [
  {
    label: "Alcohol-free",
    param: "alcohol-free",
    define: "No alcohol used or contained",
  },
  // {
  //   label: "Immune-Supportive",
  //   param: "immuno-supportive",
  //   define:
  //     "Recipes which fit a science-based approach to eating to strengthen the immune system",
  // },
  // {
  //   label: "Celery-free",
  //   param: "celery-free",
  //   define: "Does not contain celery or derivatives",
  // },
  // {
  //   label: "Crustcean-free",
  //   param: "crustacean-free",
  //   define:
  //     "Does not contain crustaceans (shrimp, lobster etc.) or derivatives",
  // },
  // {
  //   label: "Dairy",
  //   param: "dairy-free",
  //   define: "No dairy; no lactose",
  // },
  // {
  //   label: "Eggs",
  //   param: "egg-free",
  //   define: "No eggs or products containing eggs",
  // },
  // {
  //   label: "Fish",
  //   param: "fish-free",
  //   define: "No fish or fish derivatives",
  // },
  // {
  //   label: "FODMAP free",
  //   param: "fodmap-free",
  //   define: "Does not contain FODMAP foods",
  // },
  // {
  //   label: "Gluten",
  //   param: "gluten-free",
  //   define: "No ingredients containing gluten",
  // },
  // {
  //   label: "Keto",
  //   param: "keto-friendly",
  //   define: "Maximum 7 grams of net carbs per serving",
  // },
  // {
  //   label: "Kidney friendly",
  //   param: "kidney-friendly",
  //   define:
  //     "Per serving – phosphorus less than 250 mg AND potassium less than 500 mg AND sodium less than 500 mg",
  // },
  // {
  //   label: "Kosher",
  //   param: "kosher",
  //   define:
  //     "Contains only ingredients allowed by the kosher diet. However it does not guarantee kosher preparation of the ingredients themselves",
  // },
  // {
  //   label: "Low potassium",
  //   param: "low-potassium",
  //   define: "Less than 150mg per serving",
  // },
  // {
  //   label: "Lupine-free",
  //   param: "lupine-free",
  //   define: "Does not contain lupine or derivatives",
  // },
  // {
  //   label: "Mustard-free",
  //   param: "mustard-free",
  //   define: "Does not contain mustard or derivatives",
  // },
  // {
  //   label: "n/a",
  //   param: "low-fat-abs",
  //   define: "Less than 3g of fat per serving",
  // },
  // {
  //   label: "No oil added",
  //   param: "No-oil-added",
  //   define: "No oil added except to what is contained in the basic ingredients",
  // },
  // {
  //   label: "No-sugar",
  //   param: "low-sugar",
  //   define:
  //     "No simple sugars – glucose, dextrose, galactose, fructose, sucrose, lactose, maltose",
  // },
  // {
  //   label: "Paleo",
  //   param: "paleo",
  //   define:
  //     "Excludes what are perceived to be agricultural products; grains, legumes, dairy products, potatoes, refined salt, refined sugar, and processed oils",
  // },
  {
    label: "Peanuts",
    param: "peanut-free",
    define: "No peanuts or products containing peanuts",
  },
  // {
  //   label: "Pescatarian",
  //   param: "pecatarian",
  //   define:
  //     "Does not contain meat or meat based products, can contain dairy and fish",
  // },
  // {
  //   label: "Pork-free",
  //   param: "pork-free",
  //   define: "Does not contain pork or derivatives",
  // },
  // {
  //   label: "Red meat-free",
  //   param: "red-meat-free",
  //   define:
  //     "Does not contain beef, lamb, pork, duck, goose, game, horse, and other types of red meat or products containing red meat.",
  // },
  // {
  //   label: "Sesame-free",
  //   param: "sesame-free",
  //   define: "Does not contain sesame seed or derivatives",
  // },
  // {
  //   label: "Shellfish",
  //   param: "shellfish-free",
  //   define: "No shellfish or shellfish derivatives",
  // },
  // {
  //   label: "Soy",
  //   param: "soy-free",
  //   define: "No soy or products containing soy",
  // },
  {
    label: "Sugar-conscious",
    param: "sugar-conscious",
    define: "Less than 4g of sugar per serving",
  },
  {
    label: "Tree Nuts",
    param: "tree-nut-free",
    define: "No tree nuts or products containing tree nuts",
  },
  {
    label: "Vegan",
    param: "vegan",
    define: "No meat, poultry, fish, dairy, eggs or honey",
  },
  {
    label: "Vegetarian",
    param: "vegetarian",
    define: "No meat, poultry, or fish",
  },
  // {
  //   label: "Wheat-free",
  //   param: "wheat-free",
  //   define: "No wheat, can have gluten though",
  // },
];

const ExtraSearch = (props) => {
    return (
      <div>
        {diets.map((diet) => (
          <label key={diet.param}>
            {diet.label}
            <input
              type="checkbox"
              name={diet.param}
              id={diet.param}
              onChange={props.updateDiets}
            />
          </label>
        ))}
        {healths.map((health) => (
          <label key={health.param}>
            {health.label}
            <input
              type="checkbox"
              name={health.param}
              id={health.param}
              onChange={props.updateHealths}
            />
          </label>
        ))}
        <label>
          Number Of Ingredients
          <Range min="5" max="20" update={props.updateIngredients} />
        </label>
        <label>
          Number Of Calories
          <Range min="5" max="20" update={props.updateCalories} />
        </label>
        <label>
          Time
          <Range min="5" max="20" update={props.updateTime} />
        </label>
      </div>
    );
}

export default ExtraSearch;
