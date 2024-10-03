import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-slate-800 text-white'>
            <FaSearch className="w-6 h-6 outline-none"></FaSearch>
        </button>
    </form>
  )
}

export default SearchBar;


// starter code for this file

// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// const SearchBar = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type='text' placeholder='Search...' className='input input-bordered rounded-full'/>
//         <button type='submit' className='btn btn-circle bg-slate-800 text-white'>
//             <FaSearch className="w-6 h-6 outline-none"></FaSearch>
//         </button>
//     </form>
//   )
// }

// export default SearchBar;