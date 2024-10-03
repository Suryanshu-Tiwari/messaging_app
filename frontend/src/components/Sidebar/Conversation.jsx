const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor pointer'>
        <div className="avatar online">
            <div className ='w-12 rounded-full'> 
                <img src='https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg' alt='user avatar'/>
            </div>          
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>my name</p>
                <span className='text-xl'>😊</span>
            </div>
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'>
    </div>
    </>
  )
}

export default Conversation;


//starter code for this code

// const Conversation = () => {
//     return (
//       <>
//       <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor pointer'>
//           <div className="avatar online">
//               <div className ='w-12 rounded-full'> 
//                   <img src='https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg' alt='user avatar'/>
//               </div>          
//           </div>
//           <div className='flex flex-col flex-1'>
//               <div className='flex gap-3 justify-between'>
//                   <p className='font-bold text-gray-200'>my name</p>
//                   <span className='text-xl'>😊</span>
//               </div>
//           </div>
//       </div>
//       <div className='divider my-0 py-0 h-1'>
//       </div>
//       </>
//     )
//   }
  
//   export default Conversation;