const mongose=require('mongoose')
const useraddress=new mongose.Schema({
                    lane1:String,
                    lane2:String,
                    street:String,
                    city:String,
                    country:String,
                    pincode:Number,

})
const userSchema=new mongose.Schema({
                    name:{
                                        type:String,
                                        required:true,
                    },
                    age:{
                                        type:Number,
                                        min:19,
                    },
                    email:{
                                        type:String,
                                        minLength:11,
                                        lowercase:true,
                                        required:true,
                    },
                    hobby:{
                                        type:String,
                    },
                    
                    subjects:[String],
                    adress:{
                                        type:[mongose.SchemaTypes.ObjectId],
                                        ref:"adress",
                    },
},{
                    versionKey:false,
                    timestamps:true,
})
module.exports=mongose.model("person",userSchema)