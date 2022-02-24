const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    track:{
        type: String,
        required:true
    }
})
const User= mongoose.model('User',entrySchema)
module.exports = { User: User }