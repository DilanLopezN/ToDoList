const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  done: { type: Boolean, default: false },
  checklist: mongoose.Schema.Types.ObjectId,
  ref: 'Checklist',
  required: true
})

module.exports = moongose.model('Task', taskSchema)
