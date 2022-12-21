import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name : {type:String, required: true},
    last_name : String,
    user_id : {type:String,required:true},
    email: {type:String, required:true},
    reviews : [{type:mongoose.Schema.ObjectId, ref:'Review'}],
    cart: [{type:mongoose.Schema.ObjectId,ref:'Product'}],
    isSeller:{type:Boolean,default:false,required:true},
    sellerProfile:{type:mongoose.Schema.objectId,ref:'Seller'}
})

userSchema.virtual('name').get(function(){
    if(this.last_name) return this.first_name + ' ' + this.last_name
    return this.first_name
})

export const User = mongoose.models.User || mongoose.model('User',userSchema)