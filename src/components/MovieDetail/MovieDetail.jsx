import { useSelector } from "react-redux";
import { useHistory } from "react-router"


function MovieDetail() {
    
    // const history = useHistory();
    const detailSelector = useSelector (state => state.detail);



    return (
        <div>
            <img src={detailSelector.poster} alt={detailSelector.title}/>
        </div>
    )
}

// INSERT INTO "movies" ("title", "poster", "description")

export default MovieDetail; 