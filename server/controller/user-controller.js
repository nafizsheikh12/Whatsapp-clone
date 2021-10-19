const User = require('../model/User')
    
  const userController =  () => {
    return {
      async addUser(req,res) {
        try{
          let exist = await User.findOne({ googleId: req.body.googleId });

          if(exist) {
              res.status(200).json('user already exists');
              return;
          }    

              const newUser = new User(req.body)
              console.log(req.body)

              await newUser.save();
              res.status(200).json(newUser);
        }catch(err){
              console.log(err)
        }},


      async getUser(req,res) {
        try{
             const users = await  User.find({})
             res.status(200).json(users)
        }catch(er){
          console.log(er)
        }
      }  
      }
  }
module.exports= userController