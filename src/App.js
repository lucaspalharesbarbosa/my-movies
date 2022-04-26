import { React, useEffect, useState } from 'react';
import { MoviesService } from './api/MoviesService';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';
import { MoviesContainer } from './styles/MoviesContainer';

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await MoviesService.getMovies();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header/>

      <MoviesContainer>
        <MoviesList movies={movies} />
      </MoviesContainer>
    </div>
  );
}

export default App;
