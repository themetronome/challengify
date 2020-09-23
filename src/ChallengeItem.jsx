import React, { useContext } from 'react';
import { ChallengeContext } from './ChallengeContext';
import { useParams, Redirect, Link } from 'react-router-dom';

const chunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  );
};

export const ChallengeItem = () => {
  const { challenges, toggleDayForChallenge } = useContext(ChallengeContext);

  const { challengeId } = useParams();

  if (!challenges || !challenges[challengeId]) {
    return <Redirect to="/" />;
  }

  const challenge = challenges[challengeId];

  const { days } = challenge;

  return (
    <main>
      <section>
        <header>
          <h1>challenge</h1>
          <p>{challenge.name}</p>
          <p>
            <Link to="/">back to challenges list</Link>
          </p>
        </header>
        <table>
          <tbody>
            {chunk(Object.keys(days), 5).map((row) => (
              <tr key={row}>
                {row.map((day) => (
                  <td
                    key={day}
                    onClick={() => {
                      toggleDayForChallenge(challengeId, day);
                    }}
                    style={{ cursor: 'pointer' }}>
                    {days[day]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};
