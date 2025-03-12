import {useEffect, useRef} from "react"; 
import Message from './Message.jsx';
import MessageSkeleton from '../Skeleton/MessageSkeleton';
import useGetMessages from '../../hooks/useGetMessages';
import useListenMessages from '../../hooks/useListenMessages.js';

const Messages = () => {
  const {messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth"});
    },100)
  },[messages]);

  return (
    <div className='flex-1 px-4 overflow-auto '>
        <div className='text-sm text-center content-around text-black rounded-md font-mono mb-4 mt-1 '>
        <span className=' text-zinc-400 bg-opacity-15 rounded-md'>🔒 Your all the messages are end-to-end encrypted.</span>

        {!loading && messages.length > 0 && messages.map((message, index) => (
          <div  key={message._id || index} ref={index === messages.length - 1 ? lastMessageRef : null}>
            <Message message = {message}/>
          </div>
        ))}

        {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={`skeleton-${idx}`} />)}
        {!loading && messages.length === 0 && (
          <p className='text-center text-sky-300'>Send a message to start the conversation</p>
        )}
        </div>
    </div>
  );
};

export default Messages;





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