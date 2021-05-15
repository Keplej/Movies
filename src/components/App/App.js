import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail';
import AddMovies from '../AddMovies/AddMovies';
// import Header from './Header';


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      {/* <Header /> */}
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/detail" exact>
          <MovieDetail />
        </Route>
        <Route path="/add" exact>
          <AddMovies />
        </Route>
      </Router>
    </div>
  );
}


export default App;
