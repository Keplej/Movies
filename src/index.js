import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_DETAIL', getMovieDetail);
    yield takeEvery('GET_GENRE', getMovieGenre);
    yield takeEvery('POST_MOVIE', moviePost);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// Movie detail for MovieDetail page
function* getMovieDetail (action) {
    try{
        const response = yield axios.get(`/api/movie/${action.payload}`);
        yield put({type: 'SET_DETAIL', payload: response.data});
    } catch (error) {
        alert('ERROR IN DETAIL GET');
        console.log('Error in getMovieDetail', error);
    }
}

// Creating a function for genre

function* getMovieGenre () {
    try {
        const response = yield axios.get('/api/genre');
        yield put({type: 'SET_GENRES', payload: response.data})
    } catch (error) {
        alert('ERROR IN GET MOVIE GENRE')
        console.log('get movei genre', error);
    }
}

// Adding in a post the movies on the main page when done
// Add the rest for poster and description
function* moviePost (action) {
    try{
        yield axios.post('/api/movie', 
        {title: action.title, poster: action.poster, description: action.description, genre_id: action.genre_id}
        );
        yield put({type: 'FETCH_MOVIES'})
    } catch (error) {
        alert('CANNOT SAVE MOVIE')
        console.log('ERROR IN POSTING MOVIE', error);
    }
} 

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Movie detail for MovieDetail page
const movieDetail = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            return action.payload;
        default:
            return state;
    }
    
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetail,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
