import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ChallengeList } from './ChallengeList';
import { ChallengeItem } from './ChallengeItem';
import { ChallengeCreate } from './ChallengeCreate';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ChallengeList} />
      <Route path="/challenge/:challengeId" component={ChallengeItem} />
      <Route path="/create-challenge" component={ChallengeCreate} />
    </Switch>
  );
}

export default App;
