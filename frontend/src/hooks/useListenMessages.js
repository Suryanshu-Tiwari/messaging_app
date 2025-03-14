import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.wav"

const useListenMessages =() => {
    const {socket} =useSocketContext();
    const{messages, setMessages} =useConversation();
    useEffect(() => {
        socket?.on("newMessage",(newMessage) => {
            console.log('Received newMessage state:', newMessage);
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages,newMessage])
            console.log('Updated messages state:', messages);
        })
        return () => socket?.off("newMessage")
    },[socket,setMessages,messages]);
};
export default useListenMessages;