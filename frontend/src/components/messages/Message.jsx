import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
    <div className='w-10 rounded-full'>
    <img alt='Tailwindcss chat bubble components' src={"https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"}
    />
    </div>
        </div>
        <div className='chat-bubble text-white bg-blue-500'>Hii, What's up?</div>
        <div className='chat-footer opacity-100 text-xs flex gap-1 items-center'>03:32</div>
    </div>
  )
}

export default Message;

// starter code for this file

// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//     <div className='w-10 rounded-full'>
//     <img alt='Tailwindcss chat bubble components' src={"https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"}
//     />
//     </div>
//         </div>
//         <div className='chat-bubble text-white bg-blue-500'>Hii, What's up?</div>
//         <div className='chat-footer opacity-100 text-xs flex gap-1 items-center'>03:32</div>
//     </div>
//   )
// }

// export default Message;