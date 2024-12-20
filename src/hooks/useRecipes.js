import { useState, useEffect } from 'react';
import axios from 'axios';

const useRecipes = (ingredients) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (ingredients) {
            setLoading(true);
            axios
                .get(`https://api.edamam.com/search?q=${ingredients}&app_id=96ace357&app_key=b25722d7ab7d80e2090dc39c5fe6ed96	`)
                .then((response) => {
                    setRecipes(response.data.hits);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err);
                    setLoading(false);
                });
        }
    }, [ingredients]);

    return { recipes, loading, error };
};

export default useRecipes;
