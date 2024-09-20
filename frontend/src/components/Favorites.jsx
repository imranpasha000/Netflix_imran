import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await axios.get('http://localhost:3000/favorites', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFavorites(response.data);
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>Your Favorite Movies</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
