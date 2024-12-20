import React from 'react';

const Favorites = ({ favorites, onRemoveFavorite }) => {
    return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            {favorites.length === 0 ? (
                <p>No favorite recipes added yet.</p>
            ) : (
                <div className="favorites-list">
                    {favorites.map((item, index) => (
                        <div key={index} className="favorite-item">
                            <h3>{item.recipe.label}</h3>
                            <button onClick={() => onRemoveFavorite(item)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
