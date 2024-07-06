const mongoose=required('mongoose')
const pSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    imageURL:{type:String,required:true},
    description:{type:String,required:true}
})
module.exports=mongoose.model('Product',pSchema)