
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({    
    content: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 200
    },
    creationDate: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 60
    },
    mail: {
        type: String,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        maxLength: 120,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength:1
    },
    userName: {
        type: String,
        required: true,
        minLength: 2
    },
    userNickname: {
        type: String,
        required: true,
        minLength: 2
    },
    userPic: {
        type: String,
        required: true,
        minLength: 2
    },
    work: {
        type: String,
        required: true,
        minLength: 2
    },
    role:{
        type: [String],
        enum: ['admin','user'],
        minLength: 1,
        required: true
    }
})

const model = mongoose.model('usersdev', userSchema)

module.exports = model


/*{"content":"Excelente post!",
"creationDate":"14/04/2021",
"creationTime":"19:00",
"post":1,
"replyId":1,
"userId":1}*/
