import Message from './Message.jsx'
import '../../index.css';
const Messages = () => {
  return (
    <div className='px-4 flex-1  overflow-auto '>
        <div className='text-sm text-center content-around bg-yellow-100 rounded-md text-gray-500 font-mono mb-4 mt-2 '>
        <span >🔒 Your all the messages are end-to-end encrypted.</span>
        </div>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages


//starter code for this file

// import Message from './Message.jsx'
// import '../../index.css';
// const Messages = () => {
//   return (
//     <div className='px-4 flex-1  overflow-auto '>
//         <div className='text-sm text-center content-around bg-yellow-100 rounded-md text-gray-500 font-mono mb-4 mt-2 '>
//         <span >🔒 Your all the messages are end-to-end encrypted.</span>
//         </div>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//     </div>
//   )
// }

// export default Messages