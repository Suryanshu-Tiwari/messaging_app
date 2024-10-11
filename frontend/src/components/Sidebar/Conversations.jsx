import useGetConversations from '../../hooks/useGetConversations.js';
import Conversation from './Conversation.jsx'

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  return (
    <div className='py-2 flex flex-col overflow-auto'>

      {conversations.map((conversation,Idx) => (
        <Conversation 
          key={conversation._id}
          conversation={conversation}
          lastIdx={Idx === conversations.length -1} 
          />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}

    </div>
  )
}

export default Conversations

// starter code for this file


// import Conversation from './Conversation.jsx'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
//   )
// }

// export default Conversations
