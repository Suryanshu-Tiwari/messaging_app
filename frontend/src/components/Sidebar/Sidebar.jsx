import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'
import SearchBar from './SearchBar'


const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchBar/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar