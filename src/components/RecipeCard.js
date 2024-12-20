import React from 'react';

const RecipeCard = ({ recipe, onAddFavorite, onSelectRecipe }) => {
    return (
        <div className="recipe-card" onClick={() => onSelectRecipe(recipe)}>
            <img src={recipe.image} alt={recipe.label} />
            <h2>{recipe.label}</h2>
            <button onClick={(e) => { e.stopPropagation(); onAddFavorite({ recipe }); }}>
                Add to Favorites
            </button>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeCard;
