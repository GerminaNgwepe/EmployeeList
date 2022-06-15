const mongoose=require("mongoose");
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

    const Update=mongoose.model("Update",AddSchema);
module.exports=Update;