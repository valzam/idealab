const auth = {};
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secret = require('../../config');

auth.authenticateUser = function(req,res){
  User.findOne({email:req.body.email}, function(err,user){
    if (err) return res.send(err);

    if (!user) return res.sendStatus(404);

    // Check the password
    user.verifyPassword(req.body.password, function(err, isMatch){
      if (err) return res.sendStatus(404);

      if (!isMatch) return res.sendStatus(401);

      const token = jwt.sign(user, ""+secret, { expiresIn: 60*60*24*365 });
      res.json({ token: token });
    });
  });
};



module.exports = auth;
