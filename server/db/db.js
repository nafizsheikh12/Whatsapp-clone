const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PractiseDataBase", { useNewUrlParser: true,}).then(()=> {
    console.log('db ad')
}).catch((err) => {
  console.log("err")
})