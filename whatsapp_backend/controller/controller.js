const ChatModel=require('../model/conversation')
const Contact=require('../model/contact')

const addMessage=async(req,res)=>{
    try{
        const name=req.body.name;
        const number=req.body.number;
        const message=req.body.message;
        const timeStamp=req.body.timeStamp;
        const received=req.body.received;
        
        var newConversationDoc={
            name:name,
            number:number,
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

        const chatConversations=await ChatModel.find({number:contactNumber});
        
        if(chatConversations==null || chatConversations==undefined || chatConversations.length==0)
            res.status(200).send([]);
        else
            res.status(200).send(chatConversations)
    }
    catch(error){
        res.status(400).send("Some error occured")
    }
}

const addContact=async(req,res)=>{
    try{
        const name=req.body.name;
        const number=req.body.number;
        const lastSeen=req.body.lastSeen;
        const profilePicture=req.body.profilePicture;

        const newContact=new Contact({
            name:name,
            number:number,
            lastSeen:lastSeen,
            profilePicture:profilePicture
        })

        await newContact.save();
        res.status(200).send(newContact);
    }
    catch(error){
        res.status(400).send({Error:error})
    }
}

const getContacts=async(req,res)=>{
    try{
        const contactList=await Contact.find({})
        res.status(200).send(contactList)
    }
    catch(error){
        res.status(400).send({Error:error})
    }
}

const getContactDetails=async(req,res)=>{
    try{
        const contactId=req.params.id
        const contactList=await Contact.findById(contactId);
        res.status(200).send(contactList)
    }
    catch(error){
        res.status(400).send({Error:error})
    }
}

module.exports={
    addMessage,
    getConversations,
    addContact,
    getContacts,
    getContactDetails
}