const express=require('express')
const chatController=require('../controller/controller')
const route=express.Router();

route.post('/add',chatController.addMessage)
route.get('/:contactNumber',chatController.getConversations);

module.exports=route;

