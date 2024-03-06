import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Library from "./components/Library/Library";
import Search from "./components/Search/Search";
import Playlist from "./components/Playlist/Playlist";
import Favorites from "./components/Favorites/Favorites";
import Register from "./components/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
