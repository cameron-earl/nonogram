import React from 'react';

import styles from './X.module.css';

const X: React.FC = () => {
  return (
    <svg className={styles.X} viewBox="0 0 100 100">
      <path d="M 7,7 L 93,93 M 93,7 L 7,93" />
    </svg>
  );
};

export default X;
