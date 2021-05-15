import { useHistory } from "react-router";


function AddMovies() {
    const history = useHistory();

    const mainPageClick = () => {
        history.push('/')
    }

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
            <select></select>
            <br />
            <button>Save</button>
            <button onClick={mainPageClick}>Cancel</button>
        </div>
    )
}

export default AddMovies; 