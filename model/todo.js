const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    desc: {
        type: String,
    }
}, {timestamp: true})

const Todo = mongoose.model('Todo',todoSchema)

module.exports = Todo