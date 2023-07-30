const mongoose=require("mongoose")
const schema=mongoose.Schema

const OrderSchema=new schema({
  user:{type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    },
  orderItems:[
      {
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        name:
        {
            type: String,
        },
        price:{
            type: Number,
        },
        qte:{
            type:Number,
            default:1,
        },
    }, 
  ],
  amount:{type: Number, required:true},
  address:{ type: Object, required:true},
  status: {type:String, default:"pending"},
},
{ timestamps:true}   
);
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;