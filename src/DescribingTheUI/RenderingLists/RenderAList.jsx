const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];


export default function RecipeList() {
  /**
   * Use a key right after each map or a listing line!
   * Basically we use key for each list created/ing anywhere
   */
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => {
        return ( // We return a list here so we use key
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map((ingredient) => {
                // We return a list here as well so we use key again
                return <li key={ingredient.name}>{ingredient}</li>
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
