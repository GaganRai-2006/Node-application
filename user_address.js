const mongoose=require("mongoose")
const user_add_schema=new mongoose.Schema({
                    lane1:String,
                    lane2:String,
                    street:String,
                    city:String,
                    country:String,
                    pincode:Number,

})
module.exports=mongoose.model("adress",user_add_schema)