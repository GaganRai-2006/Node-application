// basic code for inserting the document in the mongodb
const mongose=require('mongoose')
const user_data=require("./user.model")
const user_adr=require("./user_address")


mongose.connect("mongodb://localhost/new_db")

const db=mongose.connection;
db.once("open",()=>{
                    console.log("yah , it is connected!")
                    init()
                    //data()
})
db.on("error",()=>{
                    console.log("error while connection")
})
 async function init(){
                    /**  const user_info={
                                        name:"Jack",
                                         age:35,
                                         email:"Jhonrai@gmail.com",
                                         subjects:["Python","node.js","science"],
                                         adress:{
                                         lane1:"lane1",
                                         lane2:"lane2",
                                         street:"OMR",
                                         city:"Bangalore",
                                         country:"India",
                                         pincode:577401,

                                         },
                                         
                    
                     }
                     try{
                                         const information=await user_data.create(user_info)
                                         console.log("user infomation",information)
                     }catch(error){
                                                        console.log("error generated",error)      
                    }finally{
                                        console.log("successfully it is connected")
                     }**/

              
                     const adress1={
                                        lane1:"lane1",
                                         lane2:"lane2",
                                         street:"OMR",
                                         city:"Bangalore",
                                         country:"India",
                                         pincode:577401,


                     }
                     const ad_obj=await user_adr.create(adress1)
                     const user_info={
                                        name:"Jack",
                                         age:35,
                                         email:"Jhonrai@gmail.com",
                                         subjects:["Python","node.js","science"],
                                         adress:ad_obj._id,

                     }
                     const info_obj= await user_data.create(user_info)
                     console.log(info_obj)


              



 }
async function data(){
                    //fetching the data using the id 
                    //const person_info=await user_data.findById("6641f1bcce1ee3755567e2a1")
                    //console.log(person_info)
                    /**try{
                                        const users=await user_data.findOne({name:"Kumar Rai"})
                                        console.log(users)
                    }catch(error){
                                        console.log("error generated",error)
                    }finally{
                                        console.log("we find it!!")
                    }**/
                    /**try{
                    const users=await user_data.where("age").gt("19").where("name").equals("Oggy").limit("3")
                                        console.log(users)
                    }catch(error){
                                        console.log("error generated",error)
                    }finally{
                                        console.log("we find it")
                    }**/

                    /**try{
                                        const user=await user_data.findOne({name:"Oggy"})
                                        console.log(user)
                                        user.age=22
                                        user.email="raiGagan084@gamil.com"
                                        const updated_doc=await user.save()
                                        console.log(updated_doc)

                    }catch(error){
                                        console.log("error while updating the document",error)
                    }
                    finally{
                                        console.log("we are updating the data")
                    }**/

                    // const user_rec=await user_data.find({name:"Gagan Rai"})
                    // console.log(user_rec)
                    const rec_del=await user_data.deleteOne({name:"Jack"})
                    console.log(rec_del)
                    
                     


}