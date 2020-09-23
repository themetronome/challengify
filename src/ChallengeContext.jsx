import React, { useReducer, useEffect } from 'react';

import { challengifyReducer } from './challengifyReducer';
import { toggleDay, createChallenge } from './actions';

export const ChallengeContext = React.createContext();

export const ChallengeProvider = ({ children }) => {
  const [challenges, dispatch] = useReducer(
    challengifyReducer,
    JSON.parse(localStorage.getItem('challenges') || '{}'),
  );

  useEffect(() => {
    localStorage.setItem('challenges', JSON.stringify(challenges));
  }, [challenges]);

  const createNewChallenge = (name) => {
    dispatch(createChallenge(name));
  };

  const toggleDayForChallenge = (challengeId, day) => {
    dispatch(toggleDay(challengeId, day));
  };

  return (
    <ChallengeContext.Provider value={{ createNewChallenge, toggleDayForChallenge, challenges }}>
      {children}
    </ChallengeContext.Provider>
  );
};
