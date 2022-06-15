/* import { __esModule } from "@testing-library/jest-dom/dist/matchers"; */

const mongoose=require("mongoose");

const TeamSchema=new mongoose.Schema({

username: {
    type: String,
    required: true,
},
email:{
    type:String,
    required: true,
},

password:{
    type:String,
    required: true,
},
confirm:{
    type:String,
    required: true,
},

});
const Team=mongoose.model("Team",TeamSchema);
module.exports=Team;