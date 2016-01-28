const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  plan: {type: String, default: "free"},
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  canceled: { type: Date }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
