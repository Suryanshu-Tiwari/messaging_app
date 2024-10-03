import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/register.jsx";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App;
