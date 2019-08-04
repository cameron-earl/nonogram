import React from 'react';

import { mapCompletedClues } from '../../helpers/evaluateClues';
import { GameArr } from '../../models/GameArr';
import Clue from './Clue';
import styles from './Clues.module.css';

type RowCluesProps = {
  clues: number[][];
  gameArr: GameArr;
};

const RowClues = ({ clues, gameArr }: RowCluesProps) => {
  const completeArr = clues.map((rowClues, i) => mapCompletedClues(rowClues, gameArr[i]));
  return (
    <div className={styles.RowClues}>
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

export default RowClues;
