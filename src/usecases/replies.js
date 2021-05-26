
const Replies = require('../models/replies')

function getAll () {
    return Replies.find()
}

function getByPostId(id){
    return Replies.find({post:id})
}

function create({ content, post, userId}){
    const creationDate = Date.now()
    return Replies.create({ content, creationDate, post, userId })
}

module.exports={
    getAll,
    getByPostId,
    create
}