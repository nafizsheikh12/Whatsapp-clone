const express = require('express');
const route = express.Router();

const userController = require('../controller/user-controller')
const ConversationController = require('../controller/ConversationController')
const Message = require('../controller/Message')

const initRoutes = (app) => {

    
    app.post('/add',userController().addUser)

    app.get('/users',userController().getUser)

    app.post('/conversation/add',ConversationController().newConversation)
    app.post('/conversation/get',ConversationController().getConversation);
    
    app.post('/message/add',Message().newMessage);
    app.get('/message/get/:id',Message().getMessage)
}

module.exports= initRoutes