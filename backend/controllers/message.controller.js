import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async(req,res) => {
    try{
        const {message} = req.body;
        const { id : recieverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation .findOne({
            participants:{$all:[senderId, recieverId]},
        })

        if(!conversation) {
            conversation = await Conversation.create({
                participants:[senderId, recieverId],
            })
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        })

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // socket.io functionalitywill come here

        // await conversation.save();
        // await newMessage.save();

        //it runs both sunctions parallelly
        await promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({newMessage});
    }
    catch(err){
        console.log("Error in sendMessage controller",err.message);
        return res.status(500).json({err:"Internal Server Error"});
    }
};

export const getMessage = async(req,res) => {
    try{
        const {id:userToChatId}= req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{ $all: [senderId,userToChatId]}
        }).populate("messages");    // gives actual message instead of message reference


        if(!conversation) return res.status(200).json([]);
        const messages =conversation.messages;
        res.status(200).json(messages);
    }
    catch(err){
        console.log("Error in getMessage controller",err.message);
        return res.status(500).json({err:"Internal Server Error"});
    }
}