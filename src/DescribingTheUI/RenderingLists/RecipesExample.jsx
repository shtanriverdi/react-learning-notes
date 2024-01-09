import { recipes } from "./data.js";

function Recipe({ id, name, ingredients }) {
  const listItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <div>
      <h2>{name}</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          /**
           * Here, <Recipe {...recipe} key={recipe.id} /> is a syntax shortcut
           * saying “pass all properties of the recipe object as props to the Recipe component”
           */
          {...recipe}
        />
      ))}
    </div>
  );
}
