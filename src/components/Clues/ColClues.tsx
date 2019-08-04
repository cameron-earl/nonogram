import React from 'react';

import styles from './Clues.module.css';

type ColCluesProps = {
  clues: number[][];
};

const ColClues = ({ clues }: ColCluesProps) => {
  return (
    <div className={styles.ColClues}>
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

export default ColClues;
