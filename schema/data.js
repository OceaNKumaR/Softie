 
const mongoose = require("mongoose")

const dataScheama = mongoose.Schema({
    id:String,
    Money:Number,
    guildID:String,
    daily:String,
    Bank: Number,
    beg:Number,
    daily:Number,
    work:Number,
    crime:Number,
    shop:String,
    tax:Number,
    hunt:Number,
    fish:Number

})
module.exports = mongoose.model("Data",dataScheama)
