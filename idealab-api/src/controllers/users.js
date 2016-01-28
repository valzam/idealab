const users = {};
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secret = require('../../config');

users.registerUser = function(req,res,next){
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  user.save(function(err,userObj){
    if (err) {
      console.log(err.message);
      return res.sendStatus(409);
    }

    const token = jwt.sign(user, ""+secret, { expiresIn: 60*60*24*365 });
    res.status(200);
    res.json({token:token});
  });
};

users.getUsers = function(req,res,next){
  User.find({}, function(err,users){
    if (err) return res.send(err).end();

    res.status(200);
    res.type('json');
    res.json(users);
  });
};

users.updateUser = function(req,res,next){
  const id = req.user._doc._id;

  User.findOne({_id:id}, function(err,user){
    if (err) return res.sendStatus(204);
    if (!user) return res.sendStatus(404);

    if (req.body.profile) user.profile[0] = req.body.profile;
    if (req.body.email) user.email = req.body.email;
    if (req.body.password) user.password = req.body.password;

    user.save(function(err){
      if (err) return res.send(err).end();

      res.sendStatus(200);
    });
  });
};



module.exports = users;
