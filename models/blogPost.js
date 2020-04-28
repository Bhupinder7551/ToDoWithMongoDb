

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TaskSchema = new Schema({
    task_name: String
})

module.exports = User = mongoose.model('tasks', TaskSchema)
