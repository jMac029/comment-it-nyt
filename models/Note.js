// Require mongoose
const mongoose = require('mongoose');
// Create a schema class
const Schema = mongoose.Schema;

// Create the Note schema
let NoteSchema = new Schema({
  body: {
    type: String,
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
  },
});

// Create the Note model with the NoteSchema
const Note = mongoose.model('Note', NoteSchema);

// Export the Note model
module.exports = Note;
