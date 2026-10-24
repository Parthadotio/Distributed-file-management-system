import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "../screens/Home.jsx";
import Login from "../screens/Login.jsx";
import Register from "../screens/Register.jsx";
import UserData from "../screens/userData.jsx";
import { UserProvider } from "../context/user.context.jsx";


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/register" element={ <Register/> }/>
                <Route path="/user-data" element= { <UserProvider> <UserData/> </UserProvider> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;