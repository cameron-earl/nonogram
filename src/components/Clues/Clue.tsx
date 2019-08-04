import classNames from 'classnames';
import React from 'react';

import styles from './Clues.module.css';

type ClueProps = {
  val: number;
  complete: boolean;
};

const Clue = ({ val, complete }: ClueProps) => {
  const clueClassNames = classNames(styles.Clue, { [styles.complete]: complete });
  return <div className={clueClassNames}>{val}</div>;
};

export default Clue;
