import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";


function AddMovies() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [titleMovie, setTitleMovie] = useState('');
    const [urlMovie, setUrlMovie] = useState('');
    const [descriptionMovie, setDescription] = useState('');
    const [genreid, setGenreid] = useState(1);

    // This gets us back to the main page
    const mainPageClick = () => {
        history.push('/')
    }

    // This grabs the things in the data base for genre
    const genre = useSelector(store => store.genres);

    // This grabs the functions setup in the index.js
    useEffect(() => {
        dispatch({type: 'GET_GENRE'});
    }, [])

    // this grabs and posts all the information
    const handleSubmit = (event) => {
        event.preventDefault;
        dispatch({type: 'POST_MOVIE', title: titleMovie, poster: urlMovie, description: descriptionMovie, genre_id: genreid });
        history.push('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Movie Title</h3>
                <input type="text" placeholder="Movie Title Here" 
                value={titleMovie}
                onChange={(event) => setTitleMovie(event.target.value)}/>
            <h3>Image Url</h3>
                <input
                type="text" placeholder="Image URL here"
                value={urlMovie} 
                onChange={(event) => setUrlMovie(event.target.value)}
                />
            <h3>Movie description</h3>
                <textarea
                type="text" 
                value={descriptionMovie}
                onChange={(event) => setDescription(event.target.value)}
                ></textarea>
                <br />
            <h3>Movie genre</h3>
            <select placeholder="Select Genre"
            // value={titleMovie}
                onChange={(event) => setGenreid(event.target.value)}
            >
                {genre.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    )
                })}
            </select>
            <br />
            <button type="submit">Save</button>
            <button onClick={mainPageClick}>Cancel</button>
        </form>
    )
}

export default AddMovies; 