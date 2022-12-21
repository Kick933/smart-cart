import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    products:[{type:mongoose.Schema.ObjectId,ref:'Product'}],
    address:{type:String,required:true},
    contact:{type:String,required:true},
    logo:{type:String,required:true}
},{timestamps:true})

const Seller = mongoose.models.Seller || mongoose.model('Seller',sellerSchema)