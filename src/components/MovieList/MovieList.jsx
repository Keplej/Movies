import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    // Get information from the index.js
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // This gets the information so we can see it on the details page.
    const handleClick = (id) => {
        history.push('/detail');
        dispatch({type: 'GET_DETAIL', payload: id});
    }
    // This brings us back to the main page
    const newMovieClick = () => {
        history.push('/add');
    }

    return (
        <main className="movielist">
            {/* <h1>Movie List</h1> */}
            <button className="moviebtn" onClick={newMovieClick}>Add New Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => handleClick(movie.id)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;