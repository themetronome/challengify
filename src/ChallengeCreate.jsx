import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { ChallengeContext } from './ChallengeContext';

export const ChallengeCreate = () => {
  const { createNewChallenge } = useContext(ChallengeContext);
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = event.target.challenge.value;
    createNewChallenge(name);
    history.push('/');
  };

  return (
    <main>
      <section>
        <form onSubmit={onSubmit}>
          <p>
            <Link to="/">back to challenges list</Link>
          </p>
          <label htmlFor="challenge">challenge title:</label>
          <input required name="challenge" type="text" />
          <button>create challenge</button>
        </form>
      </section>
    </main>
  );
};
