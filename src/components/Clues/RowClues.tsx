import React from 'react';

import styles from './Clues.module.css';

type RowCluesProps = {
  clues: number[][];
};

const RowClues = ({ clues }: RowCluesProps) => {
  return (
    <div className={styles.RowClues}>
      {clues.map((c, ci) => (
        <div key={c + ':' + ci}>
          {c.map((clue, cluei) => (
            <div key={ci + '' + cluei}>{clue}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RowClues;
