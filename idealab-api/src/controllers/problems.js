const Problem = require('../models/problem');
const problems = {};

problems.createProblem = function(req,res,next){
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).end();
  }

  const newProblem = new Problem({
    name:req.body.name,
    text: req.body.text,
    creator: req.user._doc._id
  });

  newProblem.save(function (err,problem) {
    if (err) {
      return res.sendStatus(406);
    }

    res.status(200);
    res.json({problem});

  });
};
problems.getProblem = function(req,res,next){
  const id = req.params.id;
  if (!id) return res.send(400).end();

  Problem.findOne({_id:id}, function(err,problem){
    if (err) {
      console.log(err);
      return res.sendStatus(406);
    }

    if(!problem) return res.sendStatus(204);

    res.status(200);
    res.type('json');
    res.json({problem});
  });
};
problems.updateProblem = function(req,res,next){
  const id = req.params.id;
  if (!id) return res.send(404).end();

  Problem.findOne({_id:id}, function(err,problem){
    if (err) return res.send(404).end();

    // Update document
    problem.name = req.body.name ? req.body.name : problem.name;
    problem.text = req.body.text ? req.body.text : problem.text;

    problem.save(function(err){
      if (err) return res.send(404).end();

      res.status(200);
      res.type('json');
      res.json({problem});
    });
  });
};
problems.deleteProblem = function(req,res,next){
  const id = req.params.id;
  if (!id) return res.send(404).end();

  Problem.remove({_id:id}, function(err){
    if (err) return res.send(404).end();

    res.sendStatus(200);

  });
};

problems.getAllProblems = function(req,res,next){
  Problem.find({creator:req.user._doc._id},'_id name text created')
  .sort({created:-1})
  .exec(function(err,problems){
    if (err) {
      console.log(err);
      return res.sendStatus(406);
    }

    if (problems.length === 0) return res.sendStatus(204);
    res.status(200);
    res.type('json');

    res.json({problems});
  });
};

module.exports = problems;
