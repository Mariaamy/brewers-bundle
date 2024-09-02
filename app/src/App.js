import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import Nopagefound from "./pages/Nopagefound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import VisualLib from "./components/VisualLib";
import Fermenting from "./pages/Fermenting";
import Bottled from "./pages/Bottled";


function App() {
  const user = false;
  return (    
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
        <Route path="*" element={<Nopagefound/>} />
        <Route path="visuallib" element={<VisualLib/>} />
        <Route path="/" element={<Home/>}/>
        <Route 
          path="/login" 
          element={user ? <Navigate to="/" /> : <Login/>}/>
        <Route 
          path="/register" 
          element={user ? <Navigate to="/" /> : <Register/>}/>
        <Route
          path="/feed"
          element={<Feed/>}/>
        <Route
          path="/profile"
          element={<Profile/>}/>
        <Route 
          path="/profile/fermenting"
          element={<Fermenting/>}/>
        {/* <Route 
          path="/profile/fermenting/:id"/> */}
        <Route 
          path="/profile/bottled"
          element={<Bottled/>}/>
        {/* <Route 
          path="/profile/bottled/:id"/> */}
        <Route
          path="/favorites"
          element={<Favorites/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
