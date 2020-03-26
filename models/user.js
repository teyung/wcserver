const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserSchema = new Schema({
    first_name:{
        type: String
    },
    middle_initial:{
        type: String
    },
    last_name:{
        type: String
    },
    mobile_no:{
        type: Number
    },
    address:{
        type: String
    },
    birthdate:{
        type: Date
    },
    sex:{
        text: String
    },
    email_address:{
        type: String
    },
    username:{
        type: String
    },
    password:{
        type: String
    },
    created:{
        type: Date,
        default: Date.now
    }},{
        collection:'useraccounts'
})

module.exports = user = mongoose.model('users', userSchema)