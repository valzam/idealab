const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },

  profile: [{
     name: {
      type:String,
      default:""
    }
  }],

  created:{type: Date, default: Date.now},
  updated:{type: Date, default: Date.now}
});


UserSchema.pre('save', function(next){
  const user = this;

  // If the password hasnt changed do nothing
  if (!user.isModified('password')) return next();

  // If the password has changed, hash it
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      return next();
    });
});

});

UserSchema.methods.verifyPassword = function(password,callback){
  bcrypt.compare(password,this.password, function(err,res){
    if (err) return callback(err);

    return callback(null,res);
  });
};

module.exports = mongoose.model('User', UserSchema);
