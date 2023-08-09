import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import MovieList from "./components/movieList/MovieList";
import MovieDetail from "./pages/movieDetail/MovieDetail";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="movie/:id" element={<MovieDetail />} />
                    <Route path="movies/:type" element={<MovieList />} />
                    <Route path="/*" element={<h1>Error : 404 Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
