import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


function MovieDetail() {
    
    const history = useHistory();
    const detailSelector = useSelector (store => store.movieDetail);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({ type: 'GET_DETAIL', payload: params.id});
    // }, []);

    const listClick = () => {
        history.push('/');
    }


    return (
        <div>
            {detailSelector.map((movie) => {
                return (
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img src={movie.poster} alt={movie.title}/>
                        <ul>{movie.description}</ul>
                    </div>
                )
            })}    
            <button onClick={listClick}>Movie List</button>
        </div>
    )
}

// key={movie.id}

{/* <img src={detailSelector.poster} alt={detailSelector.title}/> */}

// {movies.map(movie => {
//     return (
//         <div onClick={() => handleClick(movie.id)} key={movie.id} >
//             <h3>{movie.title}</h3>
//             <img src={movie.poster} alt={movie.title}/>
//         </div>

// INSERT INTO "movies" ("title", "poster", "description")

export default MovieDetail; 