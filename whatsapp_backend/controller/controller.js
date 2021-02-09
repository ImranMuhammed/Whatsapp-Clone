const ChatModel=require('../model/conversation')

const addMessage=async(req,res)=>{
    try{
        const contactNumber=req.body.contactNumber;
        const message=req.body.message;
        const timeStamp=req.body.timeStamp;
        const received=req.body.received;

        const newConversationDoc={
            contactNumber:contactNumber,
            message:message,
            timeStamp:timeStamp,
            received:received
        }

        const  newMessage= new ChatModel(newConversationDoc);
        await newMessage.save()
        res.status(200).send(newMessage)
    }
    catch(error){
        console.log("error",error)
        res.status(400).send("Some error occured while adding new message")
    }
    
}

const getConversations=async(req,res)=>{
    try{
        const contactNumber=req.params.contactNumber;

        const chatConversations=await ChatModel.find({contactNumber:contactNumber});
        
        if(chatConversations==null || chatConversations==undefined || chatConversations.length==0)
            res.status(200).send("There are no Conversations available with given contact number");
        else
            res.status(200).send(chatConversations)
    }
    catch(error){
        res.status(400).send("Some error occured")
    }
}

module.exports={
    addMessage,
    getConversations
}