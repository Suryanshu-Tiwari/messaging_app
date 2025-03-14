import React from 'react'
import { FaSearch } from "react-icons/fa";
import {useState} from "react"
import useConversation from '../../zustand/useConversation';
import useGetConversations from "../../hooks/useGetConversations"
import toast from 'react-hot-toast'

const SearchBar = () => {
  const [search,setSearch] = useState("");
  const {setSelectedConversation} =useConversation()
  const {conversations} = useGetConversations()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length <3){
      return toast.error('Search term must be ar least 3 characters long')
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation)
      setSearch('');
    } else toast.error("No such user found!")
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
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