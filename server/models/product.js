const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: 1,
    maxLength: 100
  },
  description: {
    type: String,
    required: true,
    maxLength: 10000
  },
  price: {
    type: Number,
    required: true,
    maxLength: 255
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  },
  shipping: {
    type: Boolean,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  },
  wood: {
    type: Schema.Types.ObjectId,
    ref: 'Wood',
    required: true
  },
  frets: {
    type: Number,
    required: true
  },
  sold: {
    type: Number,
    maxLength: 100,
    default: 0
  },
  publish: {
    type: Boolean,
    required: true
  },
  images: {
    type: Array,
    default: []
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = {
  Product
}