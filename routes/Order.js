const express=require("express")
const isAuth = require("../middleware/isAuth")
const router=express.Router()
const Order = require("../models/order") 
//create order
router.post("/addo",isAuth, async (req,res) => {
    const { orderItems,amount,address,status,timestamps}=req.body
    try{
        const newOrder = new Order({user:req.user._id,orderItems,amount,address,status,timestamps})
        const order = await newOrder.save()
        res.send({msg:"order added",order})
    }
    catch(error){
        console.log(error)
    }
    
})
//Fetch Order
router.get("/",isAuth,async(req,res)=>{
    const order=await Order.find().populate("user")
    res.send({msg:"Order fetched",order})
})
//delete order
router.delete("/:id",isAuth,async(req,res)=>{
    const {id}=req.params
    const order = await Order.findOneAndDelete({_id:id})
    res.send({msg:"product deleted",order})
})
//Edit order
router.put("/edito/:id",isAuth,async(req,res)=>{
    const {id}=req.params
    const order = await Order.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
    res.send({msg:"Order edited",order})
})
module.exports=router