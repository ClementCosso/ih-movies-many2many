const mongoose = require("mongoose")


const MovieSchema = mongoose.Schema({
  title: String,
  genre: String,
  plot: String,
  celebrities: [{type: mongoose.SchemaTypes.ObjectId, ref: 'celebrity'}]
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie