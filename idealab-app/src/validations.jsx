const Validations = {};

Validations.problem = function(problem){
  let err = {};

  if (problem.name.length === 0) {
    err.name = {};
    err.name.code = "has-error";
    err.name.message = "Please give the problem a name";
  }

  if (problem.text.length === 0) {
    err.text = {};
    err.text.code = "has-error";
    err.text.message = "Please give the problem a description";
  }

  return err;
};

Validations.solution = function(solution){
  let err = {};

  if (solution.name.length === 0) {
    err.name = {};
    err.name.code = "has-error";
    err.name.message = "Please give the solution a name";
  }

  if (solution.text.length === 0) {
    err.text = {};
    err.text.code = "has-error";
    err.text.message = "Please give the solution a description";
  }

  return err;
};

export default Validations;
