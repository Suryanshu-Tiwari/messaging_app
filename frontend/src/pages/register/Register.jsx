import GenderCheckbox from "./Gender"
const register = () => {
  return (
    <div className ="flex flex-xol items-center justify-center min-w-96 mx">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Register 
            <span className="text-blue-500"> ChatApp</span></h1>
            <form >
                <div>
                    <label className="flex flex-row p-2">
                        <span className="text-base label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="full name" className="w-full input input-bordered h-10"></input>


                    <label className="flex flex-row p-2 ">
                        <span className="text-base label-text"> Username</span>
                    </label>
                    <input type="text" placeholder="username" className="w-full input input-bordered h-10"></input>


                    <label className="flex flex-row p-2">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" 
                    className=" w-full input input-bordered h-10"></input>


                    <label className="flex flex-row p-2">
                        <span className="text-base label-text">Confirm Password</span>
                    </label>

                    <input type="password" placeholder="Re-enter password" className="w-full input input-bordered h-10"></input>

                    {/* <label className="flex flex-row p-2">
                        <span className="text-base label-text">Gender</span>
                    </label>


                    <input type="radio" name ="gender"placeholder="Re-enter password" className="radio-xs"></input>
                    <span className="text-lg mr-5"> Male</span>

                    <input type="radio" name ="gender"placeholder="Re-enter password" className="radio-xs hover:bg-orange-500">
                    </input>
                    <span className="text-lg "> Female</span> */}


                </div>
                <GenderCheckbox/>

                <a href="/Login" className="hover:underline hover:text-blue-600 mt-2 inline-block text-sm" >Already have an account?</a>
                <div>
                    <button className="btn bg-yellow-900 btn-block btn-sm mt-2 " >Register</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default register


//starter for for this file

// import GenderCheckbox from "./Gender"
// const register = () => {
//   return (
//     <div className ="flex flex-xol items-center justify-center min-w-96 mx">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">Register 
//             <span className="text-blue-500"> ChatApp</span></h1>
//             <form >
//                 <div>
//                     <label className="flex flex-row p-2">
//                         <span className="text-base label-text">Full Name</span>
//                     </label>
//                     <input type="text" placeholder="full name" className="w-full input input-bordered h-10"></input>


//                     <label className="flex flex-row p-2 ">
//                         <span className="text-base label-text"> Username</span>
//                     </label>
//                     <input type="text" placeholder="username" className="w-full input input-bordered h-10"></input>


//                     <label className="flex flex-row p-2">
//                         <span className="text-base label-text">Password</span>
//                     </label>
//                     <input type="password" placeholder="Password" 
//                     className=" w-full input input-bordered h-10"></input>


//                     <label className="flex flex-row p-2">
//                         <span className="text-base label-text">Confirm Password</span>
//                     </label>

//                     <input type="password" placeholder="Re-enter password" className="w-full input input-bordered h-10"></input>

//                     {/* <label className="flex flex-row p-2">
//                         <span className="text-base label-text">Gender</span>
//                     </label>


//                     <input type="radio" name ="gender"placeholder="Re-enter password" className="radio-xs"></input>
//                     <span className="text-lg mr-5"> Male</span>

//                     <input type="radio" name ="gender"placeholder="Re-enter password" className="radio-xs hover:bg-orange-500">
//                     </input>
//                     <span className="text-lg "> Female</span> */}


//                 </div>
//                 <GenderCheckbox/>

//                 <a href="/Login" className="hover:underline hover:text-blue-600 mt-2 inline-block text-sm" >Already have an account?</a>
//                 <div>
//                     <button className="btn bg-yellow-900 btn-block btn-sm mt-2 " >Register</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default register