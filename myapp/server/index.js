const express=require('express');
const mongoose=require("mongoose");
const app= express();
const cors= require('cors');
const TeamModel=require("./models/Team");
app.use(express.json());
const addModel=require("./models/add")
const updateModel=require("./models/add")

mongoose.connect("mongodb://localhost:27017/team",{
    useNewUrlParser:true,
});

app.use(cors());
app.post("/insert",async(req,res)=>{
  
const username = req.body.username
const email = req.body.email
const password = req.body.password
const confirm = req.body.confirm


const Team=new TeamModel({username:username,email:email,password:password,confirm:confirm});

try{
await Team.save();
res.send("inserted data")
}catch(err){
    console.log(err);
}


});
app.post("/create",async(req,res)=>{
  
const username = req.body.username
const role = req.body.role
const email = req.body.email

const Add=new addModel({username: username, role: role, email:email});
const update=new updateModel({username: username, role: role, email:email}); 
try{
await Add.save();
res.send("inserted data")
}catch(err){
    console.log(err);
}

});

app.put("/update",async(req,res)=>{
    const newUsername=req.body.newUsername;
    const id =req.params.id

    try{
      await updateModel.findById(id,(err,updatedUser)=>{
          updatedUser.username=newUsername;
         updatedUser.save() ;
         res.send("update");
    
        });
    } 
        
      
      catch(err){
        console.log(err);
    }
    
});




app.get("/read",async (req,res)=>{
    addModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})

app.delete("/delete/:id",async (req,res)=>{
   
        const id =req.params.id
        await addModel.findByIdAndRemove(id).exec();
    
 
});

app.listen(3001,()=>{
    console.log("Server running on port 3001....");
}
)