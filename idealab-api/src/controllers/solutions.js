const Solution = require('../models/solution');
const solutions = {};

solutions.createSolution = function(req,res,next){
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).end();
  }

  const newSolution = new Solution({
    name:req.body.name,
    text: req.body.text,
    creator: req.user._doc._id
  });

  newSolution.save(function (err,solution) {
    if (err) {
      console.log(err);
      return res.sendStatus(406);
    }

    res.status(200);
    res.json({solution});

  });
};

solutions.getSolution = function(req,res,next){
  const id = req.params.id;
  if (!id) return res.send(400).end();

  Solution.findOne({_id:id}, function(err,solution){
    if (err) {
      console.log(err);
      return res.sendStatus(406);
    }

    if(!solution) return res.sendStatus(204);

    res.status(200);
    res.type('json');
    res.json({solution});
  });
};

solutions.updateSolution = function(req,res,next){
  const id = req.params.id;
  if (!id) return res.send(404).end();

  Solution.findOne({_id:id}, function(err,solution){
    if (err) return res.send(404).end();

    // Update document
    solution.name = req.body.name ? req.body.name : solution.name;
    solution.text = req.body.text ? req.body.text : solution.text;

    solution.save(function(err){
      if (err) return res.send(404).end();

      res.status(200);
      res.type('json');
      res.json({solution});
    });
  });
};

solutions.deleteSolution = function(req,res,next){
  const id = req.params.id;
  if (!id) return res.send(404).end();

  Solution.remove({_id:id}, function(err){
    if (err) return res.send(404).end();

    res.sendStatus(200);

  });
};

solutions.getAllSolutions = function(req,res,next){
  Solution.find({creator:req.user._doc._id}, function(err,solutions){
    if (err) {
      console.log(err);
      return res.sendStatus(406);
    }

    if (solutions.length === 0) return res.sendStatus(204);
    res.status(200);
    res.type('json');
    res.json({solutions});
  });
};

module.exports = solutions;
