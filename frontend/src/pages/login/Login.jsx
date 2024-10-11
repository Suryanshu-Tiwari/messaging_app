import { useState } from "react";
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin.js";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Login 
            <span className="text-blue-500"> ChatApp</span></h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="flex flex-row p-2 ">
                        <span className="text-base label-text">Username</span> 
                    </label>
                    <input 
                        type="text" 
                        placeholder="username" 
                        className="w-full input input-bordered h-10"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}>
                    </input>

                    <label className="flex flex-row p-2">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="password" 
                        className="w-full input input-bordered h-10" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>

                <Link to="/Register" className="hover:underline hover:text-blue-600 mt-2 inline-block text-sm" >
                    Don't have an account?
                </Link>
                <div>
                    <button className="btn bg-yellow-900 btn-block btn-sm mt-2 " 
                    disabled={loading}>
                    {loading ? <span className="loading loading-spinner"></span> : "Login"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login


// starter code for this file

// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//           <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//               <h1 className="text-3xl font-semibold text-center text-gray-300">Login 
//               <span className="text-blue-500"> ChatApp</span></h1>
//               <form >
//                   <div>
//                       <label className="flex flex-row p-2 ">
//                           <span ></span> Username
//                       </label>
//                       <input type="text" placeholder="username" className="w-full input input-bordered h-10"></input>
//                       <label className="flex flex-row p-2">
//                           <span className="text-base label-text">Password</span>
//                       </label>
//                       <input type="text" placeholder="full name" className="w-full input input-bordered h-10"></input>
//                   </div>
//                   <a href="#" className="hover:underline hover:text-blue-600 mt-2 inline-block text-sm" >Don't have an account?</a>
//                   <div>
//                       <button className="btn bg-yellow-900 btn-block btn-sm mt-2 " >Login</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }
  
//   export default Login