const mongoose=require('mongoose')

const conversationSchema=new mongoose.Schema({
    contactNumber:{
        type:Number,
        required:true,
        unique:true    
    },
    message:{
        type:String,
        required:true
    },
    timeStamp:{
        type:String,
        required:true,
        default:new Date().toLocaleString()
    },
    received:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports=mongoose.model(conversation,conversationSchema);