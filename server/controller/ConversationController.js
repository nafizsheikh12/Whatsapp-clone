const Conversation = require('../model/conversation')
    
  const ConversationController =  () => {
    return {
      async newConversation(req,res) {
          let senderId= req.body.senderId
          let receiverId= req.body.receiverId
        try{
            const exist = await Conversation.findOne({ members: {$all: [receiverId,senderId]} })
   
            if(exist){
                res.status(200).json('consver already added')
                return
            }

           const newConversation =    new Conversation({
                members: [senderId,receiverId]
            })

            await newConversation.save();
            res.status(200).json('conversation added')
        }catch(err){
              console.log(err)
        }},


      async getConversation(req,res) {
        try {
          const conversation = await Conversation.findOne({ members: { $all: [ req.body.sender, req.body.receiver] }});
          res.status(200).json(conversation);
      } catch (error) {
          res.status(500).json(error);
      }
      }  





    }

}

module.exports= ConversationController