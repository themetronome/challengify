import React from 'react';
import { Link } from 'react-router-dom';

export const ChallengeList = () => {
  const challenges = [];

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
          <Link to="/new-challenge">
            <b>create new challenge</b>
          </Link>
        </aside>
      </section>
    </main>
  );
};
