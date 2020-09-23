import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChallengeContext } from './ChallengeContext';

export const ChallengeList = () => {
  const { challenges } = useContext(ChallengeContext);

  return (
    <main>
      <section>
        <aside>
          <h2>challenges</h2>

          <ul>
            {Object.keys(challenges).map((id) => (
              <li key={id}>
                <Link to={`/challenge/${id}`}>{challenges[id].name}</Link>
              </li>
            ))}
          </ul>
          <Link to="/create-challenge">
            <b>create new challenge</b>
          </Link>
        </aside>
      </section>
    </main>
  );
};
