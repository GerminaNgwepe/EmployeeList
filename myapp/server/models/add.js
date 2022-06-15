const mongoose=require("mongoose");

const AddSchema=new mongoose.Schema({

username: {
    type: String,
    required: true,
},
role:{
    type:String,
    required: true,
},
email:{
    type:String,
    required: true,
},
});
const UpdateSchema=new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },
    role:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    });
const Add=mongoose.model("Add",AddSchema);
const Update=mongoose.model("Add",AddSchema);
module.exports=Add;