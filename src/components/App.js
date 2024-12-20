import React, { useState } from 'react';
import SearchForm from './SearchForm';
import RecipeCard from './RecipeCard';
import Favorites from './Favorites';
import ShoppingList from './ShoppingList';
import RecipeDetail from './RecipeDetail'; // Import the RecipeDetail component
import useRecipes from '../hooks/useRecipes';
import '../styles/style.css';

const App = () => {
    const [ingredients, setIngredients] = useState('');
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null); // New state for selected recipe
    const { recipes, loading, error } = useRecipes(ingredients);

    const handleAddFavorite = (recipe) => {
        setFavoriteRecipes([...favoriteRecipes, recipe]);
    };

    const handleRemoveFavorite = (recipe) => {
        setFavoriteRecipes(favoriteRecipes.filter((item) => item.recipe.uri !== recipe.recipe.uri));
    };

    const handleSelectRecipe = (recipe) => {
        setSelectedRecipe(recipe);
    };

    const handleCloseDetail = () => {
        setSelectedRecipe(null);
    };

    return (
        <div className="app">
            <h1>Recipe Wizard🪄</h1>
            <Favorites favorites={favoriteRecipes} onRemoveFavorite={handleRemoveFavorite} />
            <ShoppingList favorites={favoriteRecipes} />
            <SearchForm setIngredients={setIngredients} />
            {loading && <p>Loading recipes...</p>}
            {error && <p>Error fetching recipes: {error.message}</p>}
            <div className="recipes">
                {recipes.map(({ recipe }, index) => (
                    <RecipeCard 
                        key={index} 
                        recipe={recipe} 
                        onAddFavorite={handleAddFavorite} 
                        onSelectRecipe={handleSelectRecipe} // Pass the select handler
                    />
                ))}
            </div>
            

            {/* Conditionally render RecipeDetail if a recipe is selected */}
            {selectedRecipe && (
                <RecipeDetail recipe={selectedRecipe} onClose={handleCloseDetail} />
            )}
        </div>
    );
};

export default App;
