import React from 'react';

import { mapCompletedClues } from '../../helpers/evaluateClues';
import { GameArr, getColumn } from '../../models/GameArr';
import Clue from './Clue';
import styles from './Clues.module.css';

type ColCluesProps = {
  clues: number[][];
  gameArr: GameArr;
};

const ColClues = ({ clues, gameArr }: ColCluesProps) => {
  const completeArr = clues.map((colClues, i) => mapCompletedClues(colClues, getColumn(gameArr, i)));
  return (
    <div className={styles.ColClues}>
      {clues.map((c, ci) => (
        <div key={c + ':' + ci}>
          {c.map((clue, cluei) => (
            <Clue key={ci + '' + cluei} val={clue} complete={completeArr[ci][cluei]} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColClues;
