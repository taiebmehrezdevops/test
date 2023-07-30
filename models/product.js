const mongoose=require("mongoose")
const schema=mongoose.Schema

const productSchema=new schema({
    design:{
        type:String
    },
    desc:{
        type:String
    },
    prix:{
        type:String
    },
    qte:{
        type:String
    },
    cat:{
        type:String
    },
    image:{
        type:String
    },
    
},
{ timestamps:true}   
)
module.exports=Product=mongoose.model("products",productSchema)