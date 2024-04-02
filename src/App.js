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
import Artist from "./components/Artist/Artist";
import Track from "./components/Track/Track";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { loginUser, setLoading } from "./features/userSlice";
import PasswordReset from "./components/ForgetPassword/PasswordReset";
import SendMail from "./components/ForgetPassword/SendMail";
import "../src/i18n/i18n.ts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <Router>
      {isLoading ? null : (
        <>
          <div className="App">
            <div className="main-body">
              <Routes>
                <Route path="/" element={user ? <Home /> : <Register />} />
                <Route path="/library" element={<Library />} />
                <Route path="/search" element={<Search />} />
                <Route path="/playlist/:id" element={<Playlist />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/artist/:id" element={<Artist />} />
                <Route path="/track/:id" element={<Track />} />
                <Route path="/resetpassword" element={<PasswordReset />} />
                <Route path="/sendmail" element={<SendMail />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
