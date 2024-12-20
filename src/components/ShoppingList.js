import React from 'react';

const ShoppingList = ({ favorites }) => {
    const ingredients = favorites.flatMap((item) => item.recipe.ingredientLines);

    const uniqueIngredients = [...new Set(ingredients)];

    return (
        <div className="shopping-list">
            <h2>Shopping List</h2>
            {uniqueIngredients.length === 0 ? (
                <p>No ingredients to buy.</p>
            ) : (
                <ul>
                    {uniqueIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ShoppingList;
