import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route index element={<Home />} />
                    <Route
                        path="movie/:id"
                        element={<h1>movie details page</h1>}
                    />
                    <Route
                        path="movies/:type"
                        element={<h1>movies type page</h1>}
                    />
                    <Route path="/*" element={<h1>Error : 404 Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
