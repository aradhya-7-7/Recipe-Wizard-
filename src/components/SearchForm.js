import React, { useState } from 'react';

const SearchForm = ({ setIngredients }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIngredients(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter ingredients (e.g., chicken, rice)"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
