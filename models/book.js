const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  description: String,
  date: { type: Date, default: Date.now },
  image: {type: String, required: true},
  link: {type: String, required: true},
  googleId: {type: String, required: true, unique: true}

  // Is a unique _id needed?

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
