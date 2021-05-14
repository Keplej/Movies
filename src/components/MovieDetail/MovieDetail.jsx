import { useSelector } from "react-redux";
import { useHistory } from "react-router"


function MovieDetail() {
    
    const history = useHistory();
    const detailSelector = useSelector (state => state.movieDetail);

    const listClick = () => {
        history.push('/');
    }


    return (
        <div>
            {detailSelector.map((test) => {
                return (
                    <div>
                        <h3>{test.title}</h3>
                        <img src={test.poster} alt={test.title}/>
                    </div>
                )
            })}    
            <button onClick={listClick}>Movie List</button>
        </div>
    )
}

{/* <img src={detailSelector.poster} alt={detailSelector.title}/> */}

// {movies.map(movie => {
//     return (
//         <div onClick={() => handleClick(movie.id)} key={movie.id} >
//             <h3>{movie.title}</h3>
//             <img src={movie.poster} alt={movie.title}/>
//         </div>

// INSERT INTO "movies" ("title", "poster", "description")

export default MovieDetail; 