import Messages from './Messages.jsx';
import MessageInput from './MessageInput.jsx';
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const isWelcomeScreen = true;
    return (
    <div className='md:min-w-[450px] flex flex-col '>
       {isWelcomeScreen ? ( 
            <WelcomeScreen />
            ) : (
       <>
        {/* Header*/}
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To :</span>
            <span className='text-gray-900 font-bold'> My Name</span>
        </div>
        <Messages />
        <MessageInput/>
        </>
        )} 
    </div>
  );
};

export default MessageContainer;

const WelcomeScreen = () => {
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome👋My Name</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
                <div className='mt-auto '>
                    <p className='bg-rose-950 text-sm font-thin mt-52 rounded-lg'>🔒 End-to-end Encrypted.</p>
                </div>
            </div>
        </div>
    )
};


// startter code for this file

// import React from 'react'
// import Messages from './Messages.jsx';
// import MessageInput from './MessageInput.jsx';

// const MessageContainer = () => {
//   return (
//     <div className='md:min-w-[450px] flex flex-col '>
//         <>
//         {/* Header*/}
//         <div className='bg-slate-500 px-4 py-2 mb-2'>
//             <span className='label-text'>To :</span>
//             <span className='text-gray-900 font-bold'> My Name</span>
//         </div>
//         <Messages />
//         <MessageInput/>

//         </>
//     </div>
//   )
// }

// export default MessageContainer