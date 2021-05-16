import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './MovieDetail.css'



function MovieDetail() {
    
    const history = useHistory();
    const detailSelector = useSelector (store => store.movieDetail);
    // const dispatch = useDispatch();

    // This brings us back to the main page
    const listClick = () => {
        history.push('/');
    }


    return (
        <div>
            {detailSelector.map((movie) => {
                return (
                    <div className="moviedetail" key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img src={movie.poster} alt={movie.title}/>
                        <p>{movie.description}</p>
                    </div>
                )
            })}    
            <button onClick={listClick}>Movie List</button>
        </div>
    )
}


export default MovieDetail; 