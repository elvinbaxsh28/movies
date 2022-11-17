import './App.css';
import Header  from './components/header/Header';
import Home from './pages/home/home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" ></Route>
                <Route path="movies/:type" ></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;


// element={<Home />}
// element={<Movie />}
// element={<MovieList />}