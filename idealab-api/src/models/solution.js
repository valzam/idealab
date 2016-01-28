const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
  name: {type:String, required: true},
  text: {type:String, required: true},
  creator: {type:String, required: true, index:true},
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Solution', solutionSchema);
