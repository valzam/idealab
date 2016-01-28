import React from 'react';
import {IndexRoute,IndexRedirect, Route} from 'react-router';

// components
import App from './components/App.jsx';
import ProblemsWrapper from './components/Problems/ProblemsWrapper.jsx';
import ProblemsList from './components/Problems/ProblemsList.jsx';
import Problem from './components/Problems/Problem.jsx';
import addProblem from './components/Problems/addProblem.jsx';
import SolutionsWrapper from './components/Solutions/SolutionsWrapper.jsx';
import SolutionsList from './components/Solutions/SolutionsList.jsx';
import Solution from './components/Solutions/Solution.jsx';
import addSolution from './components/Solutions/addSolution.jsx';
import Settings from './components/Settings.jsx';
import {Login, Register} from './components/Auth.jsx';

// AuthWrapper
import AuthWrapper from './components/AuthWrapper.jsx';
import AnonWrapper from './components/AnonWrapper.jsx';

export default (
  <Route path='/' component={App}>
    <IndexRedirect to="problems"/>

    <Route path='login' component={AnonWrapper(Login)} />
    <Route path='register' component={AnonWrapper(Register)} />

    <Route path='settings' component={AuthWrapper(Settings)} />

    <Route path='problems' component={AuthWrapper(ProblemsWrapper)}>
      <IndexRoute component={AuthWrapper(ProblemsList)}/>
      <Route path='create' component={AuthWrapper(addProblem)} />
      <Route path=':_id' component={AuthWrapper(Problem)} />
    </Route>

    <Route path='solutions' component={AuthWrapper(SolutionsWrapper)}>
      <IndexRoute component={AuthWrapper(SolutionsList)}/>
      <Route path='create' component={AuthWrapper(addSolution)} />
      <Route path=':_id' component={AuthWrapper(Solution)} />
    </Route>

  </Route>
);
