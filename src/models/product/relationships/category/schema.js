const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productCategoryRelationshipSchema = new Schema({
  data: [{
    _id: false,
    type: {
      type: String,
      required: true
    },
    category_id: {
      type: String,
      required: true,
      unique: true
    }
  }]
}, { versionKey: false })

module.exports = productCategoryRelationshipSchema