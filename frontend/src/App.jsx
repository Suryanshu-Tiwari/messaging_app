// import './index.css';
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/register.jsx";
import {Toaster} from "react-hot-toast";
import { useAuthContext } from './context/AuthContext.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const { authUser}= useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to="/login" />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login/>} />
        <Route path='/register' element={authUser ? <Navigate to='/' /> : <Register/>} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
