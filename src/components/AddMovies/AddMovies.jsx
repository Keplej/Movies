import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";


function AddMovies() {
    const history = useHistory();
    const dispatch = useDispatch();

    const mainPageClick = () => {
        history.push('/')
    }

    const genre = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({type: 'GET_GENRE'});
    }, [])


    return (
        <div>
            <h3>Movie Title</h3>
                <input />
            <h3>Image Url</h3>
                <input />
            <h3>Movie description</h3>
                <textarea>

                </textarea>
                <br />
            <h3>Movie genre</h3>
            <select>
                {genre.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    )
                })}
            </select>
            <br />
            <button>Save</button>
            <button onClick={mainPageClick}>Cancel</button>
        </div>
    )
}

export default AddMovies; 