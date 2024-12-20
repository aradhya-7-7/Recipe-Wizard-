import React from 'react';
import './RecipeDetail.css';


const RecipeDetail = ({ recipe, onClose }) => {
    return (
        <div className="recipe-detail">
            <button className="close-button" onClick={onClose}>
                X
            </button>
            <h2>{recipe.label}</h2>
            <img src={recipe.image} alt={recipe.label} />
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p>{recipe.dishType ? recipe.dishType.join(', ') : 'No specific instructions available.'}</p>
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                View Full Recipe
            </a>
        </div>
    );
};

export default RecipeDetail;
