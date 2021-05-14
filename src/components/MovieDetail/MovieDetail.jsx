import { useSelector } from "react-redux";
import { useHistory } from "react-router"


function MovieDetail() {
    
    const history = useHistory();
    const detailSelector = useSelector (state => state.detail);

    const listClick = () => {
        history.push('/');
    }


    return (
        <div>
            {/* <h3>{detailSelector.title}</h3> */}
            <img src={detailSelector.poster} alt={detailSelector.title}/>
            <button onClick={listClick}>Movie List</button>
        </div>
    )
}

// INSERT INTO "movies" ("title", "poster", "description")

export default MovieDetail; 