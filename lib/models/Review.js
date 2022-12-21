import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    title : {type:String, required:true},
    content : {type:String, required: true},
    by : {type: mongoose.Schema.ObjectId,required: true, ref : 'User'}
},{timestamps : true})

export const Review = mongoose.models.Review || mongoose.model('Review',reviewSchema)