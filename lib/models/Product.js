import mongoose from "mongoose";

const Schema = mongoose.Schema

const productSchema = new Schema({
    name : {type:String, required: true},
    price : {type:Number,required:true},
    description: {type:String,required:true},
    imageURL:[{type:String,required:true}],
    by:{type:mongoose.Schema.ObjectId,required:true,ref:'User'}
},{timestamps:true})



export const Product = mongoose.models.Product || mongoose.model('Product',productSchema)